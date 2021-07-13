import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComments } from '../store/comment';
import EditModal from '../components/EditModal';


const CommentBox = ({comment, recipe, setComments, setIsLoading, setComment}) => {
    const dispatch = useDispatch();
    const deleteClick = (comment_id) => {
        console.log(comment_id)
        console.log(comment)
        dispatch(deleteComments(comment_id));
    }

    return (
        <div>                        
            <div>{comment}</div>
            <div><button onClick={() => deleteClick(comment)}>Delete</button></div>
            <EditModal recipe={recipe} comment={comment} setComments={setComments} setIsLoading={setIsLoading} setComment={setComment}/>
        </div>
    )
}

export default CommentBox;