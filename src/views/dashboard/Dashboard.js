import { Redirect, Link } from "react-router-dom";
import useUpdateLocation from "../../hooks/useUpdateLocation"

import { ChatLeftDotsFill, GeoFill, Power } from "react-bootstrap-icons"
import { Container, Row, Col } from 'react-bootstrap';

import "./Dashboard.scss"
import ROUTES from "../../utils/routes";

function Dashboard({
  currentUserState: { currentUser, isAuthenticated } = {},
  logout, updateUserLocation
}) {

  useUpdateLocation(updateUserLocation);

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

   // Logout handler
   const logoutHandler = () => {
    logout();
  }

  return (
    <Container fluid className="dashboard py-3">
        <Row className="header">
          <Col>
            <div className="logo">Songpair</div>
          </Col>
          <Col className="text-right">
            <Power role="button" size={25} onClick={logoutHandler}/>
          </Col>
          <Col xs={12} className="text-center">
            <img className="avatar" src={currentUser.avatar} alt="user avatar"></img>
            <span className="username">{currentUser.name}</span>
          </Col>
        </Row>
        <Row className="menu">
          <Col xs={12}>
            <Link to={ROUTES.MAP}>
              <GeoFill color="white" size={100}/>
            </Link>
          </Col>
          <Col xs={12} className="mt-4">
            <Link to={ROUTES.ROOMS}>
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
        </Row>
    </Container>
  );
}

export default Dashboard;