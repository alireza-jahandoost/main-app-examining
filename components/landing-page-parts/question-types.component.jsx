import { Container, Row, Col } from "react-bootstrap";
import margin from "../../styles/margin.module.css";
import Swiper from "./swiper.component";

const QuestionTypes = () => {
  const items = [
    {
      title: "Fill The Blank Question",
      options: [
        "participant must fill the blank input in the question",
        "this type of question will be corrected by system",
        "owner of exam can change the grade if necessary",
        "participant will get the score if his/her answer was part of the acceptable answer by author",
      ],
    },
    {
      title: "Select The Answer Question",
      options: [
        "participant must choose 'one of the options' of question",
        "this type of question will be corrected by system",
        "owner of exam can change the grade if necessary",
        "participant will get the score if his/her answer was true",
      ],
    },
    {
      title: "Multiple Answer Question",
      options: [
        "participant must choose 'some of the options' of question, it means some of the options can be answer together",
        "this type of question will be corrected by system",
        "owner of exam can change the grade if necessary",
        "participant will get the score if he/she checked all of the answers and did not check other options",
      ],
    },
    {
      title: "Descriptive Question",
      options: [
        "participant must answer to that exam completely",
        "this type of question can not be corrected by system and owner of exam must correct that",
      ],
    },
    {
      title: "True/False Question",
      options: [
        "participant must specify that question's phrase is true or false",
        "this type of question will be corrected by system",
        "owner of exam can change the grade if necessary",
        "participant will get the score if he/she specifies the correctness of the question correctly",
      ],
    },
    {
      title: "Ordering Question",
      options: [
        "participant must reorder the options correctly",
        "this type of question will be corrected by system",
        "owner of exam can change the grade if necessary",
        "participant will get the score if he/she reorders the options correctly",
      ],
    },
  ];

  return (
    <div>
      <Container className={`${margin.my8}`}>
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
        <Container className={`${margin.my7} text-center`}>
          <h2 className="display-5 my-4">Supported Question Types</h2>
          <Swiper items={items} />
        </Container>
      </Container>
    </div>
  );
};

export default QuestionTypes;
