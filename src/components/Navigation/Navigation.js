import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Navigation() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=8ad2ae7b9c8afdc5f54570301b4a25f9&autoload=false";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakao-map");

        const latitude = 35.0783228;
        const longitude = 128.9524488;
        const position = new window.kakao.maps.LatLng(latitude, longitude);

        const map = new window.kakao.maps.Map(container, {
          center: position,
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({
          position: position,
        });

        marker.setMap(map);

        // ✅ 인포윈도우(말풍선) 추가
        const iwContent = `<div style="padding:5px; font-size:14px;">
            
            <a href="https://map.kakao.com/link/map/(주)씨네이브,${latitude},${longitude}" target="_blank" style="color:blue;">
              부산 사하구 다대로1066번길 9 5층 502호
            </a>
          </div>`;

        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          position: position,
        });

        // 마커 위에 인포윈도우 항상 표시
        infowindow.open(map, marker);

        // 마커 클릭 시 새창 열기
        window.kakao.maps.event.addListener(marker, "click", function () {
          const url = `https://map.kakao.com/link/map/(주)씨네이브\n부산사하구다대로1066번길9_502호,${latitude},${longitude}`;
          window.open(url, "_blank");
        });
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <Container fluid className="resume-section" style={{ backgroundColor: "#121212", color: "white", minHeight: "100vh" }}>
      <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "20px" }}>
        <h1 className="purple">찾아오시는 길</h1>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <Col md={10}>
          <div
            id="kakao-map"
            style={{ width: "100%", height: "500px", borderRadius: "12px", overflow: "hidden" }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Navigation;
