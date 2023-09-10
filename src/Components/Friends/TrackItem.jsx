/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

function TrackItem({track}) {
  return (
    <div className="w-[141px] h-[141px]">
     <img img={track.trackImg} src={track.trackText}/>
     <h2 className="text-lg">{track.trackText}</h2>
    </div>
  )
}

export default TrackItem