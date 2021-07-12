// constants
// const GET_POST = 'recipe/GET_POST';
const ALL_POSTS = 'blogpost/ALL_POSTS';
const CREATE_POST = 'blogpost/CREATE_POST';
const DELETE_POST = 'blogpost/DELETE_POST';

// thunks
// const getPost = (post) => {
//     return {
//         type: GET_POST,
//         payload: post,
//     }
// }

const allPosts = (post) => {
    return {
        type: ALL_POSTS,
        payload: post,
    }
}

const createPost = (payload) => {
    return {
        type: CREATE_POST,
        payload
    }
}

const deletePost = (payload) => {
    return {
        type: DELETE_POST,
        payload
    }
}


export const deleteUserPosts = (id) => async(dispatch) => {
    const res = await fetch(`/api/blog/`, {
        method: 'DELETE',
    })
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(deletePost(data.post))
}

export const getAllBlogPosts = () => async (dispatch) => {
    const res = await fetch('/api/blog', {
        method: 'GET',
    });
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(allPosts(data.post));
}

export const newBlog = (name, title, content, description, blogId) => async (dispatch) => {
    const res = await fetch('/api/blog/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            title,
            content,
            description,
            blogId
        })
    })
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    dispatch(createPost(data));
}

const initialState = {};

export default function blogPostReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        // case GET_POST:
        //     newState = Object.assign({}, state);
        //     action.payload.forEach(blog => {
        //         newState[blog.id] = blog;
        //     });
        //     return newState;
        case ALL_POSTS:
            newState = Object.assign({}, state);
            action.payload.forEach(blog => {
                newState[blog.id] = blog
            });
            return newState;
        case CREATE_POST:
            newState = {...state}
            newState['name'] = action.payload.name
            newState['title'] = action.payload.title
            newState['content'] = action.payload.content
            newState['description'] = action.payload.description
            return newState;
        case DELETE_POST:
            newState = Object.assign({}, state);
            action.payload.forEach(blog => {
                newState[blog.id] = blog
            });
            return newState;
        default:
            return state;
    }
};