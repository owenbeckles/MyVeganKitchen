import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComments } from '../store/comment';
import EditModal from '../components/EditModal';
import { ThemeContext } from '../context/ThemeContext';


const CommentBox = ({comment, recipe, setComments, setIsLoading, setComment}) => {
    const dispatch = useDispatch();
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    const user = useSelector((state) => state.session.user)

    const deleteClick = (comment_id) => {
        console.log(comment_id)
        console.log(comment)
        dispatch(deleteComments(comment_id))
        window.location.reload()
    }

    return (
        <div class='flex flex-row'>                        
            <div><strong>{comment}</strong></div>
            
                <div><button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150"} onClick={() => deleteClick(comment)}>Delete</button></div>
                <EditModal recipe={recipe} comment={comment} setComments={setComments} setIsLoading={setIsLoading} setComment={setComment}/>
            
        </div>
    )
}

export default CommentBox;