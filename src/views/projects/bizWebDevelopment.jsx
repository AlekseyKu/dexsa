// src\views\projects\bizProcessAutomation.jsx
import React from 'react';
import { Container } from "react-bootstrap";

import HeaderDefault from "../../components/header/HeaderDefault";
import DsnGrid from "../../components/DsnGrid";
// import ParallaxImage from "../../components/parallax-image/ParallaxImage";
// import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/FormProcessAutomation";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceProcessAutomation";
import TechStackSection from '../../components/services/TechStackSection';

// import './style.scss';

function BlogDetails({ props }) {
    const heroContent = {
        title: "WEB DEVELOPMENT",
        // date: 'March 27, 2025',
        category: ["not just websites"],
        src: "/assets/img/project/bizWebDevelopment.webp"
    };

    return (
        <>
            <HeaderDefault
                heroContent={heroContent}
                parallax={{ yPercent: 30 }}
                overlay={4}
                height="80vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>
                    <Container className="section-margin"> 
                        <p className="mb-10">
                            At DEXSA, we build more than websites — we engineer powerful digital experiences. Web development 
                            isn’t just about code — it’s about solving real business problems with smart, scalable, 
                            and secure technology.                        </p>

                        <p>
                            We've delivered web platforms for startups, enterprises, creative agencies, and e-commerce brands. 
                            From responsive landing pages to complex web applications, from CMS integration to performance 
                            optimization — we know how to craft fast, flexible, and future-proof solutions.
                        </p>
                    </Container>
                    

                    <Container className="section-margin">
                        <TitleSection description="Our Services">
                            What We Can Do
                        </TitleSection>
                        <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30} />
                    </Container>

                    <Container className="section-margin">
                        <TitleSection description="Technologies">
                            What We Use
                        </TitleSection>
                        <TechStackSection>
                        
                        </TechStackSection>
                    </Container>


                    

                    {/* <h4><strong>Why Companies Choose Us</strong></h4>
                    <p>
                        We don't just write code — we dive into your business, identify growth points, and deliver solutions that produce results. Our projects focus on scalability, security, and real-world efficiency gains.
                    </p>

                    <div className="p-relative v-dark-head text-center mt-section">
                        <ParallaxImage src="/assets/img/blog/1.jpg" overlay={4} />
                        <Container className="v-middle z-index-1">
                            <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                        </Container>
                    </div> */}



                </DsnGrid>

                <Container>
                    <TitleSection description="and now the question">
                        Time to Transform?
                    </TitleSection>
                    <p>
                        Contact us — we’ll analyze your needs, uncover opportunities, and design a web solution that 
                        scales with your business and delivers real impact.                    
                    </p>
                
                    <CommentForm className="mt-40"/>
                </Container>
            </Container>
            

            <NextPage className="section-margin" text="Next Project" to="/projects/it-support">
                IT Support
            </NextPage>
            <Footer />
        </>
    );
}

export default BlogDetails;
