import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { getIndividualRecipe } from '../../store/recipe';
import { postComments, deleteComments } from '../../store/comment';
import { ThemeContext } from '../../context/ThemeContext';
import { deleteUserPosts } from '../../store/blogpost';




const IndividualPost = ({post}) => {
    const dispatch = useDispatch();
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    const paragraph = post.content.split(';');
    const {id} = useParams()

    const handleClick = () => {
        dispatch(deleteUserPosts())
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
            {/* <div>
                <button onClick={handleClick}>Delete</button>
            </div> */}
        </div>
    )
}

export default IndividualPost;