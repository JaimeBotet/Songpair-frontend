import { Redirect, Link } from "react-router-dom";
import { ChatLeftDotsFill, GeoFill, Power } from "react-bootstrap-icons"
import { Container, Row, Col } from 'react-bootstrap';

import "./Dashboard.scss"
import ROUTES from "../../utils/routes";

function Dashboard({
  currentUserState: { currentUser, isAuthenticated } = {},
}) {

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <Container fluid className="dashboard py-3">
        <Row className="header">
          <Col>
            <div className="logo">Songpair</div>
          </Col>
          <Col className="text-right">
            <Power size={25} />
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
            <Link to={ROUTES.CHAT}>
              <ChatLeftDotsFill color="white" size={100}/>
            </Link>
          </Col>
        </Row>
    </Container>
  );
}

export default Dashboard;