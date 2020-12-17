import { Redirect, Link } from "react-router-dom";
import { useEffect } from "react";
import useUpdateLocation from "../../hooks/useUpdateLocation"

import { ChatLeftDotsFill} from "react-bootstrap-icons"
import { Container, Row, Col } from 'react-bootstrap';

import Header from "../components/Header/Header";

import "./Chats.scss"
import ROUTES from "../../utils/routes";

function ChatsView({
  currentUserState: { currentUser, isAuthenticated } = {},
  getChats, updateUserLocation
}) {

  useUpdateLocation(updateUserLocation);

  useEffect(() => {
    getChats();
  }, [getChats]);

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }


  return (
    <>
    <Header title="Join Chat" back={ROUTES.DASHBOARD} />  
    <Container fluid className="chat py-3">
        <Row className="header">          
          <Col xs={12} className="text-center">
            <span className="username">Select Chat Room</span>
          </Col>
        </Row>
        <Row className="menu">
          <Col xs={12} className="mt-4">
            <Link to="/chat/1">
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/2">
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/3">
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to="/chat/4">
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
        </Row>
    </Container>
    </>
  );
}

export default ChatsView;