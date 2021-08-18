import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { getIndividualRecipe } from '../../store/recipe';
import { postComments, deleteComments } from '../../store/comment';
import { ThemeContext } from '../../context/ThemeContext';
import { deleteUserPosts, getAllBlogPosts } from '../../store/blogpost';




const IndividualPost = ({post, blogId, setBlogId}) => {
    const history = useHistory()
    const dispatch = useDispatch();
    
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    const paragraph = post.content.split(';');
    const {id} = useParams()

    const handleClick = () => {
        dispatch(deleteUserPosts(post.id))
        window.location.reload();
    }

    return (
        <div style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
                        <div class='mt-8'>
                <h1 className='recipe-title' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>{post.title}</h1>
                {}
            </div>
            <div>
                <div class='ml-16'>
                    {paragraph.map((content) => {
                        return (
                            <p>{content}</p>
                        )
                    })}
                </div>
            </div>
            <div class='flex justify-center'>
                <button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150 flex justify-center" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150"} onClick={() => handleClick()}>Delete</button>
            </div>
        </div>
    )
}

export default IndividualPost;