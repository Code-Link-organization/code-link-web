import TeamChatHeader from './TeamChatHeader';
import SendMessage from '../../Chat/ChatBox/SendMessage';
import teamIcon from '../../../assets/images/teams/Rectangle 195.svg';
import TeamMessagesContainer from './TeamMessagesContainer';

function TeamChat({ isFixed, scroll }) {
  const dynamicHeight = `calc(100vh - 99px + ${scroll}px)`;
  const inlineStyle = {
    height: dynamicHeight,
  };

  return (
    <div className="w-1/2">
      <div
        className={`!bg-[rgba(252,250,248,1)] ${isFixed ? 'fixed top-0 w-1/2 !h-screen' : 'w-full'} 
        flex flex-col z-2  border-[rgba(209,208,208,1)] border-[1px]`}
        style={inlineStyle}
      >
        <TeamChatHeader />
        <TeamMessagesContainer/>
        <div className="b-t-primary border-t-[1px] mt-auto relative z-0">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default TeamChat;