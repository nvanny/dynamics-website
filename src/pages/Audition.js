import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../components/Toolbar.js";

import AuditionImages from "../components/AuditionImages.js";
import AuditionInfo from "../components/AuditionInfo.js";
import AuditionEligibility from "../components/AuditionEligibility.js";
import Footer from "../components/Footer";
import NoRightClickImg from "../components/NoRightClickImg";

import "../css/Audition.css";
import "../css/Global.css";

import firstImg from "../images/audition/first.jpg";
import secondImg from "../images/audition/second.jpg";

class Audition extends Component {

  render() {
    return (
      <div>
      <div className="hideHorizontalScroll">
        <div className="web">
          <Toolbar bool={false} />
          <Row className="row">
            <Col>
              <AuditionImages />
            </Col>

            <Col className="audition-text font">
              <Container>
                <h1 className="title Pink">Audition</h1>
              </Container>


              <Container>
                <AuditionInfo />
                <AuditionEligibility />
              </Container>
            </Col>
          </Row>
          <Footer />
        </div>

        <div className="mobile">
          <Toolbar bool={false} />
          <h1 className="audition-info Teal">Audition</h1>
          <Row className="row">
            <NoRightClickImg
              src={firstImg}
              alt=""
              imgClassName="auditionIMG image1"
            />
          </Row>
          <Row>
            <Col>
              <AuditionInfo />
            </Col>
          </Row>
          <Row>
            <Col>
              <AuditionEligibility />
            </Col>
          </Row>
          <Row>
            <NoRightClickImg
              src={secondImg}
              alt=""
              imgClassName="auditionIMG image2"
            />
          </Row>
          <Footer />
        </div>
      </div>
      </div>
    );
  }
}

export default Audition;
