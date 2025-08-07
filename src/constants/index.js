const navLinks = [
  {id: "about",
    name: "About",
    link: "#about",
  },
  {id: "projects",
    name: "Projects",
    link: "#projects",
  },
  {id: "experience",
    name: "Experience",
    link: "#experience",
  },
  {id: "contact",
    name: "Contact",
    link: "#contact",
  },
];

const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/images/grid/laptop.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute size-full object-cover object-center bottom-0 mix-blend-screen bg-linear-[103.4deg,#04071d_16.66%,#0c0e23_81.61%]",
    titleClassName: "justify-start",
    img: "/images/grid/blockPlanet.webp",
    spareImg: "/images/grid/grid.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Enthusiast with a passion for design",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/images/grid/grid.svg",
    spareImg: "/images/grid/modalSkeleton.svg",
  },

  {
    id: 5,
    title: "Currently designing a SaaS CRM application",
    description: "In Progress",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/images/grid/squareCode.svg",
    spareImg: "/images/grid/grid.svg",
  },
  {
    id: 6,
    title: "Lets start a project together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// const words = [
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
// ];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];


//  const logoIconsListBento = [
//     {
//       imgPath: "/images/grid/AITools.svg",
//       name: "AI Tools",
//     },
//     {
//       imgPath: "/images/grid/adobe.svg",
//       name: "Adobe",
//     },
//     {
//       imgPath: "/images/grid/figma.svg",
//       name: "Figma",
//     },
//     {
//       imgPath: "/images/grid/webflow.svg",
//       name: "Webflow",
//     },
//     {
//       imgPath: "/images/grid/framer.svg",
//       name: "Framer",
//     },
//     {
//       imgPath: "/images/grid/blender.svg",
//       name: "Blender",
//     },


//   ];


// const logoIconsList = [
//   {
//     imgPath: "/images/logos/company-logo-1.png",
//     name: "Logo Adobe",
//   },
//   {
//     imgPath: "/images/logos/company-logo-2.png",
//     name: "Logo Shopify",
//   },
//   {
//     imgPath: "/images/logos/company-logo-3.png",
//     name: "Logo Blender",
//   },
//   {
//     imgPath: "/images/logos/company-logo-4.png",
//     name: "Logo Microsoft",
//   },
//   // COPY 2's!!! This is important for if not enough logos to fill the screen, the animation will not break.
// ];

// const abilities = [
//   {
//     imgPath: "/images/seo.png",
//     title: "Quality Focus",
//     desc: "Delivering high-quality results while maintaining attention to every detail.",
//   },
//   {
//     imgPath: "/images/chat.png",
//     title: "Reliable Communication",
//     desc: "Keeping you updated at every step to ensure transparency and clarity.",
//   },
//   {
//     imgPath: "/images/time.png",
//     title: "On-Time Delivery",
//     desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
//   },
// ];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: 1,
    review: "Dmitry brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.svg",
    logoPath: "/images/logo1.svg",
    title: "UX/UI designer",
    date: "January 2022 - September 2024",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    id: 2,
    review: "Dmitry’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.svg",
    logoPath: "/images/logo2.svg",
    title: "UX/UI designer",
    date: "June 2020 - December 2022",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    id: 3,
    review: "Dmitry’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.svg",
    logoPath: "/images/logo3.svg",
    title: "Game UI designer",
    date: "March 2014 - May 2022",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Mobile ELD application",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    // img: ["/images/mobile-left.png", "/images/mobile-right.png" ],
    iconLists: ["/images/logos/figma.svg", "/images/logos/ai.svg",],
    link: "https://www.behance.net/gallery/215005703/Burro",
    className: "bg-prod1",
  },
  {
    id: 2,
    title: "Hospitality service provider page",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/images/hospitality.webp",
    iconLists: ["/images/logos/figma.svg", "/images/logos/ai.svg",],
    link: "https://www.behance.net/gallery/228367673/Ardilla",
    className: "bg-prod2",
  },
  {
    id: 3,
    title: "SaaS product landing page",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech.",
    img: "/images/SaaS.webp",
    iconLists: ["/images/logos/figma.svg", "/images/logos/fi.svg", "/images/logos/ai.svg", "/images/logos/blender.svg",],
    link: "/ui.aiimg.com",
    className: "bg-prod1",
  },
  {
    id: 4,
    title: "EV charging application",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/images/AV.png",
    iconLists: ["/images/logos/figma.svg", "/images/logos/fi.svg", "/images/logos/ai.svg", "/images/logos/blender.svg",],
    link: "/ui.apple.com",
    className: "bg-prod2",
  },
];

// Section Testimonials | Carousel 
const testimonials = [
  {id:1,
    name: "Chelsey Dietrich",
    title: "Director of AlphaStream Technologies",
    avatar: "/images/avatar1.png",
    text: `Dmitry quickly grasped the nuances of our B2B SaaS platform and transformed complex workflows into a clean, intuitive interface. What impressed us most was how he worked alongside our developers—speaking their language, anticipating edge cases, and pushing for design consistency without sacrificing functionality. He’s a rare hybrid of creative and practical.`,
  },
  {id:2,
    name: "Patricia Lebsack",
    title: "Executive Director at BridgeForward",
    avatar: "/images/avatar1.png",
    text: `Our organization supports people with varying levels of digital literacy, and Dmitry understood that from day one. He approached our redesign with compassion, curiosity, and deep user empathy. The new experience is beautiful, but more importantly—it’s accessible and welcoming. He made something complex feel effortless.`,
  },
  {id:3,
    name: "Ian Hefeldinger",
    title: "Founder of A-Team Global",
    avatar: "/images/avatar1.png",
    text: `Dmitry didn’t just redesign our store—he redefined how customers experience our brand. He nailed the vibe, smoothed out the purchase flow, and introduced thoughtful touches that actually boosted conversion. I’ve worked with designers who make things pretty. Dmitry makes things work and sell.`,
  },
  {id:4,
    name: "Adrian Hernandez",
    title: "Product Manager at StratifyHQ",
    avatar: "/images/avatar1.png",
    text: `Whether it was a mobile app, marketing site, or experimental concept—we threw everything at Dmitry, and he delivered every time. He moves fast, asks the right questions, and always brings options to the table. He’s not just reliable—he’s one of the few designers we actually look forward to collaborating with.`,
  },
];

const approachCards = [
  {
    id: 1,
    title: "User Research & Discovery",
    icon: "",
    des: "We begin by understanding your users — their needs, goals, and pain points. Through interviews, surveys, and analytics, we gather insights that shape every design decision.",
  },
  {
    id: 2,
    title: "Wireframing & Information Architecture",
    icon: "",
    des: "Next, we craft wireframes and define the layout and flow of your product. This stage ensures that content is structured logically and user journeys are clear and intuitive.",
  },
  {
    id: 3,
    title: "Visual Design & Prototyping",
    icon: "",
    des: "With a strong foundation, we apply branding, typography, and color to create an engaging visual experience. Interactive prototypes help you see and test the product before development.",
  },
  {
    id: 4,
    title: "Usability Testing & Refinement",
    icon: "",
    des: "We test the interface with real users, identify friction points, and iterate on the design. This ensures the final product is not only beautiful but also highly usable and effective.",
  }
]




const socialMedia = [
  {id:1,
    name: "insta",
    imgPath: "/images/insta.svg",
  },
  {id:2,
    name: "twit",
    imgPath: "/images/twit.svg",
  },
  {id:3,
    name: "linkedin",
    imgPath: "/images/linkedin.svg",
  },
];

export {
  // words,
  // abilities,
  // logoIconsList,
  // counterItems,
  approachCards,
  expCards,
  expLogos,
  projects,
  testimonials,
  socialMedia,
  techStackIcons,
  techStackImgs,
  navLinks,
  gridItems,
};
