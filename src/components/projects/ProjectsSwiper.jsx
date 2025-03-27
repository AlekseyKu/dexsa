// src\components\projects\ProjectsSwiper.jsx
import React from 'react'
import './style.scss'
import 'swiper/css';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination , SwiperOptions} from "swiper";

import ProjectsItem from './ProjectsItem';
import { getProjectsData } from '../../api/projects/ProjectsData';


const ProjectsSwiper = ({desktop, mobile, tablet, ...restProps}:SwiperOptions) => {
    const dataProjects = getProjectsData();

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            {...restProps}
        >
            {
                dataProjects.map((item, index) =>
                    <SwiperSlide key={index}>
                        <ProjectsItem portoDetails={item} textButton="View Case"/>
                    </SwiperSlide>)
            }

            <div className="swiper-pagination"/>


        </Swiper>

    );
}

ProjectsSwiper.defaultProps = {
    desktop: {
        slidesPerView: 3
    },
    tablet: {
        slidesPerView: 2

    },
    mobile: {
        slidesPerView: 2
    }
}

export default ProjectsSwiper