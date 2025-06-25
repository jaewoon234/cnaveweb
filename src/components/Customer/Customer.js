import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import samsung from "../../Assets/samsung.jpeg";
import idl from "../../Assets/idle&c.png";
import kar from "../../Assets/kaf.png";

import Header from "./Header";


function Business() {
  return (
    <Container fluid className="about-section" display="flex" justifyContent="center">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Header/>
          <hr>
          </hr>
          <Col>
            <Row>
              <img src={samsung} alt="Samsung" className="business-logo" />
            </Row>

          </Col>
          <Col>
          <Row>
            <img src={idl} alt="Idle&C" className="business-logo" />
          
            </Row>
          </Col>
          <Col>
          <Row>
            <img src={kar} alt="KAR" className="business-logo" />
            </Row>
          </Col>
        </Row>

        

        
      </Container>
    </Container>
  );
}

export default Business;
