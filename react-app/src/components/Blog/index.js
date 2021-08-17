import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { newBlog } from '../../store/blogpost';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'







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
        // <div class={theme === 'light' ? 'flex justify-center bg-light-bg p-16 pt-64' : 'flex justify-center bg-dark-bg text-grey-text p-16 pt-64'}>
        //     <form onSubmit={handleSubmit}>
        //     <div>
        //       {errors.map((error) => (
        //         <div>{error}</div>
        //       ))}
        //     </div>
        //     <div>
        //         <label>
        //             Name:
        //         </label>
        //         <input
        //             onChange={(e) => setName(e.target.value)}
        //             value={name}
        //             name='name'
        //             type='text'
        //         ></input>
        //     </div>
        //     <div>
        //         <label>
        //             Title:
        //         </label>
        //         <input
        //             onChange={(e) => setTitle(e.target.value)}
        //             value={title}
        //             name='title'
        //             type='text'
        //         ></input>
        //     </div>
        //     <div>
        //         <label>
        //             Content:
        //         </label>
        //         <textarea
        //             onChange={(e) => setContent(e.target.value)}
        //             value={content}
        //             name='content'
        //             type='text'
        //         ></textarea>
        //     </div>
        //     <div>
        //         <label>
        //             Description:
        //         </label>
        //         <textarea
        //             onChange={(e) => setDescription(e.target.value)}
        //             value={description}
        //             name='description'
        //             type='text'
        //         ></textarea>
        //     </div>
        //     <div class='flex justify-center'>
        //         <button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150 flex justify-center" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150"} type='submit'>Submit</button>
        //     </div>
        //     </form>

        //     <div className="relative bg-white">
        

        <div class={theme === 'light' ? ' bg-light-bg text-grey-text p-16 pt-16' : 'bg-dark-bg text-grey-text p-16 pt-16'}>
                <div className={theme === 'light' ? "bg-light-bg" : "bg-dark-bg"}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={theme === 'light' ? "text-base font-semibold text-peach tracking-wide uppercase": "text-base font-semibold text-avocado tracking-wide uppercase"}>Have insightful knowledge to share with our community?</h2>
          <p className={theme === 'light' ? "mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl" : "mt-1 text-4xl font-extrabold text-grey-text sm:text-5xl sm:tracking-tight lg:text-6xl"}>
            Let's hear about it.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Create a new blog post:
          </p>
        </div>
      </div>
    </div>
  
        <div className={theme === 'light' ? "bg-light-bg lg:col-span-3 lg:px-8 xl:pl-12" : "bg-dark-bg lg:col-span-3 lg:px-8 xl:pl-12"}>
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
                </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  id="full-name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-peach focus:border-peach border-gray-300 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id="email"
                  name="title"
                  type="text"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Title"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Description
                </label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  name="description"
                  id="phone"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Description"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Content
                </label>
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  id="message"
                  name="content"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 h-96 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Content"
                  defaultValue={''}
                />
              </div>
              <div class='flex justify-center'>
                <button
                  type="submit"
                  className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150 flex justify-center" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-8 mb-1 mt-8 ease-linear transition-all duration-150"}
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
     </div>
        // </div>
    )

}

export default Blog;