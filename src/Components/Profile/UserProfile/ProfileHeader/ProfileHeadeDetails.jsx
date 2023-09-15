import inviteIcon from '../../../../assets/images/profile/add-friend 1.svg'
import editPersonalInformation from '../../../../assets/images/profile/writing-notepad-svgrepo-com 1.svg'
import ProfileOptions from './ProfileOptions'
import ProfileNumbers from './ProfileNumbers'

function ProfileHeadeDetails() {
  return (
     <>
        <div className='bg-white shadow-[0px_6px_20px_0px_rgba(218,218,218,0.3)] h-96  -top-[90px]   w-[488px]
         rounded-2xl relative px-5 py-5'>
            <div className='flex justify-between items-start w-full'>
            <button><img src={inviteIcon}/></button>
            <button><img src={editPersonalInformation}/></button>                
            </div>
            <div className='pt-16'>
                <h3 className='font-bold text-center text-lg pb-[6px]'>Emilia William</h3>
                <p className='text-[rgba(184,184,184,1)] text-center text-sm mb-4'>UI/UX designer</p>
                <ProfileOptions/>
                <ProfileNumbers/>               
            </div>



        </div>     

     </>
    )
}

export default ProfileHeadeDetails