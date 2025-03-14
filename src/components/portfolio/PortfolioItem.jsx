import React, {useEffect, useRef} from 'react'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import BgImage from "../header/BgImage";
import {getPortfolioLink} from "../../api/portfolio/PortfolioData";
import {dsnCN} from "../../hooks/helper";


function PortfolioItem({portoDetails, textButton, imageOnly, className}) {

    const ref = useRef();

    useEffect(() => {

        const video = ref.current.querySelector('video');
        if (!video)
            return;

        video.pause();
        const portItem = ref.current,
            mouseEnter = () => video.play(),
            mouseLeve = () => video.pause();


        portItem.addEventListener('mouseenter', mouseEnter);
        portItem.addEventListener('mouseleave', mouseLeve);

        return () => {
            if (!video)
                return;
            portItem.removeEventListener('mouseenter', mouseEnter);
            portItem.removeEventListener('mouseleave', mouseLeve);
        }

    });// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={dsnCN('portfolio-item text-center v-dark-head', className)} ref={ref}>
            <div className="item-border"/>
            <div className='inner-img'>
                <BgImage className={"dsn-swiper-parallax-transform"} src={portoDetails.src} video={portoDetails.video}
                         alt={portoDetails.title}
                         overlay={portoDetails.overlay} height={"100%"} imageOnly={imageOnly}/>

            </div>
            <div className="info-text">
                {portoDetails.category && <MetaPost category={portoDetails.category} separate=", "/>}

                {portoDetails.title &&
                <h4 className="title-block"><NavLink to={getPortfolioLink(portoDetails)}>{portoDetails.title}</NavLink>
                </h4>}

                <NavLink className="btn-portfolio" to={getPortfolioLink(portoDetails)}>{textButton}</NavLink>
            </div>
        </div>

    )
}


export default React.memo(PortfolioItem);