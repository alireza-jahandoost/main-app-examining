import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import sizes from "../styles/sizes.module.css";
import Image from "next/image";
import OurStoryPic from "../public/about-us/our-story.png";
import SocialMediaPic from "../public/about-us/social-media.png";
import SelfImage from "../public/about-us/self-image.png";
import SolvePic from "../public/about-us/solve.png";
import margin from "../styles/margin.module.css";
import { BsTwitter, BsTelegram, BsInstagram, BsLinkedin } from "react-icons/bs";
import externalRoutes from "../constants/external-routes.constant";

const AboutUs = () => {
  return (
    <div className={`${sizes[`min-height-100`]}`}>
      <Head>
        <title>About Us - Exams Galaxy</title>
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
        <h1 className="display-2 text-center">About Us</h1>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Our Story</h2>
            <p className="lead">
              I had always heard that the spark of the greatest ideas ignites
              when the limitations surround people, and I read this sentence
              only as a sentence, and I never thought I could feel it myself.
            </p>

            <p className="lead">
              Corona led to the virtualization of the educational space, and at
              first, it seemed that the facilities provided would be enough for
              the time we thought it would be short.
            </p>

            <p className="lead">
              But over time, realizing that Corona will not leave us any time
              soon, We realized that the deficiencies of this implemented
              infrastructure in education and exams are so significant that both
              professors and students can feel them.
            </p>

            <p className="lead">
              So With the limitations that Corona created for an essential part
              of my life, which was learning and education, the idea of
              implementing a platform also formed in my mind, and I decided to
              cover those deficiencies with it And then I constantly expanded
              its capabilities And finally "examsgalaxy" was created.
            </p>

            <p className="lead">
              Of course, It is still new, and we are trying to upgrade this
              platform over time.
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
            <h2 className="display-4">How can this platform help you?</h2>
            <p className="lead">
              We live in an age where discipline and time are paramount to
              advancing our goals. "examsgalaxy" seeks to establish discipline
              in your deeper learning by providing a platform for designers to
              model efficient exams within a timely, stable Along with an
              experimental attitude and in one word, standard to help you avoid
              wasting time searching for different sources to test yourself.
            </p>
          </Col>
        </Row>
        <Row className={`${margin.my6}`}>
          <Col xs={12} xl={7}>
            <h2 className="display-4">Who am I?</h2>
            <p className="lead">
              I am the founder and creator of this platform, Student of software
              engineering Alireza Jahandoost. You can contact me directly via :
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                href="https://www.linkedin.com/in/alireza-jahandoost/"
              >
                LinkedIn
              </a>{" "}
              <br />
              or email(alireza.jahandoost@examsgalaxy.com).
            </p>
          </Col>
          <Col xs={12} xl={5}>
            <div className="p-5">
              <Image src={SelfImage} alt="A picture of me" placeholder="blur" />
            </div>
          </Col>
        </Row>
        <Row className={`${margin.my6}`}>
          {
            // <Col xs={12} xl={5}>
            //   <Image
            //     src={SocialMediaPic}
            //     alt="Picture about social media"
            //     placeholder="blur"
            //   />
            // </Col>
            // <Col xs={12} xl={7}>
            //   <h2 className="display-4">Follow us on social media</h2>
            //   <div className="mt-3">
            //     <a href={externalRoutes.telegram}>
            //       <p className="lead">
            //         <span>
            //           <BsTelegram className="align-middle me-2" />
            //           Our Telegram channel
            //         </span>
            //       </p>
            //     </a>
            //     <a href={externalRoutes.instagram}>
            //       <p className="lead">
            //         <span>
            //           <BsInstagram className="align-middle me-2" />
            //           Our Instagram page
            //         </span>
            //       </p>
            //     </a>
            //     <a href={externalRoutes.linkedin}>
            //       <p className="lead">
            //         <span>
            //           <BsLinkedin className="align-middle me-2" />
            //           Our Linkedin page
            //         </span>
            //       </p>
            //     </a>
            //     <a href={externalRoutes.twitter}>
            //       <p className="lead">
            //         <span>
            //           <BsTwitter className="align-middle me-2" />
            //           Our Twitter page
            //         </span>
            //       </p>
            //     </a>
            //   </div>
            // </Col>
          }
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
