import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Navbar expand="lg" className="bg-primary-subtle rounded-pill my-3 px-3 py-2">
                            <Container>
                                <Navbar.Brand href="#home" className='fs-4'>iLanding</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mx-auto">
                                        <Nav.Link className='text-dark fs-6 px-3' href="#hero">Home</Nav.Link>
                                        <Nav.Link className='text-dark px-3' href="#about">About</Nav.Link>
                                        <Nav.Link className='text-dark px-3' href="#features">Features</Nav.Link>
                                        <Nav.Link className='text-dark px-3' href="#services">Services</Nav.Link>
                                        <Nav.Link className='text-dark px-3' href="#pricing">Pricing</Nav.Link>
                                        <NavDropdown className='text-dark px-3' title="Dropdown" id="basic-nav-dropdown">

                                            <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>

                                            <Dropdown>
                                                <Dropdown.Toggle variant="light" >Dropdown</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Dropdown 1</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Dropdown 2</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 3</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 4</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Dropdown 5</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <NavDropdown.Item href="#action/3.2">Dropdown 2</NavDropdown.Item>
                                            {/* <NavDropdown.Divider /> */}
                                            <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Dropdown 4</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link className='text-dark' href="#pricing">Contact</Nav.Link>
                                    </Nav>
                                    <Button variant="primary" className='rounded-pill px-3'>Get Started</Button>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default MyNavbar
