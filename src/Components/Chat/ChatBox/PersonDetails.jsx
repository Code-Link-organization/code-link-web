import emailIcon from '../../../assets/images/chat/Frame.svg'
import personalIcon from '../../../assets/images/chat/Frame (1).svg'
import closeIcon from '../../../assets/images/chat/icons8-close-50 1.svg'
import profileImg from '../../../assets/images/chat/Ellipse 48 (2).svg'


function PersonDetails() {
    const info=[{
        text:'Ryan357@gmail.com',
        alt:'email icon',
        icon:emailIcon, },
        {
            text:'Personal information',
            alt:'personal icon',
            icon:personalIcon,
        }
    
    ]
  return (
    <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-full flex-grow py-4 px-6'>
        <button className='block  ml-auto'><img src={closeIcon} alt='close button'/></button>
        <div>
            <img  src={profileImg} alt='profile image' className='mx-auto pt-4 max-w-full'/>
            <h4 className='text-3xl text-center font-inter mt-2'>Ryan</h4>
        </div>
        <div className='flex px-10  flex-col gap-4 pt-20'>
                {
                    info.map(detail=><div className='flex gap-2 items-center' key={detail.text}>
             <img src={detail.icon} alt={detail.alt}/>
                <p>{detail.text}</p>
            </div>)
                }


        </div>
    </div>
  )
}

export default PersonDetails