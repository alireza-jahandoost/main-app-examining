import Image from "next/image";
import { Container, Button, Row, Col } from "react-bootstrap";

import styles from "../../../styles/header.module.css";
import HeaderPic from "../../../public/header.png";
import { Fade } from "react-awesome-reveal";

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
            <Fade triggerOnce left cascade>
              <h1 className="display-3">
                Create Exams Easily, Free For Everyone
              </h1>
            </Fade>
            <Row>
              <Col className="lead my-4">
                <Fade triggerOnce>
                  <Button>Create your first exam</Button>
                </Fade>
              </Col>
            </Row>
          </Col>
          <Col
            className="d-flex flex-column justify-content-end"
            xs={12}
            lg={6}
          >
            <Fade triggerOnce>
              <Image
                src={HeaderPic}
                alt="Picture of the header"
                placeholder="blur"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
