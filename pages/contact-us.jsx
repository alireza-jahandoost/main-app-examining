import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import sizes from "../styles/sizes.module.css";
import ContactPic from "../public/contact-us/contact.png";
import margin from "../styles/margin.module.css";

const ContactUs = () => {
  return (
    <div className={`${sizes[`min-height-100`]}`}>
      <Container className={`${margin.my8}`}>
        <h1 className="display-2 text-center">Contact Us</h1>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Get In Touch</h2>
            <p className="lead">
              elit at imperdiet dui accumsan sit amet nulla facilisi morbi
              tempus iaculis urna id volutpat lacus laoreet non curabitur
              gravida arcu ac tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing at in tellus integer feugiat scelerisque
              varius morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget dolor morbi non arcu risus quis varius quam quisque id diam
              vel quam elementum pulvinar etiam non quam lacus suspendisse
              faucibus interdum posuere lorem ipsum dolor sit amet consectetur
              adipiscing elit
            </p>
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
