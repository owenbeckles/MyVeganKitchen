// constants
const SEARCH_RECIPE = 'session/SEARCH/RECIPE';

const searchRecipes = (recipe) => {
    return {
        type: SEARCH_RECIPE,
        payload: recipe
    }
}

// export const searchForRecipe = () => async (dispatch) => {
//     const res = await fetch('/api/search/${}')
// }