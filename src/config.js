module.exports = {
  siteTitle: 'Deepali Raikar | Software Devloper',
  siteDescription:
    'Deepali Raikar is a software engineer based in New York who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Deepali Raikar, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://DeepaliRaikar.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Deepali Raikar',
  location: 'Boston, MA',
  email: 'deepaliraikar5@gmail.com',
  github: 'https://github.com/deepali221',
  twitterHandle: '@deepaliraikar5',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/deepali221',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/deepali-raikar/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/DeepRai',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/deepali_raikarr/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/deepaliraikar5',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
