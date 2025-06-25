import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

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
              <h1 className="business-description-name">
                엔지니어링
                </h1>
              <p1 className="business-description" >
                - 조선/해양 프로젝트 소음진동 엔지니어링
              </p1>
              <p1 className="business-description">
                - 소음진동 해석
              </p1>
              <p1 className="business-description">
                - 소음진동 계측 및 분석
              </p1>
              <p1 className="business-description">
                - 방음방진 설계 및 제작
              </p1>
              <p1 className="business-description">
                - 기술 대응
              </p1>
              <p1 className="business-description">
                - 환경소음진동
              </p1>
            </Row>

          </Col>
          <Col>
          <Row>
              <h1 className="business-description-name">
                연구개발
              </h1>
              <p1 className="business-description" >
                - 조선/해양/환경 소음진동 분야
              </p1>
              <p1 className="business-description">
                - 소음진동 측정 시스템 및 분석 소프트웨어
              </p1>
            </Row>
          </Col>
          <Col>
          <Row>
              <h1 className="business-description-name">
                교육(개인 및 기업)
              </h1>
              <p1 className="business-description" >
                - 소음진동 이론 및 응용 분야
              </p1>
            </Row>
          </Col>
        </Row>

        

        
      </Container>
    </Container>
  );
}

export default Business;
