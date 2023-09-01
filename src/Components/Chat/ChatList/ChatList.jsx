import ChatListItem from "./ChatListItem";

import SearchField from "./SearchField";
function ChatList() {
    // const [searchValue,setSearch]=useState({search:''})


    return (
        <div className="w-1/4 py-6 px-2 bg-custombg shadow-[box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)] shadow">
            <SearchField/>
            <div className="flex items-center justify-evenly">
                <button className="chatlist-btn">Inbox</button>
                <button className="chatlist-btn">Friends</button>
            </div>
            <div className="flex flex-col gap-7 py-8">
                <ChatListItem chatinfo={{lastMsg:{content:'Hi Emilia',date:'12:05Am'},name:'Mateo Lincoln',notSeen:1}}/>
                <ChatListItem chatinfo={{lastMsg:{content:'Hi Emilia',date:'12:05Am'},name:'Mateo Lincoln',notSeen:1}}/>
                <ChatListItem chatinfo={{lastMsg:{content:'Hi Emilia',date:'12:05Am'},name:'Mateo Lincoln',notSeen:1}}/>
                <ChatListItem chatinfo={{lastMsg:{content:'Hi Emilia',date:'12:05Am'},name:'Mateo Lincoln',notSeen:1}}/>
                <ChatListItem chatinfo={{lastMsg:{content:'Hi Emilia',date:'12:05Am'},name:'Mateo Lincoln',notSeen:1}}/>


            </div>
        </div>
    );
}

export default ChatList;
