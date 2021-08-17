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
    const [blogId, setBlogId] = useState(null)
    console.log(blog.name)
    const [activePost, setactivePost] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async() => {
            await dispatch(getAllBlogPosts());
            setLoaded(!loaded)
        })()
    }, [isLoading, blogId])

    return (
    <div class='z-0'>
        <div className={theme === 'light' ? "relative bg-peach" : "relative bg-avocado"}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="https://live.staticflickr.com/65535/51383430738_fd79d7d6ba_b.jpg"
            alt=""
          />
          <div className={theme === 'light' ? "absolute inset-0 mix-blend-multiply" : "absolute inset-0 mix-blend-multiply"} aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">My Vegan Blog.</h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            A culmination of knowledge on your favorite super foods, all in one place.
          </p>
        </div>
      </div>
        <div className='flex flex-col-reverse' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
            
    <div className='flex flex-col justify-between pt-5 pb-16 pl-16 mt-16' style={{backgroundColor: themeChoice.background, color: themeChoice.text}}>
        {Object.values(blog).map((post, i) => {
            return (
                <a className={theme === 'light' ? 'hover:text-peach pb-16 cursor-pointer' : 'hover:text-avocado pb-16 cursor-pointer'} key={i} onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo(0,0)
                    setactivePost(post)
                }}>{post.title}</a>
            )
        })}
    </div>
        {activePost && <IndividualPost blogId={blogId} setBlogId={setBlogId} post={activePost} setIsLoading={setIsLoading} />}
        </div>
        </div>
    )
    
}



export default Posts;