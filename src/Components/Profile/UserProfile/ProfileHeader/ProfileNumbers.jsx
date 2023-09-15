
function ProfileNumbers() {
    const numbers=[
        {
         number:'400',
         text:'Following',
        },
        {
        number:'30k',
        text:'Followers'    
        },
        {
        number:'100k',
        text:'Likes'    
        }
    ]
  return (
    <div className="flex text-center mt-5 gap-20 items-center justify-center">
        {numbers.map(({number,text},id)=><div key={id}>
            <span className="text-base font-bold mb-1">{number}</span>
            <p className="text-base text-[rgba(133,133,133,1)] font-medium">{text}</p>
            </div>)}
    </div>
  )
}

export default ProfileNumbers