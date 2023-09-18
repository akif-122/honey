import React from 'react'
import {Row, Col, Container, Form } from 'react-bootstrap'
import "./style.css"

const Contact = () => {


 
  return (
    <>
    {/* CONTACT SECTION START */}
    <section className='contact'>
        <Container>
          <Row>
            <Col lg="10" className="mx-auto">
              <h2 className='text-center' data-aos="zoom-in">Contact Us</h2>

              <div className="contact-form">
                <Form>
                  <Row>
                    <Col sm="6" data-aos="fade-right">
                      <Form.Group>
                        <Form.Control type="text" placeholder='Full Name' />
                      </Form.Group>
                    </Col>

                    <Col sm="6" data-aos="fade-left">
                      <Form.Group>
                        <Form.Control type="email" placeholder='Email' />
                      </Form.Group>
                    </Col>

                    <Col sm="6" data-aos="fade-down">
                      <Form.Group>
                        <Form.Control type="text" placeholder='Phone Number' />
                      </Form.Group>
                    </Col>

                    <Col sm="6" data-aos="fade-up-left">
                      <Form.Group>
                        <Form.Control type="text" placeholder='Message' />
                      </Form.Group>
                    </Col>
                    <div className="contact-btn d-flex justify-content-center" data-aos="zoom-in">
                      <button className='m-btn'>Submit</button>
                    </div>
                  </Row>
                </Form>
              </div>
              
            </Col>
          </Row>
        </Container>
    </section>
    {/* CONTACT SECTION END */}

    </>
  )
}

export default Contact