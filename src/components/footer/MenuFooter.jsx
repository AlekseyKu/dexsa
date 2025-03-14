import React from 'react';
import NavLink from "../button/NavLink";
import {dsnCN} from "../../hooks/helper";


function MenuFooter({className, ...restProps}) {
    const paginate = [
        {link: "/portfolio", title: "Portfolio"},
        {link: "/about", title: "Abut"},
        {link: "/blog-details", title: "News"},
        {link: "/contact", title: "Contact"}
    ];
    return (
        <ul className={dsnCN('col-menu', className)} {...restProps}>
            {
                paginate.map(
                    (item, i) =>
                        <li key={i}><NavLink to={item.link}>{item.title}</NavLink></li>
                )
            }
        </ul>
    );
}

export default MenuFooter;