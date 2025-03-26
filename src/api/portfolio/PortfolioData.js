// src\api\portfolio\PortfolioData.js
import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
// import ToastReel from "../../views/portfolio/ToastReel";
// import WhatIfGold from "../../views/portfolio/WhatIfGold";
import About from "../../views/About";
import Contact from "../../views/Contact";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
// import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        // title: "Time Tage Watch",
        // title: "Tomorrow's Technologies - Today",
        title: "TOMOROW'S TECHNOLOGY - TODAY!",
        slug: 'time-tag-watch',
        category: ['Brand'],
        description: 'At DEXSA, we don’t just follow trends—we create them. Our team of elite engineers, visionary designers, and innovators crafts cutting-edge digital solutions that redefine industries. From next-gen web development to AI-driven automation, we bring tomorrow’s technologies to life today.',
        src: '/assets/img/project/bg_01-min.png',
        srcSlider: '/assets/img/project/bg_01-min.png',
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Projects",
        slug: 'under-armour',
        category: ['Projects'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
        // video: {
        //     poster: '/assets/video/main_01.mp4',
        //     // loop: true
        // },
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <UnderArmour {...props}/>
    },
    {
        id: 3,
        title: "Bloq",
        slug: 're-styling',
        src: '/assets/img/project/bg_03.png',
        srcSlider: '/assets/img/project/bg_03-min.png',
        category: ['Bloq'],
        description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <ReStyling {...props}/>
    },
    {
        id: 4,
        title: "Team of Professionals",
        slug: 'toast-2019-reel',
        src: '/assets/img/about/About.webp',
        srcSlider: '/assets/img/about/About.webp',
        category: ['About'],
        // src: 'https://theme.dsngrid.com/video/droow.mp4',
        // video: {
        //     poster: '/assets/img/project/project4/1.jpg',
        //     loop: true
        // },
        description: 'We are creating digital solutions of the future today. DEXSA is a team of engineers, designers and strategists who turn innovations into real products. We work at the intersection of technology and creativity, creating web applications, AI solutions and digital platforms that move the industry forward.',
        overlay: 2,
        buttonText: "Read More",
        component: (props) => <About {...props}/>
    },
    {
        id: 5,
        title: "Any ideas?",
        slug: 'what-if-gold',
        src: '/assets/img/contact/Contact.webp',
        srcSlider: '/assets/img/contact/Contact.webp',
        category: ['Contact'],
        description: 'We are always happy to receive new projects and interesting ideas. Contact us to discuss how we can help you bring your ideas to life. We know how to make your project unique.',
        overlay: 2,
        buttonText: "Contact Us",
        // component: (props) => <WhatIfGold {...props}/>
        component: (props) => <Contact {...props}/>
    },
    {
        id: 6,
        title: "Nile - Kabutha",
        slug: 'nile-kabutha',
        category: ['Photography', "Brand"],
        src: '/assets/img/project/project6/1.jpg',
        srcSlider: '/assets/img/project/project6/2.jpg',
        description: 'Striking and powerful Aston Martin Vantage captivates you at the first sight.',
        overlay: 2,
        component: (props) => <NileKabutha {...props}/>
    },
    {
        id: 7,
        title: "Sleep Walker",
        slug: 'sleep-walker',
        category: ['Photography'],
        src: '/assets/img/project/project7/1.jpg',
        srcSlider: '/assets/img/project/project7/4.jpg',
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,
        component: (props) => <SleepWalker {...props}/>
    },
    {
        id: 8,
        title: "Novara Conic",
        slug: 'novara-conic',
        src: '/assets/img/project/project8/1.jpg',
        srcSlider: '/assets/img/project/project8/4.jpg',
        category: ['Architecture'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers.',
        overlay: 2,
        component: (props) => <NovaraConic {...props}/>
    },
    // {
    //     id: 9,
    //     title: "Bastian Bux",
    //     slug: 'bastian-bux',
    //     category: ['Photography'],
    //     description: 'Bastian bux is the consequence of reducing everything surrounding a dj and producer to its essential element: the music.',
    //     src: '/assets/img/project/project9/1.jpg',
    //     srcSlider: '/assets/img/project/project9/3.jpg',
    //     overlay: 2,
    //     component: (props) => <BastianBux {...props}/>
    // },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};