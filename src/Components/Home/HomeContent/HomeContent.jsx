import CreatePost from "../../Posts/CreatePost"
import Posts from "../../Posts/Posts"



function HomeContent() {


  return (
    <div className="w-1/2 h-full  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[calc(100vh_-_99px)] bg-[rgba(237,237,237,1)]">  
      <CreatePost/>    
      <Posts/>
    </div>
  )
}

export default HomeContent