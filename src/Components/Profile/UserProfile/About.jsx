/* eslint-disable react/prop-types */

function About({user}) {
  return (
       <div className="bg-white pt-4  w-full">
     <span className="border-t-[rgba(251,249,247,1)] border-t-[11px] absolute left-0 w-full"></span>
     <h4 className="text-base pt-5 font-semibold">About</h4>
     <p className="pt-3 text-base">{user.bio?user.bio:'no bio'}</p>
     </div> 
     
     
  )
}

export default About