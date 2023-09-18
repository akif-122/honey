import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <Container>
          <Row>
            <Col sm="6" lg="3" className='mb-4' data-aos="fade-right">
              <div className="f-about">
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur</p>

                <ul className='social  d-flex list-unstyled'>
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>

              </div>
            </Col>

            <Col sm="6" lg="3" className='mb-4' data-aos="fade-down">
              <h4>Address</h4>
              <p>Healing Center, oo W Street name,</p>
              <ul className='list-list-unstyled'>
                <li><a href="#">(+71) 8522369417</a></li>
                <li><a href="#">(+71) 3434093409</a></li>
                <li><a href="#">demo@gmail.com</a></li>
              </ul>
            </Col>

          <Col sm="6" lg="3" className='mb-4' data-aos="zoom-out">
            <h4>Links</h4>
            <ul className='list-list-unstyled'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/quality">Quality</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          <Col sm="6" lg="3" className='mb-4' data-aos="fade-left">
            <h4>Newsletter</h4>
            <Form>
              <Form.Group>
                <Form.Control type='text' placeholder='Your Name'/>
              </Form.Group>
              <Form.Group>
                <Form.Control type='email' placeholder='Email'/>
              </Form.Group>
              <div className="d-grid">
                <button className='d-block m-btn'>Subscribe</button>
              </div>
            </Form>
          </Col>  
          
        </Row>

      </Container>
    </footer >
    </>
  )
}

export default Footer