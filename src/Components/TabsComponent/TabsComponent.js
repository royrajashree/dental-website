import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashRouter, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const TabsComponent = () => {

  const location = useLocation();

  return (
    <div>
      <Navbar collapseOnSelect expand="sm">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <HashRouter>
              <Nav className="justify-content-end ml-auto mr-2" style={{ marginLeft: "10%" }}>
                {location.pathname == "/" ? <Nav.Link><Link className="navLinks active" to="/">HOME</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/">HOME</Link></Nav.Link>}
                {location.pathname == "/about" ? <Nav.Link><Link className="navLinks active" to="/about">ABOUT US</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/about">ABOUT US</Link></Nav.Link>}
                {location.pathname == "/services" ? <Nav.Link><Link className="navLinks active" to="/services">SERVICES</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/services">SERVICES</Link></Nav.Link>}
                {location.pathname == "/gallery" ? <Nav.Link><Link className="navLinks active" to="/gallery">GALLERY</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/gallery">GALLERY</Link></Nav.Link>}
                {location.pathname == "/contactUs" ? <Nav.Link><Link className="navLinks active" to="/contactUs">CONTACT US</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/contactUs">CONTACT US</Link></Nav.Link>}
                {location.pathname == "/covid19" ? <Nav.Link><Link className="navLinks active" to="/covid19">COVID-19</Link></Nav.Link> : <Nav.Link><Link className="navLinks" to="/covid19">COVID-19</Link></Nav.Link>}
              </Nav>
            </HashRouter>
          </Navbar.Collapse>
        </Container>
        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
      </Navbar>
    </div>
  )
}

export default TabsComponent;


