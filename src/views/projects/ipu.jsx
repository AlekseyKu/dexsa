// src\views\projects\ipu.jsx
import React from 'react';
// import {getPortfolioItem} from "../../api/portfolio/PortfolioData";
// import {getProjectsItem} from '../../api/projects/ProjectsData';

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonProject from "../../components/button/button-project/ButtonProject";
// import BoxGallery, {BoxGalleryItem} from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
// import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import BoxSliderVertical from "../../components/box-image-vertical/BoxSliderVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import MoveBox from "../../components/move-box/MoveBox";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
// import NextProject from "../../components/next/NextProject";
import NextPage from '../../components/next/NextPage';
import Footer from '../../components/footer/Footer';

import {Helmet} from "react-helmet";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { PITCH_DECK_LINK } from '../../constants/links';
import "./style.scss";


const Ipu = ({data}) => {
    // const nextData = getProjectsItem(2);

    return (
        <React.Fragment>
            <Helmet>
                <title>DEXSA - {data.title} </title>
                <meta name="description" content={data.description}/>
            </Helmet>

            <HeaderHalf 
                className="project-img"
                heroContent={data}
                parallax={{yPercent: 30, scale: 1.1}}
                // textButton="View Website"
                // href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                overlay={data.overlay}
            >
                <strong className="color-heading text-uppercase">A new era of digital trust.</strong> 

                <div className="desc">
                    IPU is a next-generation platform for building verifiable digital commitments, legally 
                    binding agreements, and transparent social contracts.
                    It’s designed to ensure full accountability and unwavering trust — in business, governance, and society.
                </div>
            </HeaderHalf>

            {/* Start Info Project */}
            <Container className="section-margin">
                <TitleCover>I PROMISE YOU</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section text-right" ref={ref}>we call IPU</h2>}
                </TextTrigger>
                <FadeUpTrigger stagger={0.5}>
                    <p className="mt-20">
                        What began as an ambitious concept is now a landmark of technological elegance and digital power.
                        DEXSA led the full-stack development — from infrastructure to UX, from AI architecture to brand identity.
                        This skyscraper isn’t just a building — it’s a statement. A promise kept.
                    </p>
                    <ButtonProject className={"mt-20"}
                                   href={PITCH_DECK_LINK}
                                   target="_blank" rel="noopener noreferrer">
                        PITCH DECK
                    </ButtonProject>
                </FadeUpTrigger>
            </Container>
            {/* End Info Project */}

            {/* Start Gallery List */}
            {/* <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}>
                <BoxGalleryItem
                    src="/assets/img/project/project1/4.jpg" caption="Trevor Bittinger"
                    groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/2.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/3.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
            </BoxGallery> */}
            {/* End Gallery List */}

            {/* Start Box Info With Slider */}
            <BoxSliderVertical className="section-margin">
                <FadeUpTrigger>
                    {(ref) => (
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                            <TitleCover>IPU</TitleCover>
                            <h2 className='title-section border-line-left' ref={ref}>NEW ERA OF TRUST</h2>
                            <h6 ref={ref}>
                                A breakthrough platform redefining digital trust.
                            </h6>
                            <p ref={ref}>
                                IPU transforms promises into measurable digital assets.
                                It allows users to create verifiable commitments — public, legally backed, and reputation-driven.
                                From businesses and creators to public figures and everyday people, IPU empowers a new culture of 
                                transparency and accountability.
                            </p>
                            <p ref={ref}>
                                What makes it powerful:
                                — Digital motivation and discipline tools
                                — Verified social contracts and legal infrastructure
                                — A reputation system for experts, companies, and founders
                                — Audience growth and monetization through trust
                                — Built-in gamification, challenges, and dispute resolution
                            </p>
                            <h6 ref={ref}>
                                Trust is no longer abstract. <br /> With IPU, it’s trackable, valuable, and real.
                            </h6>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="PITCH DECK" icon={faAngleRight} target="_blank" href={PITCH_DECK_LINK}/>
                            </div>
                        </DsnGrid>
                    )}
                </FadeUpTrigger>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    speed={1300} // Скорость перехода
                    effect="fade" // Эффект затухания для плавности (можно заменить на "slide")
                    fadeEffect={{ crossFade: true }} // Для эффекта fade включаем crossFade
                >
                    <SwiperSlide>
                        <img src="/assets/img/project/ipu/1.png" alt="IPU Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/img/project/ipu/2.png" alt="IPU Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/assets/img/project/ipu/3.png" alt="IPU Slide 3" />
                    </SwiperSlide>
                </Swiper>
            </BoxSliderVertical>
            {/* End Box Info With Slider */}

            {/* Start Box Info Center Content */}
            <div className="p-relative section-margin v-dark-head text-center">
                <ParallaxImage src="/assets/img/project/project1/7.jpg" overlay={4}/>
                <Container className="v-middle z-index-1">
                    <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                </Container>
            </div>
            {/* End Box Info Center Content */}

            {/* Start Box Info Move Content */}
            <div className="p-relative section-margin">
                <ParallaxImage src="/assets/img/project/project1/13.jpg" overlay={4}/>
                <MoveBox>
                    <h3> Take a seat at a table on <br/> the ground floor </h3>
                    <p className="mt-30">
                        Not quite a cafe, not quite a restaurant, we offer innovative fare for breakfast, lunch and
                        alongside specialty coffee and a wine list featuring varietals ranging from South Africa to
                        Spain...
                    </p>
                </MoveBox>
            </div>
            {/* End Box Info Move Content */}

            <FJustifiedGallery
                images={[
                    {src: "/assets/img/project/project1/6.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/8.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/9.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/10.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/11.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/12.jpg", caption: "TIME TAG WATCH"},
                ]}
                className="section-margin"
            />

            {/* <NextProject heroContent={nextData} overlay={nextData.overlay}/> */}
            <NextPage className="section-margin" text="Next Project" to="/projects/weru">
                MAJOR PROJECT - WERU
            </NextPage>
            <Footer />
        </React.Fragment>
    );
};

export default Ipu;