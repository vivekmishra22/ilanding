import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import '../Assets/Css/hero.css';
import '../Assets/Css/universal.css';
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
            <Container className='Hero-background'>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={6}>
                        <Button className="btn bg-primary-subtle text-primary rounded-pill d-flex align-items-center justify-content-center" variant="">
                            <IoIosSettings className="icon-responsive mx-1 bg-primary-subtle" size={24} />
                            <b className='fw-semibold bg-primary-subtle'>Working for your success</b>
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
                    <Col xs={12} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                        <div className="position-relative">
                            {/* Hero Image */}
                            <Image
                                src={HeroImage}
                                alt="HeroImage"
                                className="img-thumbnail border-0"
                                fluid
                            />

                            {/* Profile Card */}
                            <Card
                                style={{ width: '18rem' }}
                                className="profile-card position-absolute border-0 shadow-lg"
                            >
                                <Card.Body>
                                    <div className="hero-profile d-flex align-items-center justify-content-center">
                                        {/* Profile Images */}
                                        <Image
                                            src={Hero_profile1}
                                            alt="Profile 1"
                                            className="img-thumbnail border-0 rounded-circle"
                                        />
                                        <Image
                                            src={Hero_profile2}
                                            alt="Profile 2"
                                            className="img-thumbnail border-0 rounded-circle"
                                        />
                                        <Image
                                            src={Hero_profile3}
                                            alt="Profile 3"
                                            className="img-thumbnail border-0 rounded-circle"
                                        />
                                        <Image
                                            src={Hero_profile4}
                                            alt="Profile 4"
                                            className="img-thumbnail border-0 rounded-circle"
                                        />
                                        <Image
                                            src={Hero_profile5}
                                            alt="Profile 5"
                                            className="img-thumbnail border-0 rounded-circle"
                                        />
                                        <span style={{ width: '35px', height: '35px' }} className="rounded-circle bg-primary text-white p-1 d-flex align-items-center justify-content-center">
                                            12+
                                        </span>

                                    </div>
                                    <p className="mb-0 mt-2 text-center">
                                        12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit
                                    </p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>
                <Row className='mt-5 gy-4'>
                    <Col xs={12} md={3} lg={3} className='mb-2'>
                        <Card className='border-0'>
                            <Card.Body>
                                <div className="stat-items d-flex justify-content-center align-items-center">
                                    <div className="stat-icon bg-primary-subtle text-primary rounded-circle fs-5 p-3 me-3  d-flex justify-content-center align-items-center">
                                        <BsTrophy />
                                    </div>
                                    <div className="stat-content">
                                        <h4>3x Won Awards</h4>
                                        <p className='mb-0'>Vestibulum ante ipsum</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mb-2'>
                        <Card className='border-0'>
                            <Card.Body className=''>
                                <div className="stat-items d-flex justify-content-center align-items-center">
                                    <div className="stat-icon bg-primary-subtle text-primary rounded-circle fs-5 p-3 me-3  d-flex justify-content-center align-items-center">
                                        <BsBriefcase />
                                    </div>
                                    <div className="stat-content">
                                        <h4>6.5k Faucibus</h4>
                                        <p className='mb-0'>Nullam quis ante</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mb-2'>
                        <Card className='border-0'>
                            <Card.Body>
                                <div className="stat-items d-flex justify-content-center align-items-center">
                                    <div className="stat-icon bg-primary-subtle text-primary rounded-circle fs-5 p-3 me-3  d-flex justify-content-center align-items-center">
                                        <GoGraph />
                                    </div>
                                    <div className="stat-content">
                                        <h4 className=''>80k Mauris</h4>
                                        <p className='mb-0'>Etiam sit amet orci</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} lg={3} className='mb-2'>
                        <Card className='border-0'>
                            <Card.Body>
                                <div className="stat-items d-flex justify-content-center align-items-center">
                                    <div className="stat-icon bg-primary-subtle text-primary rounded-circle fs-5 p-3 me-3  d-flex justify-content-center align-items-center">
                                        <BsAward />
                                    </div>
                                    <div className="stat-content">
                                        <h4>6x Phasellus</h4>
                                        <p className='mb-0'>Vestibulum ante ipsum</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                {/* <Row className='my-3'>
                    
                    
                    
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
                </Row> */}
            </Container>
        </>
    )
}

export default Hero
