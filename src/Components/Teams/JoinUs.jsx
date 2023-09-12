import JoinUsImage from '../../assets/images/teams/Add tasks-amico 1.svg'
function JoinUs() {
  return (
    <div className='w-1/2 center-element element-center flex-col  '>
        <span className='mb-8 text-2xl font-inter capitalize'>join us</span>
        <h2 className='font-semibold text-xl mb-[70px]'>We are happy to have you with us and wish you a happy trip</h2>
        <img src={JoinUsImage} alt="join us" className='w-[500px] max-w-full'/>
    </div>
  )
}

export default JoinUs