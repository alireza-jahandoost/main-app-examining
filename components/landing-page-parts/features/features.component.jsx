import { Container, Row, Col } from "react-bootstrap";
import Feature from "./feature.component";
import margin from "../../../styles/margin.module.css";
import Gap from "../partials/gap.component";

import PrivacyPic from "../../../public/features/privacy.png";
import TypesOfQuestionsPic from "../../../public/features/types-of-questions.png";
import AutoCorrectingPic from "../../../public/features/auto-correcting.png";
import UnlimitedQuestionsPic from "../../../public/features/unlimited-questions.png";
import UnlimitedParticipantsPic from "../../../public/features/unlimited-participants.png";
import FreePic from "../../../public/features/free.png";

import { Reveal } from "react-awesome-reveal";

const Features = () => {
  return (
    <div>
      <Container className={margin.my8}>
        <Gap />
        <Container className="my-5">
          <Row>
            <Col xs={12} className="my-3">
              <Reveal triggerOnce delay={300}>
                <h2 className="display-5 text-center">Some of our features</h2>
              </Reveal>
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={PrivacyPic}
                title="Privacy"
                text="Create exams with password and/or with confirmation"
              />
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={TypesOfQuestionsPic}
                title="Various types"
                text="Support 6 types of questions"
              />
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={AutoCorrectingPic}
                title="Auto Correcting"
                text="Correcting questions automatically by system"
              />
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={UnlimitedQuestionsPic}
                title="Unlimited Questions"
                text="Unlimited number of questions on each exam"
              />
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={UnlimitedParticipantsPic}
                title="Unlimited participants"
                text="Unlimited number of participants on each exam"
              />
            </Col>
            <Col xs={12} sm={6} lg={4} className="my-2">
              <Feature
                icon={FreePic}
                title="Completely free"
                text="free for everyone :)"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Features;
