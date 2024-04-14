import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shcs,
  gzly,
  dfgx,
  tripguide,
  threejs,
  net,
  blender,
  vue,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Nodejs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Vue",
    icon: vue,
  },
  {
    name: ".NET",
    icon: net,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "东方国信",
    icon: dfgx,
    iconBg: "#E6DEDD",
    date: "July 2020 - Dec 2020",
    points: [
      "熟悉并运用Hadoop基本框架和HDFS存储技术，实现大数据的存储和处理，使用Hive框架和Hive QL语法进行数据的查询和分析，为选址决策提供数据支持",
      "与后端团队合作，实现前后端数据的对接和交互，确保系统的功能正常运行",
      "利用ECharts.js实现数据可视化，为用户提供直观的选址结果展示",
      "使用Linux环境进行开发和部署，熟练运用MySQL数据库进行数据管理和存储",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "上海澄视",
    icon: shcs,
    iconBg: "#383E56",
    date: "Dec 2020 - June 2021",
    points: [
      "使用Vue.js等前端技术开发和维护TV文明实践板块的Web应用。",
      "与后端开发团队紧密配合，调用后端接口，实现前后端数据的交互和页面功能的实现",
      "负责更新项目代码到Git服务器，保证代码的版本控制和管理。",
      "负责处理TV端文明实践板块的驻地需求，实时跟踪项目进度，确保项目按时交付，并及时向上级汇报项目进展情况。",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "广州联奕",
    icon: gzly,
    iconBg: "#E6DEDD",
    date: "July 2021 - May 2022",
    points: [
      "负责数字校园PC端前端开发工作，使用React.js等前端框架进行页面和业务逻辑开发",
      "使用React.js等技术开发和维护Web应用程序,利用Webpack等工具进行前端代码的打包和性能优化",
      "与设计师、产品经理和其他开发人员紧密合作，共同制定项目需求和开发计划，确保产品的高质量和用户体验",
      "进行跨浏览器兼容性测试，确保系统在各种主流浏览器下的正常运行和一致性展示",
      "参与团队的代码审查，发现并解决前端代码中的问题和潜在风险，确保代码质量和安全性",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "广州联奕",
    icon: gzly,
    iconBg: "#E6DEDD",
    date: "May 2022 - Oct 2023",
    points: [
      "使用React.js等前端框架，负责开发和维护多个项目的前端部分，包括智能组织架构和数据上报平台、监控与控制系统等",
      "与设计师、产品经理和其他开发人员密切合作，共同制定项目需求和开发计划，确保产品的质量和功能完整性。",
      "确保项目的跨浏览器兼容性，使得页面能够在各种主流浏览器上正常运行",
      "参与团队的代码审查，发现和解决代码中的问题，保证代码质量和稳定性",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
