import React from 'react';
import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import { Helmet } from "react-helmet";

import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import { getProjectsItem } from '../../api/projects/ProjectsData';

const Data = ({ data }) => {
    const nextData = getProjectsItem(2);

    return (
        <React.Fragment>
            <Helmet>
                <title>DEXSA – For Investors</title>
                <meta name="description" content="Investment opportunities in IPU and WERU by DEXSTUDIOAPP." />
            </Helmet>

            <HeaderHalf
                className="project-img"
                heroContent={{
                    title: "INVEST IN INNOVATION",
                    src: "/assets/img/investors/hero-investors.jpg",
                    overlay: 5,
                }}
                parallax={{ yPercent: 30, scale: 1.1 }}
            >
                <strong className="color-heading">DEXSTUDIOAPP LLC</strong><br />
                <span>Seeking Strategic Investment</span><br />
                <span>Funding Rounds: WERU & IPU</span><br />
                <span>Pitch Deck Available Upon Request</span>
            </HeaderHalf>

            <Container className="section-margin">
                <TitleCover>Opportunity</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Invest in the Future of Digital Intelligence</h2>}
                </TextTrigger>
                <FadeUpTrigger stagger={0.5}>
                    <p className="mt-20">
                        DEXSTUDIOAPP is an innovation-driven development studio currently opening investment opportunities
                        for two of our flagship ventures — <strong>IPU</strong> and <strong>WERU</strong>.
                    </p>
                    <p className="mt-10">
                        We specialize in building scalable, AI-powered platforms with real-world applications in personal identity,
                        digital memory, and next-gen user platforms. Our mission is to build tech that matters — and we invite you to be part of it.
                    </p>
                    <ButtonDefault
                        text="View Pitch Deck"
                        icon={faAngleRight}
                        href="https://your-link-to-pitchdeck.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-30"
                    />
                </FadeUpTrigger>
            </Container>

            <BoxImageVertical src="/assets/img/project/ipu.webp" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30}>
                        <TitleCover>IPU</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>Intelligent Personal Universe</h2>
                        <p ref={ref}>
                            A self-evolving digital identity platform combining behavioral data, social layers, and AI-powered
                            personalization to deliver human-centered interfaces. IPU is designed for integration across fintech,
                            education, health, and lifestyle platforms.
                        </p>
                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical>

            <BoxImageVertical src="/assets/img/project/weru.webp" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30}>
                        <TitleCover>WERU</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>We Remember You</h2>
                        <p ref={ref}>
                            A digital memory ecosystem that preserves and enhances personal legacies using AI-driven storytelling,
                            data consolidation, and emotional context. WERU enables intergenerational transfer of identity and
                            values, redefining memory in the digital age.
                        </p>
                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical>

            <div className="p-relative section-margin text-center v-dark-head">
                <ParallaxImage src="/assets/img/investors/invest-footer.jpg" overlay={5} />
                <Container className="v-middle z-index-1">
                    <h3 className="mb-20">Ready to Invest in the Future?</h3>
                    <p>Contact us to access the pitch deck, discuss terms, or schedule a live product walkthrough.</p>
                    <ButtonDefault
                        text="Let's Talk"
                        icon={faAngleRight}
                        href="mailto:invest@dexstudio.app"
                        className="mt-30"
                    />
                </Container>
            </div>

            <NextProject heroContent={nextData} overlay={nextData.overlay} />
        </React.Fragment>
    );
};

export default Data;
