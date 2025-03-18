import React from 'react'

import './style.scss'
import TeamItem from './TeamItem';
import 'swiper/css';


import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, SwiperOptions} from "swiper";

const TeamDetails = [
    {
        src: "/assets/img/team/team_01.png",
        title: "Alexandr Guskov",
        subTitle: "CEO, Product Manager",
    },
    {
        src: "/assets/img/team/team_02.png",
        title: "Aleksei Kuchev",
        subTitle: "CTO, Main Developer",
    },
    {
        src: "/assets/img/team/team_03.png",
        title: "Daniil Tadorov",
        subTitle: "Head of Design",
    },
    {
        src: "/assets/img/team/team_04.png",
        title: "Anastasia Kucheva",
        subTitle: "CMO",
    },
    {
        src: "/assets/img/team/team_05.png",
        title: "Hang Thi Y Nhi",
        subTitle: "Project Administrator",
    }

]


const Team = ({className, desktop, mobile, tablet, ...restProps}: SwiperOptions) => {
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
            className={`dsn-team ${className || ''}`}
            {...restProps}
        >
            {TeamDetails.map((item, index) =>
                <SwiperSlide key={index}>
                    <TeamItem src={item.src} title={item.title} subTitle={item.subTitle}/>
                </SwiperSlide>
            )}
            <div className="swiper-pagination"/>
        </Swiper>
    );
}

Team.defaultProps = {
    desktop: {
        slidesPerView: 4
    },
    tablet: {
        slidesPerView: 3

    },
    mobile: {
        slidesPerView: 2
    }
}

export default Team
