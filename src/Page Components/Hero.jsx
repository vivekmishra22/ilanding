import React from 'react';
import { IoIosSettings } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import HeroImage from '../Assets/Images/illustration-1.webp';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
                            <Button variant="white" className='fw-semibold'><FaRegCirclePlay size={24} className='me-2 mx-3'/>Get Started</Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className='img-thumbnail border-0' src={HeroImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero
