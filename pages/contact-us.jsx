import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import sizes from "../styles/sizes.module.css";
import ContactPic from "../public/contact-us/contact.png";
import margin from "../styles/margin.module.css";
import { BsEnvelope, BsTelegram, BsInstagram } from "react-icons/bs";
import externalRoutes from "../constants/external-routes.constant";

const ContactUs = () => {
  return (
    <div className={`${sizes[`min-height-100`]}`}>
      <Head>
        <title>Contact Us - Exams Galaxy</title>
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
      <Container className={`${margin.my8}`}>
        <h1 className="display-2 text-center">Contact Us</h1>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Get In Touch</h2>
            <div className="mt-4">
              <p className="lead">
                <span>
                  <BsEnvelope />
                </span>
                <span> {externalRoutes.contactInfo.email} </span>
              </p>
              <a
                target="_blank"
                href={externalRoutes.contactInfo.telegram.link}
              >
                <p className="lead">
                  <span>
                    <BsTelegram />
                  </span>
                  <span> {externalRoutes.contactInfo.telegram.label} </span>
                </p>
              </a>
            </div>
          </Col>
          <Col xs={12} xl={5}>
            <Image
              src={ContactPic}
              alt="our ways of communication"
              placeholder="blur"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
