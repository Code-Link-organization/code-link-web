import tracks from "../../fakedata/tracks"
import BoxItem from "../Home/HomeSideBar/BoxItem"
import TrackItem from "./TrackItem"
function Tracks() {
  return (
    <div className="scroll-y  overflow-y-auto custom-scrollbar">
        <h2 className="text-xl my-6 font-normal">Choose your technical circle!</h2>
        <div  className="flex flex-wrap justify-between h-fit  w-full ">
                    {tracks.map((track, index) => {
            return <BoxItem key={index} imgPath={track.trackImg} path={track.trackText} />
        })}
        </div>

    </div>
  )
}

export default Tracks