/* eslint-disable react/prop-types */
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
    border: 'none',
  },
};

function ModalComponent({ open, closeModal, editPostFetch, post, editLoading, editError }) {
  return (
    <>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <CreatePostModal closeModal={closeModal} editPost={editPostFetch} editError={editError} editLoading={editLoading} post={post} />
      </Modal>
    </>
  );
}

export default ModalComponent;
