// constants
const ALL_RECIPES = 'recipe/ALL_RECIPES';


// thunks
const allRecipes = (recipe) => {
    return {
        type: ALL_RECIPES,
        payload: recipe,
    }
}


export const getAllRecipes = () => async (dispatch) => {
    const res = await fetch('/api/recipes/', {
        method: 'GET',
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(allRecipes(data.recipe));
}

const initialState = {};

export default function recipesReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
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

