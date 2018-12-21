import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="indigo darken-1" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
              <h5 className="title">YouthChina</h5>
              <p>
               快速一站式服务
              </p>
            </Col>
            <Col md="6">
              <h5 className="title">More</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Privacy</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Terms</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Q&A</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">ContactUs</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href=""> YouthChina.com </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export {FooterPage};
