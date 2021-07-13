import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { newBlog } from '../../store/blogpost';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';







const Blog = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [description, setDescription] = useState('')
    const { id } = useParams()

    const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;


    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = await dispatch(newBlog(
            name,
            title,
            content,
            description,
            id
        ))
        history.push('/blog')
    }

    return (
        <div class={theme === 'light' ? 'flex justify-center bg-light-bg p-16 pt-64' : 'flex justify-center bg-dark-bg text-grey-text p-16 pt-64'}>
            <form onSubmit={handleSubmit}>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <div>
                <label>
                    Name:
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name='name'
                    type='text'
                ></input>
            </div>
            <div>
                <label>
                    Title:
                </label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    name='title'
                    type='text'
                ></input>
            </div>
            <div>
                <label>
                    Content:
                </label>
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    name='content'
                    type='text'
                ></textarea>
            </div>
            <div>
                <label>
                    Description:
                </label>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    name='description'
                    type='text'
                ></textarea>
            </div>
            <div class='flex justify-center'>
                <button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150 flex justify-center" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150"} type='submit'>Submit</button>
            </div>
            </form>
        </div>
    )

}

export default Blog;