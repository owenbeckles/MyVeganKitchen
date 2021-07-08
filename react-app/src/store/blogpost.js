// constants
const GET_POST = 'recipe/GET_POST';
const ALL_POSTS = 'recipe/ALL_POSTS';


// thunks
const getPost = (post) => {
    return {
        type: GET_POST,
        payload: post,
    }
}

const allPosts = (post) => {
    return {
        type: ALL_POSTS,
        payload: post,
    }
}


export const getIndividualBlogPost = (id) => async (dispatch) => {
    const res = await fetch(`/api/blog/${id}`, {
        method: 'GET'
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(getPost(data));
}

export const getAllBlogPosts = () => async (dispatch) => {
    const res = await fetch('/api/blog/', {
        method: 'GET',
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(allPosts(data.post));
}

const initialState = {};

export default function blogPostReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_POST:
            newState = Object.assign({}, state);
            action.payload.forEach(blog => {
                newState[blog.id] = blog;
            });
            return newState;
        case ALL_POSTS:
            newState = Object.assign({}, state);
            action.payload.forEach(blog => {
                newState[blog.id] = blog
            });
            return newState;
        default:
            return state;
    }
};