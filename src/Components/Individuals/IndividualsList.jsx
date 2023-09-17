import { useEffect, useState } from 'react'
import { api } from '../../api'
import useFetch from '../../CustomHooks/useFetch'
import { getOptions } from '../../options'
import SearchField from '../GlobalComponents/SearchField'
import Indivdual from './Individual'
import ReactLoading from 'react-loading';


function IndividualsList() {
  const {fetchApi:getAllUsers, loading}=useFetch(`${api}/users`,getOptions,true)
  const [keyword,setKeyWord]=useState('')
  const {fetchApi:getSearch,loading:searchLoading}=useFetch(`${api}/search/users?query=${keyword}`,getOptions,true)
  const [currentUsers,setCurrentUsers]=useState([]);
  useEffect(()=>{
    const fetchUsers=async()=>{
      const resData=await getAllUsers();
      if(resData){
        setCurrentUsers(resData.data.users)
      }

      }
      fetchUsers()

  },[])

  return (
   <>
    <SearchField setKeyWord={setKeyWord} getSearch={getSearch} type='users' setCurrent={setCurrentUsers}/>
    {(searchLoading | loading)?       <div className="element-center center-element mx-auto h-full mt-10 w-[60px]">             <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={40}
          width={40}
        /></div>:<div className='flex flex-col gap-4 w-full py-8 h-[calc(100vh_-_99px)]'>
                     { currentUsers.map(user=> <Indivdual key={user.id} name={user.name}
               img={user.imageUrl} track={user.track} id={user.id} followed={true}/>)}
    </div>}
    </>
  )
}

export default IndividualsList