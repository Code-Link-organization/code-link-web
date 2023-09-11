import TeamChatHeader from './TeamChatHeader';
import SendMessage from '../../Chat/ChatBox/SendMessage';
import teamIcon from '../../../assets/images/teams/Rectangle 195.svg';

function TeamChat({ isFixed, scroll }) {
  const dynamicHeight = `calc(100vh - 99px + ${scroll}px)`;
  const inlineStyle = {
    height: dynamicHeight,
  };

  return (
    <div className="w-1/2">
      <div
        className={`bg-white ${isFixed ? 'fixed top-0 w-1/2 !h-screen' : 'w-full'} flex flex-col z-2`}
        style={inlineStyle}
      >
        <TeamChatHeader />
        <div className="b-t-primary border-t-[1px] mt-auto relative z-0">
          <SendMessage />
        </div>
      </div>
    </div>
  );
}

export default TeamChat;