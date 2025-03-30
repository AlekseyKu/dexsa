import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: '/assets/img/icons-webp/14.webp',
        title: "WORKFLOW AUTOMATION",
        description: "End-to-end automation of internal workflows and operational pipelines across departments",
    },
    {
        icon: '/assets/img/icons-webp/10.webp',
        title: "SYSTEM & API INTEGRATION",
        description: "Seamless integration of third-party APIs, cloud services, and legacy systems into a unified architecture",
    },
    {
        icon: '/assets/img/icons-webp/4.webp',
        title: "TAILORED SOFTWARE SOLUTIONS",
        description: "Development of custom enterprise tools aligned with your specific business processes and logic",
    },
    {
        icon: '/assets/img/icons-webp/19.webp',
        title: "DATA DASHBOARDS & INSIGHTS",
        description: "Real-time dashboards and data visualization for decision-making and operational transparency",
    },
    {
        icon: '/assets/img/icons-webp/20.webp',
        title: "DEVOPS & INFRASTRUCTURE AUTOMATION",
        description: "Optimization of CI/CD pipelines, infrastructure orchestration, and environment provisioning",
    },
    {
        icon: '/assets/img/icons-webp/7.webp',
        title: "PROCESS AUTOMATION FOR OPS TEAMS",
        description: "Custom automation for engineering, HR, finance, and product operations — built to scale",
    },
];


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