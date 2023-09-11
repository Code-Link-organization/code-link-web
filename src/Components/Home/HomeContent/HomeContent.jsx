import CreatePost from "../../Posts/CreatePost"
import Posts from "../../Posts/Posts"



function HomeContent() {
  return (
    <div className="w-1/2 h-full  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[calc(100vh_-_99px)] bg-[rgba(252,250,248,1)]">  
    <div className="w-full  2xl:w-[700px] 2xl:mx-auto !2xl:px-0 px-9">
      <CreatePost/>    
      <Posts/>
    </div>
    </div>
  )
}

export default HomeContent