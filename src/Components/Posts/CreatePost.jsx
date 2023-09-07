import { useState } from 'react';
import Profileimg from '../../assets/images/posts/Ellipse 25 (1).svg'
import ModalComponent from './Post/ModalComponent';



const CreatePost=()=> {
  const [open, setOpen] = useState(false);

  const openModal=()=>{
    setOpen(true)
  }
  const closeModal=()=>{
    setOpen(false)
  }
  return (
  <>   <div className='h-[150px] px-16 mb-2  bg-white element-center' onClick={openModal}>
        <button className="bg-white shadow-[shadow:0px_10px_10px_0px_rgba(218,218,218,0.3)] hover:opacity-50 transition-all duration-30000 rounded-full flex justify-between  w-full my-auto  h-[50px]">
        <p className="text-[rgba(152,150,150,1)] text-roboto text-xl py-2 px-5 my-auto">What’s on your mind?</p>
        <img src={Profileimg}/>
    </button>
  
   </div>  
 <ModalComponent open={open} closeModal={closeModal}/>
  </>
  )
}

export default CreatePost