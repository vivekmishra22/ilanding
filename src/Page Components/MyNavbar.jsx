import React from 'react';
import '../Assets/Css/MyNavbar.css';
import '../Assets/Css/hero.css';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <Container fluid className='hero-background'>
            <Container>
                <Row className=''>
                    <Col md={12} xs={12} lg={12}>
                        <div className="header">                            
                            <Navbar expand="lg" variant='white' className="bg-white text-dark rounded-pill my-3 px-3 py-1 custom-navbar d-flex justify-content-center align-items-center">
                                <Container className='bg-white d-flex justify-content-between'>
                                    <Navbar.Brand href="#home" className='fs-4 bg-white '>iLanding</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className='bg-white' id="basic-navbar-nav">
                                        <Nav className="mx-auto">
                                            <Nav.Link className='text-primary bg-white fs-6 px-2' href="#hero">Home</Nav.Link>
                                            <Nav.Link className='text-dark bg-white px-2' href="#about">About</Nav.Link>
                                            <Nav.Link className='text-dark bg-white px-2' href="#features">Features</Nav.Link>
                                            <Nav.Link className='text-dark bg-white px-2' href="#services">Services</Nav.Link>
                                            <Nav.Link className='text-dark bg-white px-2' href="#pricing">Pricing</Nav.Link>
                                            <NavDropdown className='text-dark bg-white px-2' title="Dropdown" id="basic-nav-dropdown">

                                                <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>

                                                <Dropdown className='bg-white'>
                                                    <Dropdown.Toggle variant="light" className='bg-white border-0' >Dropdown</Dropdown.Toggle>
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
                                            <Nav.Link className='text-dark bg-white' href="#pricing">Contact</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                        <Button variant="primary" className='rounded-pill px-3' style={{ transition: '0.3s' }}>Get Started</Button>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                </Row>

            </Container>
            </Container>
        </>
    )
}

export default MyNavbar
