import { Container, Row, Col } from "react-bootstrap";
import margin from "../../../styles/margin.module.css";
import Swiper from "./swiper.component";
import Gap from "../partials/gap.component";
import { Fade } from "react-awesome-reveal";

const QuestionTypes = () => {
  const items = [
    {
      title: "Fill The Blank Question",
      options: [
        "participant must fill the blank input in the question",
        "this type of question will be checked by system",
        "owner of the exam can change the grade if necessary",
        "participant will get the score if his/her answer compatible with authors's answer",
      ],
    },
    {
      title: "Select The Answer Question",
      options: [
        'participant must choose "one of the statements" of the question',
        "this type of question will be checked by system",
        "owner of the exam can change the grade if necessary",
        "participant will get the score if his/her answer was right",
      ],
    },
    {
      title: "Multiple Answer Question",
      options: [
        "this kind of questions requires several right answers",
        "this type of question will be corrected by system",
        "owner of the exam can change the grade if necessary",
        "participant will get the score if he/she checked only the right statements",
      ],
    },
    {
      title: "Descriptive Question",
      options: [
        "participant must answer to this question completely",
        "this type of question won't use auto check and correction will be done by the owner",
      ],
    },
    {
      title: "True/False Question",
      options: [
        "participant must specify whether the statement is true or false",
        "this type of question will be corrected by system",
        "owner of the exam can change the grade if necessary",
        "participant will get the score if he/she responds correctly",
      ],
    },
    {
      title: "Ordering Question",
      options: [
        "participant must reorder the statements correctly",
        "this type of question will be corrected by system",
        "owner of the exam can change the grade if necessary",
        "participant will get the score if he/she reorders the statements correctly",
      ],
    },
  ];

  return (
    <div>
      <Container className={`${margin.my8}`}>
        <Gap />
        <Container className={`${margin.my7} text-center`}>
          <Fade triggerOnce direction="up">
            <h2 className="display-5 my-4">Supported Question Types</h2>
          </Fade>
          <Fade direction="up" triggerOnce>
            <Swiper items={items} />
          </Fade>
        </Container>
      </Container>
    </div>
  );
};

export default QuestionTypes;
