import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        소음
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        진동
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        개발
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        유지보수
      </Col>
      
    </Row>
  );
}

export default Techstack;
