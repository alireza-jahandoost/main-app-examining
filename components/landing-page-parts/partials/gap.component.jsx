import { Container, Row, Col } from "react-bootstrap";

const Gap = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="border-bottom border-3" />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={2} />
        <Col xs={8}>
          <div className="border-bottom border-3" />
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
};

export default Gap;
