import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import DownLayers from '../components/Transition/DownLayers'
import './Login.scss';

function Login() {
  const [transition, setTransition] = useState(false);
  const history = useHistory();

	const handleClick = () => {
		setTransition(true);
		setTimeout(() => history.push("/login/register"), 1500);
  }

  return (
    <Container fluid className="fade-in login-page">
      <DownLayers active={transition} />
      <Row>
        <Col xs={12}>
          <h1 className="text-white">Soundpair</h1>
        </Col>
        <Col xs={9} md={5} lg={3} className="spotify-btn my-4">
          Log in with Spotify
        </Col>
        <Col xs={12}>
          <p className="text-center text-secondary">Or use your account</p>
        </Col>
        <Col xs={8} md={5} lg={3}>
          <Form.Control type="email" placeholder="Email" className="mb-1"></Form.Control>
          <Form.Control type="password" placeholder="Password"></Form.Control>
          <div className="text-white btn btn-primary w-100">Log in</div>
        </Col>
        <Col xs={12}>
          <p className="text-center text-secondary mt-2">
            Don't have one? <span
            className="text-primary"
            role="button"
            onClick={handleClick}
          >
            Sign up
          </span>
          </p>
        </Col>
      </Row>
  </Container>
  );
}

export default Login;