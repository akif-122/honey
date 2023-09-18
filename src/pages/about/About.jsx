import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutImg from "../../assets/images/about.png"
import aboutLeftImg from "../../assets/images/about_left.png"
import Button from '../../components/button/Button'
const About = () => {
   // ABOUT BTN
   const aboutBtn = {
    btnLink: "about",
    btnText: "Read More",
    sm: true
}
  return (
    <>
      {/* ABOUT SECTION START */}
      <section className='about'>
        <Container>
          <Row className='align-items-center'>
            <Col md="7" lg="6">
              <div className="about-text">
                <div className="about-left-img" data-aos="fade-right">
                  <img src={aboutLeftImg} alt="" />
                </div>
                <h2 data-aos="fade-down">About Our Honey</h2>
                <p data-aos="zoom-in">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>

                <div className="about-btn" data-aos="fade-right">
                  <Button btnContent={aboutBtn} />
                </div>

              </div>
            </Col>
            <Col md="5" className='ms-auto'>
              <div className="about-img" data-aos="fade-down-left">
                <img src={aboutImg} width={"100%"} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ABOUT SECTION END */}
    </>
  )
}

export default About