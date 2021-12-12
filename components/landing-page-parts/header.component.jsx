import Image from "next/image";
import { Container, Button, Row, Col } from "react-bootstrap";

import styles from "../../styles/header.module.css";
import HeaderPic from "../../public/header.png";

const Header = () => {
  return (
    <div>
      <Container
        className={`${styles.container} mt-lg-0 text-center text-lg-start`}
      >
        <Row className="flex-grow-1">
          <Col
            className="d-flex flex-column justify-content-center"
            xs={12}
            lg={6}
          >
            <h1 className="display-3">
              Create Exams Easily, Free For Everyone
            </h1>
            <Row>
              <Col className="lead my-4">
                <Button>Create your first exam</Button>
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex flex-column justify-content-end"
            xs={12}
            lg={6}
          >
            <Image
              src={HeaderPic}
              alt="Picture of the header"
              placeholder="blur" // Optional blur-up while loading
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
