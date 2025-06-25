import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/cnave (1).svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../../components/About/About";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                (주)씨네이브 소음진동기술사무소
              </h1>

              <h1 className="heading-name">
                안녕하십니까?
                <strong className="main-name"> (주)씨네이브</strong>입니다
              </h1>
              <h1 className="heading-name">
                찾아주셔서 감사합니다
              </h1>

              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About/>
      <Home2 />
    </section>
  );
}

export default Home;
