import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Redirect, useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Messages from '../components/Messages/Messages';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';

import {apiDomain} from '../../config/config';
import ROUTES from "../../utils/routes";

import './ChatRoom.scss';

const ENDPOINT = apiDomain;

let socket;


function ChatRoom({
  currentUserState: { isAuthenticated, currentUser } = {},
}) {
  const {roomId} = useParams();

  const [user, setUser] = useState(currentUser);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {

    socket = isAuthenticated ? io(ENDPOINT, {withCredentials: true}) : null;
    console.log("connecting to room: " + roomId);
    setRoom(roomId);

    socket.emit('join', { user, roomId }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('leaveChat', {user, roomId});
      socket.off();
    }
  }, [user, isAuthenticated, roomId]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', { user, roomId, message } , () => setMessage(''));
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
          <InfoBar room={roomId} />
          <Messages messages={messages} name={user.name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
    </>
  );
}


export default ChatRoom;