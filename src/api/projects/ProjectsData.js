// src\api\projects\ProjectsData.js
import Ipu from "../../views/projects/ipu";
import Weru from "../../views/projects/weru";

const data = [
    {
        id: 1,
        title: "I PROMISE YOU",
        slug: 'ipu',
        category: ['Major Projects'],
        description: 'At DEXSA, we don’t just follow trends—we create them. Our team of elite engineers, visionary designers, and innovators crafts cutting-edge digital solutions that redefine industries. From next-gen web development to AI-driven automation, we bring tomorrow’s technologies to life today.',
        src: '/assets/img/project/ipu.webp',
        srcSlider: '/assets/img/project/ipu.webp',
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <Ipu {...props} />
    },
    {
        id: 2,
        title: "WE REMEMBER YOU",
        slug: 'weru',
        category: ['Major Projects'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/weru.webp',
        srcSlider: '/assets/img/project/weru.webp',
        overlay: 2,
        buttonText: "Explore Project",
        component: (props) => <Weru {...props} />
    },
    {
        id: 3,
        title: "Process Automation",
        slug: 'process-automation',
        category: ['for Business'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bizProcessAutomation.webp',
        srcSlider: '/assets/img/project/bizProcessAutomation.webp',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
    {
        id: 4,
        title: "Web Development",
        slug: 'web-development',
        category: ['for Business'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bizWebDevelopment.webp',
        srcSlider: '/assets/img/project/bizWebDevelopment.webp',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
    {
        id: 5,
        title: "IT Support",
        slug: 'it-support',
        category: ['for Business'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bizItSupport.webp',
        srcSlider: '/assets/img/project/bizItSupport.webp',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
    // {
    //     id: 6,
    //     title: "INVEST IN INNOVATION",
    //     slug: 'for-investors',
    //     category: ['for Investors'],
    //     description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
    //     src: '/assets/img/project/bizForInvestors.webp',
    //     srcSlider: '/assets/img/project/bizForInvestors.webp',
    //     overlay: 2,
    //     // buttonText: "Explore Project",
    //     // component: (props) => <Weru {...props} />
    // },
];

export const getProjectsData = () => data;

export const getProjectsItem = (value, whereName = "id") => {
    return data.find(item => item[whereName] === value) || null;
};

export const getProjectsBySlug = (slug) => {
    return data.find(item => item.slug === slug) || null;
};

// export const getProjectsLink = (item) => {
//     return item?.slug ? `/projects/${item.slug}` : '';
// };

export const getProjectsLink = (item) => {
    if (item)
        return item.slug && '/projects/' + item.slug;

    return '';
};