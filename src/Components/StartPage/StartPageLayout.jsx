/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { errorsToNull } from "../../store/user/userSlice";
import { content } from "./content";
import useChangeContent from "./useChangeContent";
function StartPageLayout({children}) {
  const {currentContent,activeContent}=useChangeContent(content.length)
  const dispatch=useDispatch()


  useEffect(()=>{
   dispatch(errorsToNull())
  },[location])
 

  return( 
   <>
       <div className="flex flex-row-reverse h-[calc(100vh_-_100px)] container ">
      <div className="w-1/2 flex items-center flex-col h-full justify-center ">
        {location.pathname === "/" ? (
          <>
            <p className="text-4xl text-center min-h-[200px]">{content[currentContent].text}</p>
            <Link to="/signup">
              <button className="btn shadow-btnshadow">{`Let's Start`}</button>
            </Link>
          </>
        ) : (
          children
        )}

      </div>
      <div
        className={`w-1/2 transition-all duration-500  flex justify-center items-center flex-col gap-1  ${
          activeContent ? "opacity-100" : "opacity-0"
        } `}
      >
        <img src={content[currentContent].imgPath} alt="start-img" className="w-[80%]" />
      </div>
    </div>
   </>);
  
}
export default StartPageLayout;