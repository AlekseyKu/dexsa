import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";

const ServicesDetails = [
    {
        title: "BRANDING & STRATEGY",
        description: `We create powerful brands that stand out. From unique identity design to positioning and communication strategies, we ensure your brand is not just present but truly memorable.`,
    },
    {
        title: "UI/UX DESIGN",
        description: `Not just beautiful—intuitive and effective. We design user experiences that engage audiences and increase conversions. Our focus is on usability, trends, and emotional design to create seamless interactions.`,
    },
    {
        title: "AI & BUSINESS AUTOMATION",
        description: `The future belongs to intelligent technologies. We develop AI chatbots, Telegram bots, voice assistants, and business process automation systems. Reduce routine tasks, boost efficiency, and optimize your workflow with smart automation.`,
    },
    {
        title: "DIGITAL PRODUCTS & WEB DEVELOPMENT",
        description: `We build cutting-edge digital solutions and powerful web applications. From Telegram bots to complex CRM systems, corporate websites to marketplaces and SaaS products, we leverage the latest technologies to make your business faster, smarter, and more efficient.`,
    },
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-tow', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow