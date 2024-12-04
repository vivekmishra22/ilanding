import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  return (
    <>
     
        <Container className="pb-5 pt-5" >
          <Row>
            <Col md={12} className="text-center " data-wow-delay="0.5s">
              <h1>Contact Contact</h1>
              <span
                style={{
                  display: "inline-block",
                  width: "5%",
                  borderBottom: "3px solid blue",
                }}
              ></span>

              <p className="text-dark my-3 fs-5">
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </Col>
          </Row>
        
          <Row className="mt-5 pt-3 m-0 p-0  pb-5 ">
            {/* card first */}
            <Col lg={5} md={12} sm={12} xs={12} className=" mb-4  mb-md-0 d-flex">
              <Card className=" h-100 bg-primary border border-0 rounded-4 text-white pt-4 ">
                <Card.Body className="ps-5 ps-xs-0">
                  <h2 className="pb-2 ">Contact Info</h2>
                  <p className="fs-6">
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi.Vestibulum ante ipsum primis.
                  </p>
                  {/* icon first */}
                  <Row className="pt-3 ps-2">
                    <Col md={4} xs={4} className="icons  pt-3">
                      <GrLocation size={25} />
                    </Col>
                    <Col md={8} xs={8} className="ps-4">
                      <h5>Our Location</h5>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022
                      </p>
                    </Col>
                  </Row>
                  {/* <Col md={12}>
                  <div className="d-flex">
                    <span className="icons pt-3 "><GrLocation size={25}  /></span>
                   <span> 
                    <h5>Our Location</h5>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022
                      </p>
                      </span>
                    
                  </div>
                  </Col> */}

                {/* icon second */}
                  <Row className="pt-3 ps-2">
                    <Col md={4} xs={4} className="icons  pt-3">
                      <LuPhone size={25} />
                    </Col>
                    <Col md={8} xs={8} className="ps-4">
                      <h5>Phone Number</h5>
                      <p>
                        +1 5589 55488 55
                        <br />
                        +1 6678 254445 41
                      </p>
                    </Col>
                  </Row>

                {/* icon third */}
                  <Row className="pt-3 ps-2">
                    <Col md={4} xs={4} className="icons  pt-3">
                      <TfiEmail size={25} />
                    </Col>
                    <Col md={8} xs={8} className="mb-5 ps-4">
                      <h5>Email Address</h5>
                      <p>
                        info@example.com <br />
                        contact@example.com
                      </p>
                    </Col>
                  </Row>
                  {/* end icon */}

                </Card.Body>
              </Card>
            </Col>

            {/*card second  */}
            <Col lg={7} md={12} sm={12}>
              <Card className=" h-100 bg-white border border-0 rounded-4 shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Body className="mx-4 mt-4">
                  <h2>Get In Touch</h2>
                  <p className="text-dark py-3">
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis.
                  </p>
                  <Row>
                    <Col md={6}>
                      <Form.Control
                        className="py-3 mb-2 mb-md-0"
                        type="text"
                        placeholder="Your Name"
                        
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        className="py-3"
                        type="email"
                        placeholder="Your Email"
                      />
                    </Col>
                    <Col md={12} className="mt-4">
                      <Form.Control
                        className="py-3"
                        type="text"
                        placeholder="Subject"
                      />
                    </Col>
                    <Col md={12} className="mt-4">
                      <Form.Control
                        as="textarea"
                        rows="4"
                        placeholder="Message"
                      />
                    </Col>
                    <Col md={12} className="text-center mt-4">
                      <Button href="#"
                        variant="primary"
                        className="rounded-pill py-2 px-4 "
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
     
    </>
  );
};

export default Contact;
