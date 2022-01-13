import React from "react";
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
    height="100vh"
    projectID="d0a67ee9-6f44-4369-87b5-280c7e8e39a1"
    userName="User1"
    userSecret="123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    
     />
  )
}

/*
renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
*/

export default App;
