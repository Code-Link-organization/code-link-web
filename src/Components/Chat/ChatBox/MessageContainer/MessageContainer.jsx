import MessageComponent from "./MessageComponent"
import personImg1 from '../../../../assets/images/chat/Ellipse 25.svg'
import personImg2 from '../../../../assets/images/chat/Ellipse 35.svg'

function MessageContainer() {
  return (
    <div className="bg-white relative z-[-1] h-[calc(100%_-_182px)] px-4 py-4">
    <MessageComponent img={personImg2} text='Are you front end?' time='2:05Pm' user={true}/>
    <MessageComponent img={personImg1} text='Yes,What about you?' time='2:15Pm' />
    <MessageComponent img={personImg2} text='I’m interested in Back End?' time='2:30Pm' user={true}/>

    </div>
  )
}

export default MessageContainer