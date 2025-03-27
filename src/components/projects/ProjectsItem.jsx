// src\components\projects\ProjectsItem.jsx
import React, {useEffect, useRef} from 'react'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";
import BgImage from "../header/BgImage";
import {getProjectsLink} from "../../api/projects/ProjectsData";
import {dsnCN} from "../../hooks/helper";


function ProjectsItem({portoDetails, textButton, imageOnly, className}) {

    const ref = useRef();

    useEffect(() => {

        const video = ref.current.querySelector('video');
        if (!video)
            return;

        video.pause();
        const projItem = ref.current,
            mouseEnter = () => video.play(),
            mouseLeve = () => video.pause();


        projItem.addEventListener('mouseenter', mouseEnter);
        projItem.addEventListener('mouseleave', mouseLeve);

        return () => {
            if (!video)
                return;
            projItem.removeEventListener('mouseenter', mouseEnter);
            projItem.removeEventListener('mouseleave', mouseLeve);
        }

    });// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={dsnCN('portfolio-item text-center v-dark-head', className)} ref={ref}>
            <NavLink className="btn-portfolio" to={getProjectsLink(portoDetails)}>
                <div className="item-border"/>
                <div className='inner-img'>
                    <BgImage className={"dsn-swiper-parallax-transform"} src={portoDetails.src} video={portoDetails.video}
                            alt={portoDetails.title}
                            overlay={portoDetails.overlay} height={"100%"} imageOnly={imageOnly}/>

                </div>
                <div className="info-text">
                    {portoDetails.category && <MetaPost category={portoDetails.category} separate=", "/>}

                    {portoDetails.title &&
                    <h4 className="title-block"><NavLink to={getProjectsLink(portoDetails)}>{portoDetails.title}</NavLink>
                    </h4>}

                    {/* <NavLink className="btn-portfolio" to={getProjectsLink(portoDetails)}>{textButton}</NavLink> */}
                    {textButton}
                </div>
                
            </NavLink>
        </div>
    )
}


export default React.memo(ProjectsItem);