// src\api\projects\ProjectsData.js
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
    },
];

export const getProjectsData = () => data;

export const getProjectsItem = (value, whereName = "id") => {
    return data.find(item => item[whereName] === value) || null;
};

export const getProjectBySlug = (slug) => {
    return data.find(item => item.slug === slug) || null;
};

export const getProjectsLink = (item) => {
    return item?.slug ? `/projects/${item.slug}` : '';
};