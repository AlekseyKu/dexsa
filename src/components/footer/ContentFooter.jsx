import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                {/* <strong>TG</strong> <span>:</span>  */}
                <a href="https://telegram.im/@dexstudioapp" target="_blank" rel="noreferrer">DEXSA Telegram</a>
            </p>
            <p className="mt-2">
                {/* <strong>INS</strong> <span>:</span>  */}
                <a href="https://www.instagram.com/dexstudioapp" target="_blank" rel="noreferrer">DEXSA Instagram</a>
            </p>
            <p className="mt-2">
                {/* <strong>EMA</strong> <span>:</span>  */}
                <a href="mailto:info@dexsa.site" target="_blank" rel="noreferrer">info@dexsa.site</a>
            </p>
        </div>
    );
}

export default ContentFooter;