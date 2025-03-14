import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/1.png',
        title: "DIGITAL PRODUCTS",
        description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
        icon: 'assets/img/services/2.png',
        title: "UI-UX DESIGN",
        description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
    {
        icon: 'assets/img/services/3.png',
        title: "WEB DEVELOPMENT",
        description: "Web design encompasses many different skills and disciplines in the production of all web.",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne