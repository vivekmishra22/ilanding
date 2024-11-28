import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <ListGroup variant="flush">
                            <span class="sitename">iLanding</span>
                            <ListGroup.Item className='border-0'>A108 Adam Street</ListGroup.Item>
                            <ListGroup.Item className='border-0'>New York, NY 535022</ListGroup.Item>
                            <ListGroup.Item className='border-0'><strong>Phone:</strong> <span>+1 5589 55488 55</span></ListGroup.Item>
                            {/* <ListGroup.Item className='border-0'><strong>Phone:</strong> <span>+1 5589 55488 55</span></ListGroup.Item> */}
                            <ListGroup.Item className='border-0'><strong>Email:</strong> <span>info@example.com</span></ListGroup.Item>
                            {/* <ListGroup.Item className='border-0'><strong>Email:</strong> <span>info@example.com<</ListGroup.Item> */}
                        </ListGroup>
                        <div class="social-links d-flex mt-4">
                            <a href=""><i class="bi bi-twitter-x"></i></a>
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Hic solutasetp</h4>
                        <ul>
                            <li><a href="#">Molestiae accusamus iure</a></li>
                            <li><a href="#">Excepturi dignissimos</a></li>
                            <li><a href="#">Suscipit distinctio</a></li>
                            <li><a href="#">Dilecta</a></li>
                            <li><a href="#">Sit quas consectetur</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4>Nobis illum</h4>
                        <ul>
                            <li><a href="#">Ipsam</a></li>
                            <li><a href="#">Laudantium dolorum</a></li>
                            <li><a href="#">Dinera</a></li>
                            <li><a href="#">Trodelas</a></li>
                            <li><a href="#">Flexo</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <div className="copyright text-center">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">iLanding</strong> <span>All Rights Reserved</span></p>
                    <div class="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Footer
