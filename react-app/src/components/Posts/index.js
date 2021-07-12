import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/ThemeContext';
import { getAllBlogPosts } from '../../store/blogpost';
import { useHistory } from 'react-router-dom';
import IndividualPost from '../IndividualPost';

const Posts = () => {
    const blog = useSelector((state) => state.posts)
    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;
    const dispatch = useDispatch();
    console.log(blog.name)
    const [activePost, setactivePost] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async() => {
            await dispatch(getAllBlogPosts());
            setLoaded(!loaded)
        })()
    }, [isLoading])

    return (
        <div className='flex flex-col-reverse' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
    <div className='flex flex-col justify-between pt-5 pb-16 pl-16 mt-16' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
        {Object.values(blog).map((post, i) => {
            return (
                <a className={theme === 'light' ? 'hover:text-peach pb-16' : 'hover:text-avocado pb-16'} key={i} onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo(0,0)
                    setactivePost(post)
                }}>{post.title}</a>
            )
        })}
    </div>
        {activePost && <IndividualPost post={activePost} setIsLoading={setIsLoading} />}
        </div>
    )
    
}



export default Posts;