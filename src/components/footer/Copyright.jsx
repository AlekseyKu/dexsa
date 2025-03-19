import React from 'react';
import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>DEXSA {new Date().getFullYear()} © All Rights Reserved</p>
                <div className="copyright-text over-hidden">
                    {/* <a href="0#" target="_blank">
                        DSN Grid
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default Copyright;