import { Link } from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';
import { ChevronLeft } from 'react-bootstrap-icons';

import ROUTES from "../../../utils/routes"
import './Header.scss';

function Header() {
    return (
      <Container fluid>
        <Row>
          <Col
            xs={12}
            xl={{span:4, offset:4}}
            className="header bg-primary"
          >
            <Row>
              <Col xs={1}>
                <Link to={ROUTES.DASHBOARD}>
                  <ChevronLeft size={26} color="white" role="button" />
                </Link>
              </Col>
              <Col xs={10}>
                <h2 className="text-white">Near people</h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

export default Header;