import { Redirect } from "react-router-dom";
// import { Container, Row, Col, Form, Spinner} from 'react-bootstrap';

import ROUTES from "../../utils/routes";

function Dashboard({
  currentUserState: { currentUser, isAuthenticated } = {},
}) {

  // Redirect if not logged
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <h1>Welcome, {currentUser.name}!</h1>
  );
}

export default Dashboard;