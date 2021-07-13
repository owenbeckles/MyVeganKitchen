import React, { useState, useContext } from 'react';
import { Modal } from '../../context/Modal';
import CommentBox from '../../components/CommentBox';
import CommentForm from '../CommentForm';
import { ThemeContext } from '../../context/ThemeContext';

function EditModal({recipe, comment, setComments, setIsLoading, setComment}) {
  const [showModal, setShowModal] = useState(false);
  const { setTheme, light, dark, theme } = useContext(ThemeContext);
    const themeChoice = theme === 'light' ? light : dark;

  return (
    <>
      <button className={theme === 'light' ? "text-peach bg-transparent border border-solid border-peach hover:bg-peach hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-8 ease-linear transition-all duration-150 pr-6 pl-6" : "text-avocado bg-transparent border border-solid border-avocado hover:bg-avocado hover:text-black active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 mt-8 ease-linear transition-all duration-150 pr-6 pl-6"} onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm recipe={recipe} comment={comment} setComments={setComments} setIsLoading={setIsLoading} setComment={setComment}/>
        </Modal>
      )}
    </>
  );
}

export default EditModal;