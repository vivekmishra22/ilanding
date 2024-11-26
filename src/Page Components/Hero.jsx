import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroImage from '../Assets/Images/illustration-1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col md={6}>
                        <Button className='rounded-pill bg-primary-subtle text-primary border-0' variant="primary">
                            <FontAwesomeIcon icon={faGear} className='px-2 bg-primary-subtle' />
                            <b className='bg-primary-subtle'>Working for your success</b>
                        </Button>
                        <h1 className='text-primary-emphasis fs-1'>Maecenas Vitae <br />
                            Consectetur Led <br />
                            <span className='text-primary fs-1'>Vestibulum Ante</span>
                        </h1>
                        <p>
                        Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                        Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img className='img-thumbnail border-0' src={HeroImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero;
