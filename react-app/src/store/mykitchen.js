// constants
const ADD_ITEM = 'mykitchen/ADD_ITEM';
const DELETE_ITEM = 'mykitchen/DELETE_ITEM';
const CREATE_RECIPE = 'mykitchen/CREATE_RECIPE';

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

const createRecipe = (payload) => {
    return {
        type: CREATE_RECIPE,
        payload
    }
}

export const creatingRecipes = (name, title, type, description, instructions, ingredients) => async (dispatch) => {
    const res = await fetch('/api/users/mykitchen', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            title,
            type,
            description,
            instructions, 
            ingredients, 
        })
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(createRecipe(data));
    return data;
}

export const addUserItems = (itemId, type) => async (dispatch) => {
    const res = await fetch(`/api/users/mykitchen`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            itemId,
            type
        })
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(addItem(data));
}

export const deleteUserItems = (itemId, type) => async (dispatch) => {
    const res = await fetch(`/api/users/mykitchen`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            itemId,
            type
        })
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(removeItem(data));
}

const initialState = {}

export default function myKitchenReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case CREATE_RECIPE:
            newState = Object.assign({}, state)
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return state;
    }
}