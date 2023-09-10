import logo from '../../assets/images/logo.svg'
import StartPageNav from './StartPageNav'


function Header() {

  return (
    <div  className=' py-7 bg-white border-b-[1.5px] border-b-[rgba(227, 227, 227, 1)] border-solid'>
     <div className='container flex justify-between items-center'>
                          <h1 className='flex text-3xl gap-5 font-bold  items-center'><img src={logo} className='w-[54px]'/> CodeLink</h1>
    <StartPageNav/>
    
     </div>
    </div>
  )
}

export default Header