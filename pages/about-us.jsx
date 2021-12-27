import { Container, Row, Col } from "react-bootstrap";
import sizes from "../styles/sizes.module.css";
import Image from "next/image";
import OurStoryPic from "../public/about-us/our-story.png";
import SocialMediaPic from "../public/about-us/social-media.png";
import SelfImage from "../public/about-us/self-image.png";
import SolvePic from "../public/about-us/solve.png";
import margin from "../styles/margin.module.css";

const AboutUs = () => {
  return (
    <div className={`${sizes[`min-height-100`]}`}>
      <Container className={`${margin.my8}`}>
        <h1 className="display-2 text-center">About Us</h1>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Our Story</h2>
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
              src={OurStoryPic}
              alt="Picture about our story"
              placeholder="blur"
            />
          </Col>
        </Row>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={5}>
            <Image
              src={SolvePic}
              alt="Picture about how this site can help you"
              placeholder="blur"
            />
          </Col>
          <Col xs={12} xl={7}>
            <h2 className="display-4">How this site can help you?</h2>
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
        </Row>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Who am I?</h2>
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
            <div className="p-5">
              <Image src={SelfImage} alt="A picture of me" placeholder="blur" />
            </div>
          </Col>
        </Row>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={5}>
            <Image
              src={SocialMediaPic}
              alt="Picture about social media"
              placeholder="blur"
            />
          </Col>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Follow us on social media</h2>
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
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
