// src\views\Work.jsx
import React from 'react';
import {Container} from "react-bootstrap";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
// import PortfolioClassic from "../components/projects/projectsClassic";
import ProjectsClassic from "../components/projects/projectsClassic";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import {Helmet} from "react-helmet";

function Work(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>DEXSA - Development Studio </title>
            </Helmet>
            <HeaderNormalTow description="Our Work">projects</HeaderNormalTow>
            <Container>
                <ProjectsClassic col={2}
                                  colGap={50}
                                  colGapTablet={30}
                                  rowGap={50}
                                  rowGapTablet={30}
                />
            </Container>

            <NextPageContent className="section-margin"/>
            <Footer/>


        </React.Fragment>
    );
}

export default Work;