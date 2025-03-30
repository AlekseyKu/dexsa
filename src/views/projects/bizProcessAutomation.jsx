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
        title: "BUSINESS PROCESS AUTOMATION",
        // date: 'March 27, 2025',
        category: ["not just optimization"],
        src: "/assets/img/project/bizProcessAutomation.webp"
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
                            At DEXSA, we bring order to chaos. Business process automation isn’t just optimization — 
                            it’s a full-scale rethinking of how your company operates. We eliminate routine tasks, 
                            accelerate operations, and build systems that run 24/7 without failures or human error.
                        </p>

                        <p>
                            We've automated operations for global retailers, manufacturers, IT teams, and real estate 
                            developers. From order processing to internal logistics, from project management to CRM 
                            integration — we know how to make your processes faster, more transparent, and more reliable.
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
                        Ready to Automate?
                    </TitleSection>
                    <p>
                        Contact us — we'll audit your workflows, identify bottlenecks, and propose an automation architecture that scales with your business.
                    </p>
                
                    <CommentForm className="mt-40"/>
                </Container>
            </Container>
            

            <NextPage className="section-margin" text="Next Project" to="/projects/web-development">
                Web Development
            </NextPage>
            <Footer />
        </>
    );
}

export default BlogDetails;
