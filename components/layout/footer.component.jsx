import { Container, Row, Col } from "react-bootstrap";
// import { BsTwitter, BsTelegram, BsInstagram, BsLinkedin } from "react-icons/bs";
// import icons from "../../styles/icons.module.css";
// import externalRoutes from "../../constants/external-routes.constant";

const Footer = () => {
  return (
    <footer>
      <Container
        id="footer"
        data-testid="footer"
        fluid={true}
        className="bg-dark text-muted px-5"
      >
        <Container>
          {
            //                 <Row>
            //   <Col xs={12}>
            //     <p className="text-center lead">Follow us on social media</p>
            //   </Col>
            //   <Col>
            //     <div className="d-flex justify-content-center">
            //       <div className="mx-3">
            //         <a
            //           href={externalRoutes.twitter}
            //           className={`rounded-circle p-2 ${icons.twitter}`}
            //         >
            //           <BsTwitter />
            //         </a>
            //       </div>
            //       <div className="mx-3">
            //         <a
            //           href={externalRoutes.instagram}
            //           className={`rounded-circle p-2 ${icons.instagram}`}
            //         >
            //           <BsInstagram />
            //         </a>
            //       </div>
            //       <div className="mx-3">
            //         <a
            //           href={externalRoutes.telegram}
            //           className={`rounded-circle p-2 ${icons.telegram}`}
            //         >
            //           <BsTelegram />
            //         </a>
            //       </div>
            //       <div className="mx-3">
            //         <a
            //           href={externalRoutes.linkedin}
            //           className={`rounded-circle p-2 ${icons.linkedin}`}
            //         >
            //           <BsLinkedin />
            //         </a>
            //       </div>
            //     </div>
            //   </Col>
            // </Row>
          }
          <Row>
            <Col className="d-flex flex-column align-items-center pt-4">
              <p className="font-monospace mb-1">© 2022 examsgalaxy.com</p>
              <p>All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
