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
  </div></>
  )
}

export default Home
export  const  loader=async()=>{
  const response=await fetch('http://localhost:8000/api/posts',{
    method:'GET',
    headers:{
      "Authorization": "Bearer 18|fsOuawBuMJGRhNxOhZUEDjBGF4hesEK6Y8UNq0pV"
    }
  })
  if(!response.ok){
   return 0
  }
  const resData=await response.json()
  return resData.data.postData
}