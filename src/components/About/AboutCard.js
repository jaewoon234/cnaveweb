import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-cnave" style={{ textAlign: "justify" }}>
            안녕하십니까.  <span className="purple">(주)씨네이브 </span> 소음진동기술사 사무소 홈페이지 방문을 감사드립니다.
            <br />
            (주)씨네이브는 소음진동 엔지니어링 및 연구개발을 수행하는 업체로서
            <br />
            다양한 분야의 고객사로부터 다수의 소음진동 관련 프로젝트를 수행하고 있습니다.
            <br />
            <br />
            홈페이지는 지속적으로 업데이트할 예정이므로
            <br/>
            문의사항이 있으면 언제든 연락 주세요.
            <br />
            감사합니다.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "always try your hardest"{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
