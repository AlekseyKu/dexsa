import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    {
        src: "/assets/img/about/client-logo/svg/1.svg",
        title: "AUCHAN RETAIL",
        href: "https://www.auchan-retail.com/en/",
        linkText: "www.auchan-retail.com",
    },
    {
        src: "/assets/img/about/client-logo/svg/2.svg",
        title: "FPT Telecom",
        href: "https://fpt.vn/vi",
        linkText: "www.fpt.vn",
    },
    {
        src: "/assets/img/about/client-logo/svg/3.svg",
        title: "IN-CREDIBLE DIGITAL",
        href: "https://in-credible.digital/en/",
        linkText: "www.in-credible.digital",
    },
    {
        src: "/assets/img/about/client-logo/svg/4.svg",
        title: "ELEGANT CYPRUS PROPERTIES",
        href: "https://elegantcyprusproperties.com/",
        linkText: "www.elegantcyprusproperties.com",
    },
    {
        src: "/assets/img/about/client-logo/svg/5.svg",
        title: "I PARK U",
        href: "https://iparku.info/eng/",
        linkText: "www.iparku.info",
    },
    {
        src: "/assets/img/about/client-logo/svg/6.svg",
        title: "AFS",
        href: "https://afs.org/",
        linkText: "www.afs.org",
    },
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item background-section">
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
