import React, {useEffect, useRef} from 'react'
import {dsnCN} from '../../hooks/helper'
import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {splittingItems} from "../../hooks/Spltting";


function SocialMedia({className}) {
    const ref = useRef();
    const socialData = [
        {link: "https://www.facebook.com/profile.php?id=61572373418340", icon: faFacebookF},
        {link: "https://www.instagram.com/dexstudioapp", icon: faInstagram},
        {link: "https://www.linkedin.com/company/dexstudioapp", icon: faLinkedin},
        // {link: "#0", icon: faTwitter},
    ];


    useEffect(() => {
        splittingItems(ref.current, 'li')
    });

    return (
        <ul className={dsnCN('social-one', className)} ref={ref}>
            {socialData.map((item, index) =>
                <li key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>
            )}
        </ul>

    )
}

export default SocialMedia