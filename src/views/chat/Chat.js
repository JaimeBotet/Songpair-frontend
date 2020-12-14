import { Redirect, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useUpdateLocation from "../../hooks/useUpdateLocation"

import { ChatLeftDotsFill} from "react-bootstrap-icons"
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../components/Header/Header";

import "./Chat.scss"
import ROUTES from "../../utils/routes";

function ChatView({
  currentUserState: { currentUser, isAuthenticated } = {},
  getChats, updateUserLocation
}) {

  useUpdateLocation(updateUserLocation);

  useEffect(() => {
    getChats();
}, []);

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }


  return (
    <>
    <Header title="Chat Room" back={ROUTES.DASHBOARD} />  
    <Container fluid className="chat py-3">
        <Row className="header">
          <Col>
            <div className="logo">Songpair</div>
          </Col>
          
          <Col xs={12} className="text-center">
            <span className="username">{currentUser.name}</span>
          </Col>
        </Row>
        <Row className="menu">
          <Col xs={12} className="mt-4">
            <Link to="/chat/room/1">
              <ChatLeftDotsFill color="white" size={100}/>
              <span className="username">Room 1</span>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/room/2">
              <ChatLeftDotsFill color="white" size={100}/>
              <span className="username">Room 2</span>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/room/3">
              <ChatLeftDotsFill color="white" size={100}/>
              <span className="username">Room 3</span>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/room/4">
              <ChatLeftDotsFill color="white" size={100}/>
              <span className="username">Room 4</span>
            </Link>
          </Col>
        </Row>
    </Container>
    </>
  );
}

export default ChatView;