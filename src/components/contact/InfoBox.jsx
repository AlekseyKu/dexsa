import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Start a new project?</h3>
            <h5 className="mt-30">Contact to us</h5>
            <p className="mt-10">
                We are always happy to receive new projects and interesting ideas. 
                Contact us to discuss how we can help you bring your ideas to life. 
                We know how to make your project unique.
            </p>

            <ul className="mt-60">
                {/* <li>
                    <span className="mr-10">Call Us</span>
                    <a href="tel:+1 (800) 990 8877" target="_blank" rel="noreferrer">+47 (800) 990 8877</a>
                </li>
                <li>
                    <span className="mr-10">Whatsapp</span>
                    <a href="http://wa.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">+47 (800) 990 8877</a>
                </li> */}
                <li>
                    <span className="mr-10">Telegram</span>
                    <a href="https://telegram.im/@dexstudioapp" target="_blank" rel="noreferrer">DEXSA TG</a>
                </li>
                <li>
                    <span className="mr-10">Instgram</span>
                    <a href="https://www.instagram.com/direct/t/17848593090256113" target="_blank" rel="noreferrer">DEXSA Direct</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:dexsa.site" target="_blank" rel="noreferrer">info@dexsa.site</a>
                </li>

                {/* https://ig.me/m/username
                https://www.instagram.com/direct/t/17848593090256113 */}
                {/* <li>
                    <span className="mr-10">Address</span>
                    <a href="#0" target="_blank" rel="noreferrer">778 NE 84th St Miami, FL</a>
                </li> */}
            </ul>
        </div>

    );
}

export default InfoBox;