// src\api\portfolio\PortfolioData.js
// import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
// import UnderArmour from "../../views/portfolio/UnderArmour";
// import ReStyling from "../../views/portfolio/ReStyling";
// import ToastReel from "../../views/portfolio/ToastReel";
// import WhatIfGold from "../../views/portfolio/WhatIfGold";
// import NileKabutha from "../../views/portfolio/NileKabutha";
// import SleepWalker from "../../views/portfolio/SleepWalker";
// import NovaraConic from "../../views/portfolio/NovaraConic";
// import BastianBux from "../../views/portfolio/BastianBux";
import About from "../../views/About";
import Contact from "../../views/Contact";
import Projects from "../../views/Work";

const data = [
    {
        id: 1,
        // title: "Time Tage Watch",
        // title: "Tomorrow's Technologies - Today",
        title: "TOMOROW'S TECHNOLOGY - TODAY!",
        // slug: 'time-tag-watch',
        category: ['Brand'],
        description: 'At DEXSA, we don’t just follow the future — we engineer it. Our team of top-tier developers, visionary designers, and deep tech experts delivers breakthrough digital solutions that reshape industries. From next-gen web platforms to AI-powered automation, we transform ambitious ideas into working technology — today.',
        src: '/assets/img/project/bg_01-min.png',
        srcSlider: '/assets/img/project/bg_01-min.png',
        overlay: 2,
        buttonText: "Explore Project",
        // component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Projects",
        slug: 'projects',
        category: ['Projects'],
        description: 'Innovation starts with bold visionaries. At DEXSA, we collaborate with pioneers — founders, engineers, creators — who shape the future through breakthrough technologies and meaningful impact. These are the projects that change the game.',
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
        // video: {
        //     poster: '/assets/video/main_01.mp4',
        //     // loop: true
        // },
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <Projects {...props}/>
    },
    // {
    //     id: 3,
    //     title: "Blog",
    //     slug: 'blog',
    //     src: '/assets/img/project/bg_03.png',
    //     srcSlider: '/assets/img/project/bg_03-min.png',
    //     category: ['Blog'],
    //     description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
    //     overlay: 2,
    //     buttonText: "Explore Project",
    //     component: (props) => <ReStyling {...props}/>
    // },
    {
        id: 4,
        title: "Team of Professionals",
        slug: 'about',
        src: '/assets/img/about/About.webp',
        srcSlider: '/assets/img/about/About.webp',
        category: ['About'],
        // src: 'https://theme.dsngrid.com/video/droow.mp4',
        // video: {
        //     poster: '/assets/img/project/project4/1.jpg',
        //     loop: true
        // },
        description: 'We build the digital solutions of tomorrow — today. DEXSA is a team of engineers, designers, and strategists who turn breakthrough ideas into scalable products. At the intersection of tech and creativity, we deliver next-gen web apps, AI-powered platforms, and automation tools that move industries forward.',
        overlay: 2,
        buttonText: "Read More",
        component: (props) => <About {...props}/>
    },
    {
        id: 5,
        title: "Any ideas?",
        slug: 'contact',
        src: '/assets/img/contact/Contact.webp',
        srcSlider: '/assets/img/contact/Contact.webp',
        category: ['Contact'],
        description: 'We’re always open to bold concepts and visionary projects. Let’s talk about how we can bring your ideas to life — with precision, creativity, and the tech to scale. We know how to make your product stand out.',
        overlay: 2,
        buttonText: "Contact Us",
        // component: (props) => <WhatIfGold {...props}/>
        component: (props) => <Contact {...props}/>
    },
    // {
    //     id: 6,
    //     title: "Nile - Kabutha",
    //     slug: 'nile-kabutha',
    //     category: ['Photography', "Brand"],
    //     src: '/assets/img/project/project6/1.jpg',
    //     srcSlider: '/assets/img/project/project6/2.jpg',
    //     description: 'Striking and powerful Aston Martin Vantage captivates you at the first sight.',
    //     overlay: 2,
    //     component: (props) => <NileKabutha {...props}/>
    // },
    // {
    //     id: 7,
    //     title: "Sleep Walker",
    //     slug: 'sleep-walker',
    //     category: ['Photography'],
    //     src: '/assets/img/project/project7/1.jpg',
    //     srcSlider: '/assets/img/project/project7/4.jpg',
    //     description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    //     overlay: 2,
    //     component: (props) => <SleepWalker {...props}/>
    // },
    // {
    //     id: 8,
    //     title: "Novara Conic",
    //     slug: 'novara-conic',
    //     src: '/assets/img/project/project8/1.jpg',
    //     srcSlider: '/assets/img/project/project8/4.jpg',
    //     category: ['Architecture'],
    //     description: 'Cal was first. The first public university in the great state of California. They are the pioneers.',
    //     overlay: 2,
    //     component: (props) => <NovaraConic {...props}/>
    // },
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
        return item.slug && '/' + item.slug;

    return '';
};