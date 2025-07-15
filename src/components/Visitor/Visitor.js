import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import "./Visitor.css"; // ✅ 다크 테마 스타일을 여기에 작성

function Visitor() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          alert("메일이 성공적으로 전송되었습니다!");
        },
        (error) => {
          alert("메일 전송에 실패했습니다.");
        }
      );
  };

  return (
    <Container fluid className="about-section dark-background">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <h1 className="dark-heading">
              Contact <strong className="purple">Me</strong>
            </h1>
            <form ref={form} onSubmit={sendEmail} className="dark-form">
              <label>이름</label>
              <input type="text" name="user_name" required />

              <label>연락처</label>
              <input type="email" name="user_email" required />

              <label>내용</label>
              <textarea name="message" rows="5" required />

              <input type="submit" value="Send" />
            </form>
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="contact" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Visitor;
