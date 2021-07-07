// constants
const ADD_ITEM = 'mykitchen/ADD_ITEM';
const DELETE_ITEM = 'mykitchen/DELETE_ITEM';

const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

const removeItem = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

export const addUserItems = (recipeId, mealPlanId, blogId, userId) => async (dispatch) => {
    const res = await fetch(`/api/users/mykitchen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            itemId: 0,
            flag
        })
    })
}

export default function myKitchenReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case ADD_ITEM:
    }
}