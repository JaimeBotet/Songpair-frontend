import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';
import { Container, Row, Col, Form, Spinner} from 'react-bootstrap';
import './Register.scss';
import dummyAvatar from '../../assets/accounts/dummy_avatar.png'

function Register({
  currentUserState: { signInForm, signInFormLoad, signInFormError } = {},
  fetchFormData
}) {

  const location = useLocation();

  useEffect(() => {
    let code = parse(location.search, { ignoreQueryPrefix: true }).code
    fetchFormData(code)
  }, []);

  return (
    <Container fluid className="fade-in register-page">
      <Row>
        <Col xs={12}>
          <h1 className="text-white">Sign up</h1>
        </Col>
        {signInFormLoad && !signInForm &&
          <Spinner animation="border" variant="primary" />
        }
        {signInForm &&
          <Col xs={8} md={5} lg={3} className="text-center">
            <Form.Control type="file" id="avatar" className="d-none"></Form.Control>
              <label for="avatar">
                <img 
                src={signInForm.images[0] ? signInForm.images[0].url : dummyAvatar}
                alt="user avatar" 
                className="avatar" />
              </label>
            <Form.Control type="name" placeholder="Your name" className="mb-1" value={signInForm.display_name}></Form.Control>
            <Form.Control type="email" placeholder="Email" className="mb-1" value={signInForm.email}></Form.Control>
            <Form.Control type="password" placeholder="Password"></Form.Control>
            <div className="text-white btn btn-primary w-100">Register</div>
          </Col>
        }
        {signInFormError &&
        <>
          <Col xs={12} className="badge badge-danger">{signInFormError}</Col>
          <Col xs={12} className="text-white text-center">Please try again</Col>
        </>
        }
      </Row>
    </Container>
  );
}

export default Register;