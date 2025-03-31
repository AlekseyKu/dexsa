// src\components\testimonial\TestimonialTow.jsx
import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { SwiperOptions } from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import { dsnCN } from "../../hooks/helper";

const TestimonialDetails = [
    // {
    //     authorName: "Brandon Barbello",
    //     label: "Vivalnk Inc | Google IO",
    //     description: `Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner.`
    // },
    // {
    //     authorName: "Helen Ginsberg",
    //     label: "CEO of Treasure",
    //     description: `Dave & his team at Blacksmith Agency were incredible partners at a critical time for our company. Day in & day out, they were there for us every step of the way delivering results for us & our high profile corporate partner.`
    // },
    {
        authorName: "Andrey Chernov",
        label: "Auchan Retail | CTO",
        description: `DEXSA instantly understood our complex infrastructure and delivered a secure, scalable data platform. Their precise engineering and strategic approach helped us optimize operations and achieve visible results fast.`,
        avatar: "/assets/img/avatar/AC.jfif",
    },
    {
        authorName: "Tu Vu Anh",
        label: "FPT Telecom Vietnam | CTO",
        description: `DEXSA became our trusted partner in process automation. Instead of just coding, they crafted a full architecture that increased transparency and efficiency. Their adaptability and commitment made a real difference.`,
        avatar: "/assets/img/avatar/TVA.jfif",
    },
    {
        authorName: "Dmitry Sarbaev",
        label: "In-Credible Printing Technologies | CEO",
        description: `DEXSA took on challenges that others wouldn’t. From infrastructure to custom tools, they executed with accuracy and deep expertise. These are not just developers — they are long-term tech partners.`,
        avatar: "/assets/img/avatar/DS.jfif",
    },
    {
        authorName: "Thekla Papouri",
        label: "Elegant Cyprus Properties | CEO",
        description: `The DEXSA team created a clean, intuitive solution that became essential for managing our real estate projects. They quickly aligned with our goals and built features that truly simplify our daily work.`,
        avatar: "/assets/img/avatar/TP.jfif",
    }
]

function TestimonialTow({ className, ...restProps }: SwiperOptions) {
    return (
        <section className={dsnCN('dsn-testimonial testimonial-tow', className)}>
            <div className="testimonial-inner">
                <div className='content-box'>
                    <Swiper slidesPerView={1} {...restProps}>
                        {TestimonialDetails.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TestimonialItem
                                        authorName={item.authorName}
                                        label={item.label}
                                        description={item.description}
                                        avatar={item.avatar}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        <ControlNav />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default TestimonialTow;
