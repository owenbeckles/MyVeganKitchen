import React, { useState } from 'react';
import { editComments } from '../store/comment';
import { useDispatch } from 'react-redux';


const CommentForm = ({recipe, comment, setComments, setIsLoading}) => {
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const [commentOne, setCommentOne] = useState(comment)
    let commentArr = recipe['comment']
    console.log(commentArr)

    const sort = () => {
        for (let i = 0; i < recipe['comment'].length; i++) {
            if (recipe['comment'][i].comment === comment) {
                setId(recipe['comment'][i].id)
            }
        }
    }
    

    const handleClick = async(e) => {
        e.preventDefault()
        await sort()
        console.log("Im in the edit comment function", id)
        const { comments: cs } = dispatch(editComments(comment, id));
        setComments(cs);
        setIsLoading((prev) => !prev);
    }

    return (
        <form className="mt-5 sm:flex sm:items-center">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="email" className="sr-only">
            comment
          </label>
          <textarea
            type="text"
            value={commentOne}
            onChange={(e) => setCommentOne(e.target.value)}  
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Say something..."
          />
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-peach hover:bg-white hover:text-peach focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Comment
        </button>
      </form>
    )
}

export default CommentForm;