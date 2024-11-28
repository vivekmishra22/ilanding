import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../Assets/Css/hero.css';
import { IoIosSettings } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsTrophy, BsBriefcase, BsAward } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import HeroImage from '../Assets/Images/illustration-1.webp';
import Hero_profile1 from '../Assets/Images/avatar-1.webp';
import Hero_profile2 from '../Assets/Images/avatar-2.webp';
import Hero_profile3 from '../Assets/Images/avatar-3.webp';
import Hero_profile4 from '../Assets/Images/avatar-4.webp';
import Hero_profile5 from '../Assets/Images/avatar-5.webp';

const Hero = () => {
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col md={6}>
                        <Button className="btn bg-primary-subtle text-primary rounded-pill d-flex align-items-center justify-content-center" variant="">
                            <IoIosSettings className="icon-responsive mx-1" size={24} />
                            <b className='fw-semibold'>Working for your success</b>
                        </Button>
                        <h1 className='text-primary-emphasis mt-5 display-4 fw-semibold'>
                            Maecenas Vitae <br />
                            Consectetur Led <br />
                            <span className='text-primary'>Vestibulum Ante</span>
                        </h1>
                        <p className='mt-3'>
                            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                        </p>
                        <div className="hero-button d-flex align-items-center">
                            <Button variant="primary" className='rounded-pill fw-semibold px-3'>Get Started</Button>
                            <Button variant="white" className='fw-semibold'><FaRegCirclePlay size={24} className='me-2 mx-3' />Get Started</Button>
                        </div>
                    </Col>
                    <Col md={6} d-flex align-items-center justify-content-center>
                        <img className='img-thumbnail border-0 position-relative' src={HeroImage} alt="" />
                        <Card style={{ width: '18rem' }} className=''>
                            <Card.Body>
                                <div className="hero-profile d-flex">
                                    <img className='img-thumbnail border-0 rounded-circle' src={Hero_profile1} alt="" />
                                    <img className='img-thumbnail border-0 rounded-circle' src={Hero_profile2} alt="" />
                                    <img className='img-thumbnail border-0 rounded-circle' src={Hero_profile3} alt="" />
                                    <img className='img-thumbnail border-0 rounded-circle' src={Hero_profile4} alt="" />
                                    <img className='img-thumbnail border-0 rounded-circle' src={Hero_profile5} alt="" />
                                    <span class="avatar more rounded-circle d-flex align-items-center bg-primary">12+</span>
                                </div>
                                <p class="mb-0 mt-2">12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col md={3}>
                        <Card className=' border-0' style={{ width: '18rem' }}>
                            <Card.Body className='d-flex justify-content-center align-item-centre align-items-center'>
                                <BsTrophy size={32} className='me-2 text-primary p-1 ' />
                                <div className="card-Container">
                                    <Card.Title>3x Won Awards</Card.Title>
                                    <Card.Text>
                                        Vestibulum ante ipsum
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=' border-0' style={{ width: '18rem' }}>
                            <Card.Body className='d-flex justify-content-center align-item-centre align-items-center'>
                                <BsBriefcase size={32} className='me-2 text-primary p-1 ' />
                                <div className="card-Container">
                                    <Card.Title>6.5k Faucibus</Card.Title>
                                    <Card.Text>
                                        Nullam quis ante
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=' border-0' style={{ width: '18rem' }}>
                            <Card.Body className='d-flex justify-content-center align-item-centre align-items-center'>
                                <GoGraph size={32} className='me-2 text-primary p-1 ' />
                                <div className="card-Container">
                                    <Card.Title>80k Mauris</Card.Title>
                                    <Card.Text>
                                        Etiam sit amet orci
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className=' border-0' style={{ width: '18rem' }}>
                            <Card.Body className='d-flex justify-content-center align-item-centre align-items-center'>
                                <BsAward size={32} className='me-2 text-primary p-1 ' />
                                <div className="card-Container">
                                    <Card.Title>6x Phasellus</Card.Title>
                                    <Card.Text>
                                        Vestibulum ante ipsum
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero
