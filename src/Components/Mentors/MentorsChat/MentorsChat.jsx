/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import ChatBoxHeader from '../../Chat/ChatBox/ChatBoxHeader';
import SendMessage from '../../Chat/ChatBox/SendMessage';
import MessageContainer from '../../Chat/ChatBox/MessageContainer/MessageContainer';

function MentorsChat({ selectedChat }) {
  const [messages, setMessages] = useState([
    {
      img: selectedChat.mentorImage,
      text: 'How can I help you?',
      time: '6:37 PM',
    },
  ]);

  useEffect(() => {
    setMessages([
      {
        img: selectedChat.mentorImage,
        text: 'How can I help you?',
        time: '6:37 PM',
      },
    ]);
  }, [selectedChat]);

  return (
    <div className='w-1/4 flex-col h-full flex bg-[rgba(252,250,248,1)]'>
      <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]'>
        <ChatBoxHeader selectedChat={selectedChat} />
      </div>

      <div className='pt-9 overflow-y-auto custom-scrollbar'>
        <div className='w-44 h-44 bg-white rounded-full mx-auto element-center center-element mb-4'>
          <img
            src={selectedChat.mentorImage}
            className='rounded-full w-[85px]'
            alt='profile'
          />
        </div>
        <p className='text-xs font-semibold text-center'>
          You follow each other on CodeLink <br />
          He lives in USA
        </p>
        <MessageContainer messages={messages} profileimg={selectedChat.mentorImage} />
      </div>

      <div className='mt-auto'>
        <SendMessage setMessages={setMessages} profileimg={selectedChat.mentorImage} />
      </div>
    </div>
  );
}

export default MentorsChat;
