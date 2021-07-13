// constants
const POST_COMMENT = 'session/POST_COMMENT';
const EDIT_COMMENT = 'session/EDIT_COMMENT';
const DELETE_COMMENT = 'session/DELETE_COMMENT';

// thunks 
const postComment = (payload) => {
    return {
        type: POST_COMMENT,
        payload,
    }
}

const editComment = (comment) => {
    return {
        type: EDIT_COMMENT,
        payload: comment,
    }
}

const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENT,
        payload: comment,
    }
}

export const postComments = (comment, recipeId) => async (dispatch) => {
    const res = await fetch(`/api/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comment,
            recipeId,
        })
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(postComment(data));
    return data;
}

export const editComments = (comment, id) => async (dispatch) => {
    const res = await fetch(`/api/users/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ({
            comment,
            id,
        })
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(editComment(data));
}

export const deleteComments = (comment) => async (dispatch) => {
    const res = await fetch(`/api/users/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            comment,
        })

    })
    const data = await res.json();
    if (data.errors) {
        console.log(data)
    }
    dispatch(deleteComment(data))
    return data;
}


export default function commentsReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case POST_COMMENT:
            newState = [...state];
            newState.push(action.payload.comment);
            return newState;
        case DELETE_COMMENT:
            newState = [...state];
            newState.forEach(id => {
                if (newState[id].id === action.payload.id) newState.splice(id, 1)
            })
            return newState;
        case EDIT_COMMENT:
            newState = [...state];
            newState.forEach(id => {
                if (newState[id].id === action.payload.id) newState.splice(id, 1)
            })
            return newState;
        default:
            return state;
    }
}

