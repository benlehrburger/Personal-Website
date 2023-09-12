import h1 from '../images/herrmann/img1.png';
import h2 from '../images/herrmann/group1.png';
import h3 from '../images/herrmann/img2.png';
import h4 from '../images/herrmann/g1.png';
import h5 from '../images/herrmann/g2.png';
import h6 from '../images/herrmann/g3.png';
import h7 from '../images/herrmann/g4.png';

const herrmann_project = {
  title: 'Herrmann Email Plugin',
  description: 'I designed and created a proof-of-concept that makes recommendations for writing styles based on email recipients\' thinking preferences.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'When I became a Project Intern with Herrmann, the company\'s CEO offered me a project that he has been eyeing for a long time. Herrmann is what I call a \"cognitive HR firm,\" which means that they provide tools and management to help companies leverage cognitive diversity. The project in question was a hypothetical tool that analyzes a written piece of text, detects what \"thinking preference\" that text favors, and makes writing recommendations based on the thinking preference of the writing\'s recipient. In short, the tool helps people cater their writing to a style favored by whoever is reading the writing. The CEO wanted me to build a proof-of-concept of the engine that powers the tool and create a UI to work alongside it.',
        },
      ],
      image: [
        {
          src: h1,
          caption: 'Herrmann Whole Brain Thinking Instrument',
        },
      ],
    },
    {
      subheading: 'The Design',
      paragraph: [
        {
          type: 'text',
          content: 'To analyze the text and make writing recommendations, I built a natural language classifier with IBM Watson. I created a dataset from internal company emails by pairing peoples\' sent emails with their known thinking preferences. I then fed this data to the natural language classifier and trained it to >75% accuracy. Most of this code is Herrmann\'s IP (although written entirely by me), but what I am allowed to expose can be seen on my GitHub.',
        },
        {
          type: 'text',
          content: 'The part of the project that I want to highlight here is the UI I created to accompany the classifier. First and foremost, I wanted the tool to be accessible. Otherwise, what good is a tool if you forget you have it? So, I designed it as a Chrome browser extension that adds a widget to your Gmail. The widget appears in the compose dialog of an email each time a user goes to write. Clicking that widget opens up the SparkPlug\'s dialog (SparkPlug is the CEO\'s name for the project). In the dialog, I wanted users to be able to analyze the thinking preferences of their email recipients, whether it be single or multiple. I created an algorithm that generates a quadrilateral mapping of thinking preferences onto four-colored quadrants (one for each thinking preference). This type of display would be easy to understand and fluently interpreted by users of Herrmann\'s cognitive management system. After presenting my mock-ups to upper management, I got the green light to build.',
        },
      ],
      image: [
        {
          src: h2,
          caption: 'SparkPlug pages rendered with JavaScript',
        },
      ],
    },
    {
      subheading: 'The Build',
      paragraph: [
        {
          type: 'text',
          content: 'I programmed the UI using primarily JavaScript, along with packages like InboxSDK and material.io. I made the design flexible to accommodate however many email recipients a user had on the email. I also implemented a framework to control page navigation, from log-in to log-out. InboxSDK allowed for seamless integration with Gmail, granting access to data in the compose dialog from a third-party widget. There are plenty of other features not worth mentioning here, but if you would like to see the code behind the UI, it\'s located on my GitHub.',
        },
      ],
      image: [
        {
          src: h3,
          caption: 'Full screen view of SparkPlug being used with Gmail',
        },
      ],
    },
    {
      subheading: 'The Results',
      paragraph: [
        {
          type: 'text',
          content: 'I had a 12-week timeline to onboard into the company, learn about the project, compile a dataset, train a classifier, build a UI, and offboard. I was able to complete everything on time that I set out to, except for hooking up the classifier to the UI. The project was still met with lots of excitement. I got the chance to present to the CEO and other C-suite members, who were impressed enough that they gave the go-ahead for turning my proof-of-concept into a full-scale build.',
        },
      ],
      image: [],
    },
  ],
  galleryImages: [
    '400px',
    {
      src: h4,
      caption: 'Full page view, login',
      type: 'image',
    },
    {
      src: h5,
      caption: 'Full page view, no email recipients',
      type: 'image',
    },
    {
      src: h6,
      caption: 'Full page view, one recipient',
      type: 'image',
    },
    {
      src: h7,
      caption: 'Full page view, multiple recipients',
      type: 'image',
    },
  ],
};

export default herrmann_project;