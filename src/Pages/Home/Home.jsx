import FriendsList from '../../Components/Home/FriendsList/FriendsList'
import HomeContent from '../../Components/Home/HomeContent/HomeContent'
import Header from '../../Components/StartPage/Header'
function Home() {

  return (
  <>
  <Header></Header>
  <div className='flex'>
    <FriendsList/>
    <HomeContent />
  </div>
  </>
  )
}

export default Home