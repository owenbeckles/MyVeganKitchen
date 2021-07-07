// constants
const GET_RECIPE = 'recipe/GET_RECIPE';
const ALL_RECIPES = 'recipe/ALL_RECIPES';


// thunks
const getRecipe = (recipe) => {
    return {
        type: GET_RECIPE,
        payload: recipe,
    }
}

const allRecipes = (recipe) => {
    return {
        type: ALL_RECIPES,
        payload: recipe,
    }
}


export const getIndividualRecipe = (id) => async (dispatch) => {
    const res = await fetch(`/api/recipes/${id}`, {
        method: 'GET'
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(getRecipe(data));
}

export const getAllRecipes = () => async (dispatch) => {
    const res = await fetch('/api/recipes', {
        method: 'GET',
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(allRecipes(data));
}

const initialState = {};

export default function recipesReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_RECIPE:
            newState = Object.assign({}, state);
            action.payload.forEach(recipe => {
                newState[recipe.id] = recipe;
            });
            return newState;
        case ALL_RECIPES:
            newState = Object.assign({}, state);
            action.payload.forEach(recipe => {
                newState[recipe.id] = recipe;
            });
            return newState;
        default:
            return state;
    }
};

