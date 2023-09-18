import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Col, Container, Row } from 'react-bootstrap'

import Button from '../../components/button/Button.jsx'

import bannerImg from "../../assets/images/banner_img.png"
import aboutImg from "../../assets/images/about.png"
import aboutLeftImg from "../../assets/images/about_left.png"

import Quality from '../../components/quality/Quality';
import Contact from '../../components/contact/Contact.jsx';


const Home = () => {

    // HERO BTN 
    const heroBtn = {
        btnLink: "contact",
        btnText: "Contact",
    }

    // ABOUT BTN
    const aboutBtn = {
        btnLink: "about",
        btnText: "Read More",
        sm: true
    }

    return (
        <>
            <section className='hero-section'>
                <Container>
                    <OwlCarousel loop
                        nav
                        autoPlay
                        autoplayTimeout={1000}
                        autoplaySpeed={300}
                        items={1}
                        margin={50}>
                        <Row>
                            <Col md="7">
                                <div className="hero-text">
                                    <h1 data-aos="fade-right">YOU CAN GET PURE HONY HERE</h1>
                                    <p data-aos="fade-left">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                    <div className="hero-btn " data-aos="fade-up">
                                        <Button btnContent={heroBtn} />
                                    </div>
                                </div>
                            </Col>

                            <Col md="5">
                                <div className="banner-img" data-aos="fade-left">
                                    <img src={bannerImg} width={"100%"} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="7">
                                <div className="hero-text">
                                    <h1>YOU CAN GET PURE HONY HERE</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                    <div className="hero-btn">
                                        <Button btnContent={heroBtn} />
                                    </div>
                                </div>
                            </Col>

                            <Col md="5">
                                <div className="banner-img">
                                    <img src={bannerImg} width={"100%"} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </OwlCarousel>
                </Container>
            </section>


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

            <Quality />

            <Contact/>

        </>
    )
}

export default Home