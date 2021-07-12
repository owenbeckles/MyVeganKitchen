// constants
const SEARCH_RECIPE = 'session/SEARCH_RECIPE';

const searchRecipes = (recipe) => {
    return {
        type: SEARCH_RECIPE,
        payload: recipe
    }
}

export const searchBar = (type) => async dispatch => {
    const res = await fetch(`/api/search/${type}`, {
        method: 'GET',
    })
    const data = await res.json()
    dispatch(searchRecipes(data));
    return data;
}

const initialState = {}

export default function searchBarReducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case SEARCH_RECIPE:
            newState = Object.assign({}, state);
            newState.data = action.payload
            return newState
        default:
            return state;
    }
}
