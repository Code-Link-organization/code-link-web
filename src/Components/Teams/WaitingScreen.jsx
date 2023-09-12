import JoinUsImage from '../../assets/images/teams/Work time-pana 1.svg'

function WaitingScreen() {
  return (
    <div className='w-1/2 center-element element-center flex-col border-[rgba(209,208,208,1)] border-b-0 border-[1px] '>
        <h2 className='font-roboto text-3xl mb-[70px]'>Wait for the request to be accepted</h2>
        <img src={JoinUsImage} alt="join us" className='w-[500px] max-w-full'/>
    </div>
  )
}

export default WaitingScreen