// constants
const GET_INFO = 'session/GET_INFO';
const EDIT_INFO = 'session/EDIT_INFO';

const getInfo = (info) => {
    return {
        type: GET_INFO,
        payload: info,
    }
}

const editInfo = (info) => {
    return {
        type: EDIT_INFO,
        payload: info,
    }
}

export const getUserSettings = (username, firstname, lastname, email, id) => async (dispatch) => {
    const res = await fetch(`/api/users/settings/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            firstname,
            lastname,
            email,
            id
        })
    });
    const data = await res.json();
    if (data.errors) return data;
    dispatch(getInfo(data));
}

export const editUserSettings = (username, email, id) => async (dispatch) => {
    const res = await fetch(`/api/users/settings/${id}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            id
        })
    });
    const data = await res.json();
    if (data.errors) return data;
    dispatch(editInfo(data));
}

const initialState = {}

export default function settings(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_INFO:
            newState.Object.assign({}, state);
            
    }
}