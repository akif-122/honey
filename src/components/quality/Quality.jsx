import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style.css"
import Button from "../button/Button"

import quaImg1 from "../../assets/images/quality1.png"
import quaImg2 from "../../assets/images/quality2.png"
import quaImg3 from "../../assets/images/quality3.png"
import quaImg4 from "../../assets/images/quality4.png"
import quaImg5 from "../../assets/images/quality5.png"
import quaImg6 from "../../assets/images/quality6.png"
import quaImg7 from "../../assets/images/quality7.png"
import quaImg8 from "../../assets/images/quality8.png"

const Quality = () => {
    const qualityCards = [
        {
            img: quaImg1,
            aosAnime : "fade-right"
        },
        {
            img: quaImg2,
            aosAnime : "fade-down"
        },
        {
            img: quaImg3,
            aosAnime : "zoom-in"
        },
        {
            img: quaImg4,
            aosAnime : "fade-left"
        },
        {
            img: quaImg5,
            aosAnime : "fade-up-right"
        },
        {
            img: quaImg6,
            aosAnime : "zoom-out"
        },
        {
            img: quaImg7,
            aosAnime : "fade-down"
        },
        {
            img: quaImg8,
            aosAnime : "fade-up"
        },
    ];

    // qualityBtn
    const qualityBtn = {
        btnText: "Read More",
        btnLink : "quality",
        sm: true

    }
    
    return (
        <>
            <section className='quality'>
                <Container>
                    <div className="quality-heading text-center">
                        <h2 data-aos="fade-right">Quality OF Honey For sale</h2>
                        <p data-aos="fade-left">There are many variations of passages of Lorem Ipsum available, but There are many variations of passages of Lorem Ipsum available, but</p>
                    </div>

                    <Row className='quality-cards'>
                        {
                            qualityCards.map((card, i) => (
                                <Col sm="6" lg="3" key={i} data-aos={card.aosAnime}>
                                    <div className="quality-card">
                                        <div className="quality-img">
                                            <img src={card.img} width={"100%"} alt="" />
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }



                    </Row>
                    <div className="qualit-btn mt-5 d-flex justify-content-center" data-aos="zoom-in">
                        <Button btnContent={qualityBtn}/>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Quality