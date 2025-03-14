import React from 'react'

// Importing the CSS
import './style.scss'

import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

// Component
import {Col, Row} from 'react-bootstrap';
import ParallaxImage from "../parallax-image/ParallaxImage";
import {dsnCN} from "../../hooks/helper";

const HeroContent = {
    title: "Hello we, are \nDsn Grid",
    description: `Founded in 2000, Dsn Grid has become one of the best Digital Agency in Themeforest.
     Blue money going forward, but deploy to production. First-order optimal strategies build on a culture of contribution and inclusion so those options`,
    authorTitle: "SALVADOR DALI",
    authorJob: "Digital Artisit",
    experienceNumber: "25",
    experienceDescription: `YEARS OF \nDIGITAL EXPERIENCE`,
    heroImage: '/assets/img/about.jpg'
};


function HeroSection({className, ...restProps}) {


    return (
        <section className={dsnCN('hero-section', className)} {...restProps}>
            <Row>
                <Col lg={4}>
                    <div className='box-text '>
                        <MoveTrigger from={{y: 0}} to={{y: -30}} tablet={false} mobile={false}>
                            {(ref) => <h2 className='title-section mb-30 pre-line' ref={ref}>{HeroContent.title}</h2>}
                        </MoveTrigger>
                        <FadeUpTrigger>
                            {(ref) => <>
                                <p ref={ref}>{HeroContent.description}</p>
                                <h5 className='sm-title-block mt-30' ref={ref}>{HeroContent.authorTitle}</h5>
                                <span className="auth-position mt-10" ref={ref}>{HeroContent.authorJob}</span>
                                <div className='experience mt-30'>
                                    <span className='number' ref={ref}>{HeroContent.experienceNumber}</span>
                                    <p className="color-heading pre-line"
                                       ref={ref}>{HeroContent.experienceDescription}</p>
                                </div>
                            </>}
                        </FadeUpTrigger>

                    </div>
                </Col>
                <Col className="mt-30" lg={8}>
                    <div className='box-img background-section box-padding'>
                        <ParallaxImage src={HeroContent.heroImage}  height="100%"/>
                    </div>
                </Col>
            </Row>
        </section>
    )
}


export default HeroSection