import Image from "next/image";
import { Container, Button, Row, Col } from "react-bootstrap";

import styles from "../../../styles/header.module.css";
import HeaderPic from "../../../public/header.png";
import { Fade } from "react-awesome-reveal";
import externalRoutes from "../../../constants/external-routes.constant";

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
                Design & Take the exam in the best way possible
              </h1>
            </Fade>
            <Row>
              <Col className="lead my-4">
                <Fade triggerOnce>
                  <a href={externalRoutes.createExam}>
                    <Button>Create your first exam</Button>
                  </a>
                </Fade>
                <Fade triggerOnce>
                  <a href={externalRoutes.login}>
                    <Button className="mt-2" variant="outline-primary">
                      Login / Register
                    </Button>
                  </a>
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
              <div>
                <Image
                  src={HeaderPic}
                  alt="Picture of the header"
                  placeholder="blur"
                />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
