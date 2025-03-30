// src\components\header\menu\DroowMenu.jsx
import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";


const menuContent = [
    {
        name: "Home", to: "/"
    },
    {
        name: "Projects",
        dropdownMenu: [
            {
                name: "Major Projects",
                dropdownMenu: [
                    {name: "I Promise You", to: "/projects/ipu"},
                    {name: "We Remember You", to: "/projects/weru"},
                ]
            }, 
            {
                name: "For Business",
                dropdownMenu: [
                    {name: "Process Automation", to: '/projects/process-automation'},
                    {name: "Web Development", to: '/projects/web-development'},
                    {name: "Technical Support", to: '/projects/it-support'},
                ]
            },
            {
                name: "For Investors", to: '/projects/for-investors',
            },
        ]
    },
    // {
    //     name: "Blog",
    //     dropdownMenu: [
    //         {
    //             name: "Works 01 - 05",
    //             dropdownMenu: [
    //                 {name: "Time Tag Watch", to: "/portfolio/time-tag-watch"},
    //                 {name: "Under Armour", to: '/portfolio/under-armour'},
    //                 {name: "Re Styling", to: '/portfolio/re-styling'},
    //                 {name: "Toast 2019 Reel", to: '/portfolio/toast-2019-reel'},
    //                 {name: "What If Gold", to: '/portfolio/what-if-gold'},
    //             ]
    //         }, {
    //             name: "Works 05 - 09",
    //             dropdownMenu: [
    //                 {name: "Nile - Kabutha", to: "/portfolio/nile-kabutha"},
    //                 {name: "Sleep Walker", to: '/portfolio/sleep-walker'},
    //                 {name: "Novara Conic", to: '/portfolio/novara-conic'},
    //                 {name: "Bastian Bux", to: '/portfolio/bastian-bux'},

    //             ]
    //         },
    //     ]
    // },
    {name: "About", to: "/about"},
    {name: "Contact", to: "/contact"},
    // {
    //     name: "Home",
    //     dropdownMenu: [
    //         {name: "Main Demo", to: "/"},
    //         {name: "One Page 2", to: "/demo-2"},
    //         {name: "One Page 3", to: "/demo-3"},
    //     ]
    // },
    // {
    //     name: "Portfolio",
    //     dropdownMenu: [
    //         {
    //             name: "Sliders",
    //             dropdownMenu: [
    //                 {name: "Full Screen", to: "/slider"},
    //                 {name: "Padding Screen", to: "/slider-2"},
    //                 {name: "Half Screen", to: "/slider-3"}
    //             ]
    //         }, {
    //             name: "Grids",
    //             dropdownMenu: [
    //                 {name: "Grid 2 Columns", to: "/portfolio"},
    //                 {name: "Grid 3 Columns", to: "/portfolio-2"},
    //             ]
    //         },

    //     ]
    // },
    // {
    //     name: "Works",
    //     dropdownMenu: [
    //         {
    //             name: "Works 01 - 05",
    //             dropdownMenu: [
    //                 {name: "Time Tag Watch", to: "/portfolio/time-tag-watch"},
    //                 {name: "Under Armour", to: '/portfolio/under-armour'},
    //                 {name: "Re Styling", to: '/portfolio/re-styling'},
    //                 {name: "Toast 2019 Reel", to: '/portfolio/toast-2019-reel'},
    //                 {name: "What If Gold", to: '/portfolio/what-if-gold'},
    //             ]
    //         }, {
    //             name: "Works 05 - 09",
    //             dropdownMenu: [
    //                 {name: "Nile - Kabutha", to: "/portfolio/nile-kabutha"},
    //                 {name: "Sleep Walker", to: '/portfolio/sleep-walker'},
    //                 {name: "Novara Conic", to: '/portfolio/novara-conic'},
    //                 {name: "Bastian Bux", to: '/portfolio/bastian-bux'},

    //             ]
    //         },
    //     ]
    // },
];

const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="250px" height="auto"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;