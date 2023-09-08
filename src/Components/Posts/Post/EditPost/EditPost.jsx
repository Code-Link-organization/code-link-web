/* eslint-disable react/prop-types */



import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../store/posts/postsSlice';
import useFetch from '../../../../CustomHooks/useFetch';
import ModalComponent from '../ModalComponent';
import { postOptions } from '../../../../options';
import { MenuButton } from './MenuButton';
import { MenuDropdown } from './MenuDropDown';

function EditPost({ post }) {
  const { fetchApi: deletePostFetch } = useFetch(`http://localhost:8000/api/posts/delete/${post.id}`, postOptions);
  const { fetchApi: editPostFetch } = useFetch(`http://localhost:8000/api/posts/edit/${post.id}`, postOptions);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const deletePostHandler = async () => {
    const resData = await deletePostFetch();
    if (resData.result) {
      dispatch(deletePost({ id: post.id }));
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openEditModal = () => {
    setMenuOpen(false); // Close the menu when Edit is clicked
    setModalOpen(true);
  }

  const closeEditModal = () => {
    setModalOpen(false);
  }

  const buttons = [
    { label: 'Edit', onClick: openEditModal },
    { label: 'Delete', onClick: deletePostHandler },
  ];

  return (
    <div className="relative">
      <div className="menu-container relative">
        <MenuButton onClick={toggleMenu} />
        <MenuDropdown buttons={buttons} isOpen={menuOpen} />
      </div>

      <ModalComponent
        editPostFetch={editPostFetch}
        post={post}
        closeModal={closeEditModal}
        open={modalOpen}
      />
    </div>
  );
}
export default EditPost;