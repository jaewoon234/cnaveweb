import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/cnave (1).svg";
import logo2 from "../Assets/카카오톡.png";
import naver from "../Assets/btnG_아이콘사각.png";
import blog from "../Assets/네이버블로그.png";
import insta from "../Assets/인스타그램1.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center", fontSize: "0.8em" }}>
          <h3>(주)씨네이브 / CNAVE  이승하 | 사업자등록번호 : 245-86-02871 </h3>
          <h3>전화번호 : 010-6686-8156 | 이메일 : seungha.lee@c-nave.com</h3>
          
        </Col>
        <Col md="4" className="footer-copywright">
          <img src={logo} className="img-fluid logo" alt="brand" style={{width: '100px'}}/>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="http://pf.kakao.com/_uJRxin"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={logo2} className="logo-fixed" alt="brand"  />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://naver.band.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={blog} className="logo-fixed" alt="brand"  />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%94%A8%EB%84%A4%EC%9D%B4%EB%B8%8C&oquery=CNAVE%40&tqi=jaV9Gsqo15VsskKJ0bRssssssmN-001655&ackey=mxdlo0ch"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={naver} className="logo-fixed" alt="brand"  />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={insta} className="logo-fixed" alt="brand"  />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
