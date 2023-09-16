/* eslint-disable react/prop-types */
import useFetch from "../../../CustomHooks/useFetch"
import { postOptions } from "../../../options"
import ReactLoading from 'react-loading';

function SavePersonalInformation({userId,formData}) {
    const {fetchApi:editPersonalInformation,loading}=useFetch(`http://localhost:8000/api/profile/edit-info/${userId}`,postOptions)
    const saveHandler=async(e)=>{
        console.log(formData)
      const formatData = new FormData();
  for (const key in formData) {
    console.log(key,formData[key])
    formatData.append(`${key}`, formData[key]);
  }         
       const res=await editPersonalInformation(formatData)
       console.log(res)

    }
  return (<>
               {!loading?
    <button className="btn w-fit  px-20 py-4 text-lg font-medium mx-auto mt-8" onClick={saveHandler}>Save</button>:
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

export default SavePersonalInformation