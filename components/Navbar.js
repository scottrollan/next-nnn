import Navbar from "react-bootstrap/Navbar";
import Link from 'next';

const Nav = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="index">
      <img src='../static/N3nameTransparent.png' alt="" style={{ height: '23px', lineHeight: '64px' }}/>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link  href="index"><a>Home</a></Link>
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Nav;
