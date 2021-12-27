import { Navbar, Container, Button, Nav } from "react-bootstrap";
import Image from "next/image";
import programRoutes from "../../constants/program-routes.constant";
import externalRoutes from "../../constants/external-routes.constant";
import { useRouter } from "next/router";
import Link from "next/link";
import BrandIcon from "../../public/favicon.ico";

const AppNavbar = () => {
  const router = useRouter();
  const isCurrentPath = (expected) => {
    return router.pathname === expected;
  };

  const isActive = (expected) => {
    const output = {};
    output.active = isCurrentPath(expected);
    return output;
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow p-0">
      <Container>
        <Link passHref href={programRoutes.home}>
          <Navbar.Brand className="m-0 p-1 d-flex">
            <Image
              src={BrandIcon}
              alt="Exams Galaxy brand icon"
              height={50}
              width={50}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto lead">
            <Link passHref href={programRoutes.home}>
              <Nav.Link
                role="link"
                {...isActive(programRoutes.home)}
                className="m-2"
              >
                Home
              </Nav.Link>
            </Link>
            <Link passHref href={programRoutes.help}>
              <Nav.Link
                role="link"
                {...isActive(programRoutes.help)}
                className="m-2"
              >
                Help
              </Nav.Link>
            </Link>
            <Link passHref href={programRoutes.aboutUs}>
              <Nav.Link
                role="link"
                {...isActive(programRoutes.aboutUs)}
                className="m-2"
              >
                About Us
              </Nav.Link>
            </Link>
            <Link passHref href={programRoutes.contactUs}>
              <Nav.Link
                role="link"
                {...isActive(programRoutes.contactUs)}
                className="m-2"
              >
                Contact Us
              </Nav.Link>
            </Link>
          </Nav>
          <Link href={externalRoutes.webApp}>
            <Button variant="success" className="ms-auto m-2">
              Go To App
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
