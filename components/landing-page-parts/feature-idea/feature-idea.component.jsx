import IdeaPic from "../../../public/idea.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Gap from "../partials/gap.component";
import margin from "../../../styles/margin.module.css";
import { Fade } from "react-awesome-reveal";

const FeatureIdea = () => {
  return (
    <Container className={margin.my8}>
      <Gap />
      <Fade direction="right" triggerOnce>
        <Container className={`${margin.my8} shadow border rounded p-5`}>
          <Row>
            <Col xs={12} md={6}>
              <div className="text-center text-md-start">
                <h3 className="display-6">Missing a feature?</h3>
                <Button className="my-5" variant="success">
                  Tell us about
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image
                src={IdeaPic}
                alt={`Picture About Feature Idea`}
                placeholder="blur"
              />
            </Col>
          </Row>
        </Container>
      </Fade>
    </Container>
  );
};

export default FeatureIdea;
