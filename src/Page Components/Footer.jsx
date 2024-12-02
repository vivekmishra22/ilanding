import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Assets/Css/footer.css';
import { RiTwitterXLine, RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <Container className='py-3'>
                <Row>
                    <Col md={4}>
                        <span className='footer-heading fw-semibold text-dark'>iLanding</span>

                        <div class="footer-contact pt-3">
                            <p className='mb-1'>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p class="mt-3 mb-1">
                                <strong className='fw-bolder'>Phone:</strong>
                                <span>+1 5589 55488 55</span>
                            </p>
                            <p>
                                <strong>Email:</strong>
                                <span>info@example.com</span>
                            </p>
                        </div>
                        <div class="social-links d-flex mt-4 gap-2 fs-5">
                            <a href="#" className='d-flex align-items-center justify-content-center border rounded-circle text-dark p-2'><RiTwitterXLine /></a>
                            <a  href="#" className='d-flex align-items-center justify-content-center border rounded-circle text-dark p-2'><RiFacebookCircleFill /></a>
                            <a  href="#" className='d-flex align-items-center justify-content-center border rounded-circle text-dark p-2'><RiInstagramLine /></a>
                            <a  href="#" className='d-flex align-items-center justify-content-center border rounded-circle text-dark p-2'><RiLinkedinBoxFill /></a>
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
