module.exports = {
  siteTitle: 'Hi! I\'m Abhik!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Abhik Mitra',
  twitterUsername: 'complancoder',
  githubUsername: 'abhikmitra',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Senior Software Engineering Manager with almost 9 years of hands-on experience building performance-critical complex software applications.
   <br/> I am currently working with Microsoft as an engineering leader. My experience spans 
   <strong> backend, frontend, and mobile </strong>. As a part of Microsoft, I had the privilege to work across iconic products like 
   Bing Ads, Microsoft Outlook, and Microsoft Teams. 
   <br/>I have worked on Android, built large scale React apps and <strong> currently building Web-scale Distributed Systems</strong>`,
  skills: [
    {
      name: 'Distributed Systems',
      level: 70
    },
    {
      name: 'Frontend Engineering',
      level: 70
    },
    {
      name: 'Android Development',
      level: 60
    },
    {
      name: 'Engineering Management',
      level: 55
    }
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      company: "Microsoft",
      begin: {
        month: 'may',
        year: '2018'
      },
      duration: null,
      occupation: "Senior Software Engineering Manager",
      description: " I lead the data layer effort of Microsoft Teams , which is based on Cosmos DB and Azure and has elaborate measures to handle data in a scalable and compliant way"
  
    },  {
      company: "Microsoft",
      begin: {
        month: 'Jan',
        year: '2015'
      },
      duration: '3 yr , 5 months',
      occupation: "Software Engineer",
      description: "I have worked on products like Microsoft Outlook for Android and Microsoft Teams. I have shipped features in Android which is being used by millions of people. I built a React platform in Microsoft Teams web app that powers some of the features that you see in Microsoft Teams."
  
    }, {
      company: "Flipkart",
      begin: {
        month: 'Jul',
        year: '2013'
      },
      duration: '1 yr, 6 months',
      occupation: "Software Engineer",
      description: "Built the Seller Platform which was the marketplace section of Flipkart. Tools of the trade were Node Js, Angular JS , Rabbit MQ , etc"
    }, {
      company: "Infosys",
      begin: {
        month: 'Aug',
        year: '2011'
      },
      duration: '1 yr, 10 months',
      occupation: "Systems Engineer",
      description: "I used to work at Infosys Labs building an Indoor mapping System using wifi triangulation.Worked on building the indoor maps feature and mobile tracker in Android."
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV temsplate",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/complancoder",
    linkedin: "https://www.linkedin.com/in/iamabhik/",
    github: "https://github.com/abhikmitra",
    email: "abhikprince@gmail.com"
  },
  siteUrl: 'https://abhikmitra.github.io',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-164581916-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/Blog',
    }
  ]
}