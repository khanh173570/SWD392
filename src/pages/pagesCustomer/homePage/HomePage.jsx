import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    console.log("HomePage component mounted!");
  }, []);

  const handleClick = () => {
    console.log("Ô 1 clicked!");
  };

  return (
    <Container className="home">
      <Row>
        <Col
          md={6}
          style={{ height: "200px", cursor: "pointer" }}
          className="text-black p-3 text-center"
          onClick={handleClick}
        >
          Ô 1
        </Col>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 2
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 3
        </Col>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 4
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 5
        </Col>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 6
        </Col>
      </Row>
      <Row>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 7
        </Col>
        <Col
          md={6}
          style={{ height: "200px" }}
          className="text-black p-3 text-center"
        >
          Ô 8.
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
