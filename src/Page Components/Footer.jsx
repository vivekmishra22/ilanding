import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Assets/Css/footer.css';
import { RiTwitterXLine, RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <Container className='py-5'>
                <Row>
                    <Col md={4}>

                        <div className="footer-header mb-4">
                            <span className='fw-semibold text-dark fs-3'>iLanding</span>
                        </div>

                        <div class="footer-contact">
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
                        <div className="social-links d-flex mt-4 gap-2 fs-5">
                            <a href="#" className='d-flex align-items-center justify-content-center border border-secondary rounded-circle text-dark footer-icon p-2'><RiTwitterXLine /></a>
                            <a href="#" className='d-flex align-items-center justify-content-center border border-secondary rounded-circle text-dark footer-icon p-2'><RiInstagramLine /></a>
                            <a href="#" className='d-flex align-items-center justify-content-center border border-secondary rounded-circle text-dark footer-icon p-2'><RiFacebookCircleFill /></a>
                            <a href="#" className='d-flex align-items-center justify-content-center border border-secondary rounded-circle text-dark footer-icon p-2'><RiLinkedinBoxFill /></a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <h4 className='fs-6 mb-2'>Useful Links</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Home</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>About us</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Services</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Terms of service</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Privacy policy</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 className='fs-6 mb-2'>Our Services</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Web Design</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Web Development</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Product Management</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Marketing</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Graphic Design</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 className='fs-6 mb-2'>Hic solutasetp</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Molestiae accusamus iure</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Excepturi dignissimos</a></li>
                            <li className='mb-2 footer-list'><a href="#" className='text-decoration-none text-secondary footer-list'>Suscipit distinctio</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Dilecta</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Sit quas consectetur</a></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 className='fs-6 mb-2'>Nobis illum</h4>
                        <ul className="list-unstyled">
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Ipsam</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Laudantium dolorum</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Dinera</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Trodelas</a></li>
                            <li className='mb-2'><a href="#" className='text-decoration-none text-secondary footer-list'>Flexo</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <div className="copyright text-center">
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">iLanding</strong> <span>All Rights Reserved</span></p>
                        <div class="credits">
                            Designed by <a className='text-decoration-none' href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
