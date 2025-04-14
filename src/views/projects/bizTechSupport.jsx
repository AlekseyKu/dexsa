// src\views\projects\bizProcessAutomation.jsx
import React from 'react';
import { Container } from "react-bootstrap";

import HeaderDefault from "../../components/header/HeaderDefault";
import DsnGrid from "../../components/DsnGrid";
// import ParallaxImage from "../../components/parallax-image/ParallaxImage";
// import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/bizContactForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceProcessAutomation";
import TechStackSection from '../../components/services/TechStackSection';

// import './style.scss';

function BlogDetails({ props }) {
    const heroContent = {
        title: "IT Support",
        // date: 'March 27, 2025',
        category: ["not just enablement"],
        src: "/assets/img/project/bizItSupport.webp"
    };

    return (
        <>
            <HeaderDefault
                heroContent={heroContent}
                parallax={{ yPercent: 30 }}
                overlay={4}
                height="40vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>
                    <Container className="section-margin"> 
                        <p className="mb-10">
                            At DEXSA, we do more than fix issues — we ensure your entire IT infrastructure runs smoothly, 
                            securely, and without interruption. IT support isn’t just enablement — it’s proactive care, 
                            strategic thinking, and 24/7 reliability.                       
                        </p>
                        <p className="mb-10">
                            Our business isn’t just about providing IT support as a standalone service — we accompany our 
                            clients throughout every project we deliver. Whether it’s a one-time request or a full-scale 
                            solution, our team ensures your infrastructure is supported, stable, and ready for long-term success.
                        </p>
                        <p>
                            We've supported operations for global businesses, managing networks, cloud systems, endpoints, 
                            and user environments. From real-time monitoring to help desk automation, from system upgrades 
                            to cybersecurity — we know how to keep your tech ecosystem healthy, agile, and always on.
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
                        Ready for Reliable IT?
                    </TitleSection>
                    <p>
                        Contact us — we’ll assess your infrastructure, uncover vulnerabilities, and implement a support 
                        strategy that keeps your systems secure, stable, and always running.                    
                    </p>
                
                    <CommentForm className="mt-40"/>
                </Container>
            </Container>
            

            <NextPage className="section-margin" text="Next Project" to="/projects/">
                TODO
            </NextPage>
            <Footer />
        </>
    );
}

export default BlogDetails;
