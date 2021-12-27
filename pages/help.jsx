import { Container } from "react-bootstrap";
import Image from "next/image";
import WorkingPic from "../public/help/working.png";
import margin from "../styles/margin.module.css";

const Help = () => {
  return (
    <Container className={`${margin.my8}`}>
      <h1 className="text-center display-2">Help</h1>
      <p className="text-center lead">
        This part of website has not ready yet. We are working on that
      </p>

      <Image
        src={WorkingPic}
        alt="we are working on this part"
        placeholder="blur"
      />
    </Container>
  );
};

export default Help;
