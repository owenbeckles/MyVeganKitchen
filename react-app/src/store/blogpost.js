// constants
const ALL_POSTS = 'blogpost/ALL_POSTS';
const CREATE_POST = 'blogpost/CREATE_POST';
const DELETE_POST = 'blogpost/DELETE_POST';


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

const deletePost = (post) => {
    return {
        type: DELETE_POST,
        post
    }
}


export const deleteUserPosts = (id) => async(dispatch) => {
    const res = await fetch(`/api/blog/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    })
    const data = await res.json();
    if (data.errors) {
        return data;
    }
    // console.log(data.post)
    dispatch(deletePost(data))
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

export const newBlog = (name, title, content, description, id) => async (dispatch) => {
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
            id
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
            newState = {...state}
            // let post = action.post
            let id = action.post.id
            console.log(newState)
        //     newState = {...state};
        //     // action.payload.forEach(blog => {
        //     //     newState[blog.id] = blog
        //     // });
            delete newState.id
            return newState;
        default:
            return state;
    }
};