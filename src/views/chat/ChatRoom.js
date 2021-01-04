import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Messages from '../components/Messages/Messages';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';

import ROUTES from "../../utils/routes";

import './ChatRoom.scss';

function ChatRoom({
  currentUserState: { isAuthenticated, currentUser } = {},
  appSocket
}) {
  const {room} = useParams();
  const user = currentUser;

  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    appSocket.on('message', message => {
      console.log(message);
      setMessages(messages => [ ...messages, message ]);
    });

    return () => {
      appSocket.emit('leaveChat', { user, room });
      appSocket.off();
    }
  },[]);

  const connect = () => {
    appSocket.emit('join', { user, room }, (error) => {
      if(error) alert(error);
      setConnected(true);
    });
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      setMessages(messages => [ ...messages, {user: "You", text: message} ]);
      appSocket.emit('sendMessage', { user, room, message } , () => setMessage(''));
    }
  }

	// Redirect if not logged
	if (!isAuthenticated) {
		return <Redirect to={ROUTES.LOGIN} />;
	}

  return (
    <>
    <Header title="Chat Room" back={ROUTES.ROOMS} />
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={""} />
          { !connected ? (
              <div className="btn btn-primary mb-4" onClick={connect}>Join chat</div>
            ) : (
              <>
                <Messages messages={messages} name={user.name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
              </>
            )
          }
      </div>
    </div>
    </>
  );
}

export default ChatRoom;