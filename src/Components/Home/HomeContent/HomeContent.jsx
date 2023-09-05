import Posts from "../../Posts/Posts"

function HomeContent() {
    
  return (
    <div className="w-3/4 h-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[calc(100vh_-_99px)]">
      <Posts/>
    </div>
  )
}

export default HomeContent