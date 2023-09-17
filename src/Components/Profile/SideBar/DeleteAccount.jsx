/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useFetch from "../../../CustomHooks/useFetch"
import { postOptions } from "../../../options"
import ReactLoading from 'react-loading';
import {useNavigate} from 'react-router-dom'
import deleteAccountIcon from '../../../assets/images/profile/sidebar/deleteAccount.svg'

function DeleteAccount({user}) {
    const {fetchApi:deleteAccount,loading}=useFetch(`http://localhost:8000/api/profile/delete-account/${user.id}`,postOptions)
    const navigate=useNavigate()
    
    const deleteHandler =async ()=>{

       if(confirm('are you sure you want to delete')){
        const resData=await deleteAccount()
        if(resData.ok){
            localStorage.clear()
            navigate('/')
        }
    }
       }
  return (
    
        <>
        {!loading? 
              <button onClick={deleteHandler}  className='py-5 flex gap-3 items-center pl-11 text-2xl hover:bg-gray-300 transition-all duration-500'><img src={deleteAccountIcon}/>Delete account</button>:
         <div className="element-center center-element mx-auto w-[60px]">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>

        }
        </>
    
  )
}

export default DeleteAccount