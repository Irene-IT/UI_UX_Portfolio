const navLinks = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Progects",
      link: "#progects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    {
      name: "Experience",
      link: "#experience",
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
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/images/grid/blockPlanet.png",
      spareImg: "",
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


  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
      name: "Logo Adobe",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
      name: "Logo Shopify",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
      name: "Logo Blender",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
      name: "Logo Microsoft",
    },
    // COPY 2's!!! This is important for if not enough logos to fill the screen, the animation will not break.
    {
      imgPath: "/images/logos/company-logo-1.png",
      name: "Logo Adobe",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
      name: "Logo Shopify",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
      name: "Logo Blender",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
      name: "Logo Microsoft",
    },
    
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
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
      review: "Dmitry brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "UX/UI designer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review: "Dmitry’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "UX/UI designer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Game UI designer",
      date: "March 2019 - May 2020",
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
  
// Section Testimonials | Carusel 
  const testimonials = [
  {
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    avatar: "/images/avatar1.png",
    text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`,
  },
  {
    name: "Patricia Lebsack",
    title: "CEO of WebGuru",
    avatar: "/images/avatar1.png",
    text: `Collaborating with Dmitry was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`,
  },
  {
    name: "Chelsey Dietrich",
    title: "CRM Integration Specialist of A-Team Global",
    avatar: "/images/avatar1.png",
    text: `What sets Dmitry apart is not just technical skill. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dmitry's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dmitry is the ideal partner.`,
  },
];

  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    // words,
    abilities,
    logoIconsList,
    // counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    gridItems,
  };
  