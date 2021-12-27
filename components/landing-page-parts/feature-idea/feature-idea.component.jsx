import IdeaPic from "../../../public/idea.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Gap from "../partials/gap.component";
import margin from "../../../styles/margin.module.css";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import programRoutes from "../../../constants/program-routes.constant";

const FeatureIdea = () => {
  return (
    <Container className={margin.my8}>
      <Gap />
      <Fade triggerOnce>
        <Container className={`${margin.my8} shadow border rounded p-5`}>
          <Row>
            <Col xs={12} md={6}>
              <div className="text-center text-md-start">
                <h3 className="display-6">Missing a feature?</h3>
                <Link href={programRoutes.contactUs}>
                  <Button className="mt-2 mb-5 my-md-5" variant="primary">
                    Tell us about
                  </Button>
                </Link>
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
