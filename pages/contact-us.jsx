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
      <Container className={`${margin.my8}`}>
        <h1 className="display-2 text-center">Contact Us</h1>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Get In Touch</h2>
            <div className="mt-4">
              <a href={externalRoutes.contactInfo.email}>
                <p className="lead">
                  <span>
                    <BsEnvelope />
                  </span>
                  <span> {externalRoutes.contactInfo.email} </span>
                </p>
              </a>
              <a href={externalRoutes.contactInfo.telegram}>
                <p className="lead">
                  <span>
                    <BsTelegram />
                  </span>
                  <span> {externalRoutes.contactInfo.telegram} </span>
                </p>
              </a>
              <a href={externalRoutes.contactInfo.instagram}>
                <p className="lead">
                  <span>
                    <BsInstagram />
                  </span>
                  <span> {externalRoutes.contactInfo.instagram} </span>
                </p>
              </a>
            </div>
          </Col>
          <Col xs={12} xl={5}>
            <Image
              src={ContactPic}
              alt="Picture about our ways of communication"
              placeholder="blur"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
