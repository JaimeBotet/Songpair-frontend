import { Redirect } from "react-router-dom";
import useUpdateLocation from "../../hooks/useUpdateLocation"

import { Container, Row, Col } from 'react-bootstrap';
import Header from "../components/Header/Header";

import ROUTES from "../../utils/routes";
import "./Profile.scss";

function Profile({
  currentUserState: { currentUser, isAuthenticated } = {},
  updateUserLocation
}) {
  useUpdateLocation(updateUserLocation);

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <>
      <Header title="Profile" back={ROUTES.MAP} />
      <Container fluid className="profile">
          <Row>
            <Col>
            </Col>
          </Row>
      </Container>
    </>
  );
}

export default Profile;