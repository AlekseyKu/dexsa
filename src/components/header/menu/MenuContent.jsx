import React from 'react';
import {dsnCN} from "../../../hooks/helper";

import './style.scss';

function MenuContent({className}) {
    const socialData = [
        {link: "https://www.facebook.com/profile.php?id=61572373418340", name: "Facebook."},
        {link: "https://www.instagram.com/dexstudioapp", name: "Instagram."},
        {link: "https://www.linkedin.com/company/dexstudioapp", name: "Linkedin."},
        // {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Company</h5>
                    <p>
                        DexStudioApp Inc <br /> US Delewer State <br/> 8 The Green, Dover, DE 19901
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Development Studio</h5>
                    <p>
                        Vietnam, Danang City <br/> 368/28 Ngũ Hành Sơn
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        {/* <a className="link-hover" href="tel:+00 (2)012 3321" data-hover-text="+00 (2)012 3321">
                            +47 777 7755
                        </a> */}
                        <a href="https://telegram.im/@dexstudioapp" target="_blank" rel="noreferrer">dexstudioapp</a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:info@dexsa.sitem"
                           data-hover-text="info@dexsa.site">info@dexsa.site</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>

            <div className="footer-text mt-30">
                <p>DEXSA 2025 © All Rights Reserved</p>
            </div>

        </div>

    );
}

export default MenuContent;