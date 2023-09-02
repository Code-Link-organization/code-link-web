import RequestItem from "./RequestItem"

function Requests() {
  return (
    <div className="border-b-4 border-b-white">
        <div className="flex justify-between items-center text-inter ">
            <h3 className=" font-bold text-xl text-customblack">Follow-up requests</h3>
            <button className="text-base">View all</button>
        </div>
        <div className="flex flex-col gap-3">
            <RequestItem/>
            <RequestItem/>
            <RequestItem/>

        </div>
    </div>
  )
}

export default Requests