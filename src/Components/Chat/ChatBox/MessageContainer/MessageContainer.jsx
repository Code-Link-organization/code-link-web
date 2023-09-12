/* eslint-disable react/prop-types */
import MessageComponent from "./MessageComponent"
import personImg1 from '../../../../assets/images/chat/Ellipse 25.svg'
import personImg2 from '../../../../assets/images/chat/Ellipse 35.svg'

function MessageContainer({messages}) {
  return (
    <div className=" relative  h-[calc(100%_-_182px)] px-4 py-4">
      {
        messages.map((message, index) => (
          <MessageComponent key={index} img={message.img} time={message.time}
           text={message.text} date={message.data} user={message.user?message.user:false} />
        ))
      }


    </div>
  )
}

export default MessageContainer