import { Container, Row, Col } from "react-bootstrap";
import Feature from "./feature.component";
import styles from "../../styles/features.module.css";

import PrivacyPic from "../../public/features/privacy.png";
import TypesOfQuestionsPic from "../../public/features/types-of-questions.png";
import AutoCorrectingPic from "../../public/features/auto-correcting.png";
import UnlimitedQuestionsPic from "../../public/features/unlimited-questions.png";
import UnlimitedParticipantsPic from "../../public/features/unlimited-participants.png";
import FreePic from "../../public/features/free.png";

const Features = () => {
  return (
    <div>
      <Container className={styles.my6}>
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
        <Container>
          <Row className="my-5">
            <Col xs={12} className="my-3">
              <h2 className="display-5 text-center">Some of our features</h2>
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
