import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Graphic Design",
        company_name: "Ochir Press",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2022 - April 2023",
        points: [
          "Creating and maintaining visual designs for web applications and other digital platforms using tools like Photoshop, Figma, and Illustrator.",
            "Collaborating with cross-functional teams, including developers, product managers, and marketers, to produce cohesive and visually appealing products.",
            "Implementing responsive design principles to ensure that visual elements look great on various devices and screen sizes.",
            "Participating in design critiques and providing constructive feedback to other designers to enhance overall design quality.", ,
        ],
    },
    {
        title: "Motion Design",
        company_name: "Ochir Press",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2023 - Sep 2023",
        points: [
            "Creating and maintaining visual designs for web applications and other digital platforms using tools like Photoshop, Figma, and Illustrator.",
            "Collaborating with cross-functional teams, including developers, product managers, and marketers, to produce cohesive and visually appealing products.",
            "Implementing responsive design principles to ensure that visual elements look great on various devices and screen sizes.",
            "Participating in design critiques and providing constructive feedback to other designers to enhance overall design quality.",
        ],
    },
    {
        title: "Brand Design",
        company_name: "Namun",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Jan 2024",
        points: [
            "Creating and maintaining visual identity and branding assets for web applications and other digital platforms using tools like Photoshop, Figma, and Illustrator",
            "Collaborating with cross-functional teams, including marketing, product managers, and developers, to ensure brand consistency across all touchpoints.",
            "Developing responsive branding materials to ensure that visual elements are effectively represented on various devices and screen sizes.",
            "Participating in brand strategy discussions and providing constructive feedback to enhance overall brand design quality and alignment.",
        ],
    },
    {
        title: "3D Graphic Design",
        company_name: "Namun",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Creating and maintaining 3D models and visual assets for web applications, games, and other digital platforms using tools like Blender, Maya, and Cinema 4D",
            "Collaborating with cross-functional teams, including animators, developers, and product managers, to produce high-quality 3D visuals that enhance user experience.",
            "Implementing principles of 3D design and animation to ensure that models and visual elements are realistic and optimized for various devices and platforms.",
            "Participating in design critiques and providing constructive feedback to other designers to improve the overall quality of 3D designs.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sdmitri6',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/s-dmitriy-257055332/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D Cyber Fiction',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/sdmitri6/3D-cyber-fiction',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chess',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/sdmitri6/CHESS-JS-master',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/sdmitri6/Magma',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Submit Event ',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/sdmitri6/Magma',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Magma Build',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/sdmitri6',
    }
];