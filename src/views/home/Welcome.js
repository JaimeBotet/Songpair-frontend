import { Container, Row, Col} from 'react-bootstrap';
import './Welcome.scss';

function Welcome() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h1 className="text-white">Soundpair</h1>
          </Col>
					<Col xs={8} md={4} lg={2} className="text-white btn btn-primary">Start</Col>
					<Col xs={12} className="text-center text-secondary">find others favorite songs</Col>
					<Col xs={12} className="text-center text-secondary">share yours</Col>
        </Row>
      </Container>
    );
  }

export default Welcome;