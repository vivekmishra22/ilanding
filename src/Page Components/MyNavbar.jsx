import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Dropdown } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <Navbar expand="lg" className="bg-white text-black rounded-pill my-3 px-3">
                            <Container className='bg-white text-black'>
                                <Navbar.Brand className='bg-white text-black' href="#home">iLanding</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white text-black' />
                                <Navbar.Collapse id="basic-navbar-nav" className='bg-white text-black'>
                                    <Nav className="m-auto bg-white text-black">
                                        <Nav.Link href="#hero">Home</Nav.Link>
                                        <Nav.Link href="#about">About</Nav.Link>
                                        <Nav.Link href="#features">Features</Nav.Link>
                                        <Nav.Link href="#services">Services</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                        <NavDropdown className='bg-white text-black' title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
                                            <Dropdown>
                                                <Dropdown.Toggle className='bg-white text-black border-0' id="">
                                                    Dropdown
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Dropdown 1</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Dropdown 2</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 3</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 4</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 5</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <NavDropdown.Item href="#action/3.2">Dropdown 2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Dropdown 4</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="contact">Contact</Nav.Link>
                                    </Nav>
                                <Button variant="primary" className='rounded-pill'>Get Started</Button>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MyNavbar;
