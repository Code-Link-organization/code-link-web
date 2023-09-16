import Requests from './Requests/Requests';

function FriendsList({ isFixed }) {
  return (
    <div className={`w-1/4 ${isFixed ? 'fixed !w-1/4 top-0 transform' : ''}`}>
      <Requests />
    </div>
  );
}

export default FriendsList;