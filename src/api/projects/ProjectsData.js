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
        src: '/assets/img/project/bg_01-min.png',
        srcSlider: '/assets/img/project/bg_01-min.png',
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
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
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
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
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
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
    {
        id: 5,
        title: "Technical Support",
        slug: 'technical-support',
        category: ['for Business'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
    {
        id: 6,
        title: "For Investors",
        slug: 'for-investors',
        category: ['for Investors'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        src: '/assets/img/project/bg_02.png',
        srcSlider: '/assets/img/project/bg_02-min.png',
        overlay: 2,
        // buttonText: "Explore Project",
        // component: (props) => <Weru {...props} />
    },
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