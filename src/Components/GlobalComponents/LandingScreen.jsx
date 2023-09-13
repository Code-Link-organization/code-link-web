import landingimage from '../../assets/images/global/Team spirit-cuate 1.svg'
function LandingScreen({title}) {
  return (
    <div className="w-full h-full element-center center-element shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] flex-col border-[rgba(209,208,208,1)]">
        <h4 className='font-semibold text-4xl'>{title}</h4>
        <h3 className='text-xl font-semibold'>We are happy to have you with us and wish you a happy trip</h3>
        <img src={landingimage} alt='landing' />
    </div>

  )
}

export default LandingScreen