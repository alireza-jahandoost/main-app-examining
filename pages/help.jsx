import Head from "next/head";
import { Container } from "react-bootstrap";
import Image from "next/image";
import WorkingPic from "../public/help/working.png";
import margin from "../styles/margin.module.css";

const Help = () => {
  return (
    <Container className={`${margin.my8}`}>
      <Head>
        <title>Help - Exams Galaxy</title>
        <meta
          name="description"
          content="Variety in question design, A safe environment to test and to be tested, ExamsGalaxy changes your view of the examination"
          key="desc"
        />
        <meta
          property="og:title"
          content="Design & Take the exam in the best way possible - Exams Galaxy"
        />
        <meta
          property="og:description"
          content="Variety in question design, A safe environment to test and to be tested, ExamsGalaxy changes your view of the examination"
        />
        <meta
          property="og:image"
          content="https://examsgalaxy.com/og-image.png"
        />
      </Head>
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
