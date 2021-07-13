import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentBox from '../../components/CommentBox';
import CommentForm from '../CommentForm';

function EditModal({recipe, comment, setComments, setIsLoading, setComment}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm recipe={recipe} comment={comment} setComments={setComments} setIsLoading={setIsLoading} setComment={setComment}/>
        </Modal>
      )}
    </>
  );
}

export default EditModal;