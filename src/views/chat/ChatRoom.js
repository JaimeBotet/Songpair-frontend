import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { Redirect } from "react-router-dom";

import Header from "../components/Header/Header";
import TextContainer from '../components/TextContainer/TextContainer';
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
  
  const [user, setUser] = useState(currentUser);
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {

    socket = io(ENDPOINT);
    const room = window.location.pathname.substring(6);
    // const name = "test";

    setRoom(room);

    socket.emit('join', { user, room }, (error) => {
      if(error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect', {user, room});

      socket.off();
    }
  }, [ENDPOINT, window.location]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', { user, room, message } , () => setMessage(''));
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
          <InfoBar room={room} />
          <Messages messages={messages} name={user.name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
    </>
  );
}


export default ChatRoom;