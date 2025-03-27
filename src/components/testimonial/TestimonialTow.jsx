import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {SwiperOptions} from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import {dsnCN} from "../../hooks/helper";

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
        description: `DEXSA demonstrated an exceptional understanding of our internal systems and rapidly delivered a reliable data consolidation platform. They met every deadline and built a scalable, detail-oriented solution. Their engineering precision and strategic mindset made a measurable impact across our operations.`
    },
    {
        authorName: "Tu Vu Anh",
        label: "FPT Telecom Vietnam | CTO",
        description: `DEXSA became a key partner in automating several critical business processes. Their team didn’t just deliver code — they designed a complete architecture that increased efficiency and transparency across departments. Their adaptability and deep engagement were essential to the success of this transformation.`
    },
    {
        authorName: "Dmitry Sarbaev",
        label: "In-Credible Printing Technologies | CEO",
        description: `DEXSA tackled challenges most vendors wouldn’t touch. From assembling our server infrastructure to building a highly specific project management application, they delivered with precision and domain expertise. They’re more than developers — they’re true technology partners.`
    },
    {
        authorName: "Thekla Papouri",
        label: "Elegant Cyprus Properties | CEO",
        description: `The DEXSA team built a clean, intuitive web application that has become our core tool for managing real estate projects. They quickly grasped the nuances of our business and delivered functionality that actually simplifies daily workflows. Reliable, professional, and deeply committed.`
    }
    
]


function TestimonialTow({className, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial testimonial-tow', className)}>
            <div className="testimonial-inner">
                <div className='content-box'>
                    <Swiper slidesPerView={1} {...restProps} >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            authorName={item.authorName} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>
                                );
                            }
                        )}
                        <ControlNav/>

                    </Swiper>
                </div>
            </div>
        </section>

    )
}


export default TestimonialTow;