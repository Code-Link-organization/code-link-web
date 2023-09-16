import { useState } from 'react';
import ModalComponent from './Post/ModalComponent';
import noPicture from '../../assets/images/profile/no-profile-picture.svg'
import { useSelector } from 'react-redux';
import { imgLink } from '../../api';

const CreatePost=()=> {
  const [open, setOpen] = useState(false);
  const user = useSelector(state=>state.auth.user)

  const openModal=()=>{
    setOpen(true)
  }
  const closeModal=()=>{
    setOpen(false)
  }
  return (
  <>   <div className='mt-[32px] mb-[50px]  mb-2   element-center' >
            <img className='w-14 rounded-full h-14' src={user&&user.imageUrl?`${imgLink}/${user.imageUrl}`:noPicture}/>

        <button onClick={openModal} className="text-[rgba(152,150,150,1)] text-base flex items-center text-roboto text-xl bg-white pl-11 shadow-[shadow:0px_10px_10px_0px_rgba(218,218,218,0.3)] hover:opacity-50 transition-all duration-30000    w-full rounded-2xl   h-[50px]">
        What’s on your mind?
    </button>
    
   </div>  
 <ModalComponent open={open} closeModal={closeModal}/>
  </>
  )
}

export default CreatePost