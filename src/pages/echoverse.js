import echo1 from '../images/echoverse/body/img1.jpg';
import echo2 from '../images/echoverse/body/img2.png';
import echo3 from '../images/echoverse/body/img3.png';
import echo4 from '../images/echoverse/body/img4.png';
import echo5 from '../images/echoverse/body/img5.png';
import echo6 from '../images/echoverse/body/img6.png';
import echo7 from '../images/echoverse/gallery/gal1.png';
import echo8 from '../images/echoverse/gallery/gal3.jpg';
import echo9 from '../images/echoverse/gallery/gal4.png';
import echo10 from '../images/echoverse/gallery/gal7.png';
import echo11 from '../images/echoverse/gallery/gal8.png';
import echo12 from '../images/echoverse/gallery/gal9.png';
import echo13 from '../images/echoverse/gallery/gal10.png';

const echoverse_project = {
  title: 'EchoPark in the Metaverse',
  description: 'I created one of the first car dealerships in the metaverse working with the technology consulting team at EY.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'Auto retailer EchoPark wanted to maintain its competitive edge in the online market. That meant staying ahead of emerging trends like the movement of online retail from a 2-D experience to 3-D immersion in the metaverse. EchoPark approached our Intelligent Automation technology consulting team at EY with two main questions: (1) does it make sense for us to expand our business into the metaverse and (2) if yes, what would our presence look like? The team assigned me to singlehandedly run this project on a five-week timeline.',
        },
      ],
      image: [
        {
          src: echo1,
          caption: 'Actual EchoPark Automotive dealership in Charlotte, NC',
        },
        {
          src: echo2,
          caption: 'EchoPark dealership in the metaverse',
        },
      ],
    },
    {
      subheading: 'The Solution',
      paragraph: [
        {
          type: 'text',
          content: 'First, I had to figure out what the metaverse means for the future of retail. I set up meetings with metaverse experts and identified comparable retail strategies that other companies have adopted to expand into the metaverse. I learned that although the metaverse is not yet most peoples\' first stop for shopping, big brands like Nike, Adidas, Louis Vuitton, Ferrari, and many others are pursuing promotional retail in the metaverse and are laying the foundations for full-scale e-commerce platforms. The global metaverse market size is expected to grow at a compound annual growth rate of 39.4% – 47.2% between now and 2030, signaling that as virtual reality and 3-D digital marketplaces become more democratized, people are going to prioritize virtual ease over in-person experience. If EchoPark could get a foothold in the metaverse now, they would have a huge competitive edge by the end of the decade.',
        },
      ],
      image: [],
    },
    {
      subheading: 'The Design',
      paragraph: [
        {
          type: 'text',
          content: 'Next, I needed to frame the business case: what sort of commerce would EchoPark conduct in the metaverse? After weighing different options like a virtual help center and a test driving course, it became clear that a virtual dealership would be the best use case of the metaverse for EchoPark. The real advantage of the metaverse is its ability to transcend space. I mean this in two different ways. One, we can interact with objects – in this case, cars – in 3-D while only looking at a 2-D screen. Two, even if a car model exists only in EchoPark Baltimore and the customer is in San Francisco, the user can jump on EchoPark\'s metaverse platform from their couch or from the San Francisco EchoPark dealership and interact with the car as if they were in Baltimore. So, I needed to build a model of a 3-D dealership that allows users to efficiently interact with digital 3-D vehicles and have those vehicles reflect EchoPark\'s global inventory. All that, plus maintaining other features of EchoPark\'s online experience like e-commerce and search capabilities.',
        },
      ],
      image: [
        {
          src: echo3,
          caption: 'Browse portal before search',
        },
        {
          src: echo4,
          caption: 'Browse portal after search',
        },
      ],
    },
    {
      subheading: 'The Build',
      paragraph: [
        {
          type: 'text',
          content: 'I was ready to begin building a proof-of-concept. I researched different 3-D modeling platforms and settled on Unity because of its ability to easily accommodate first-person exploration. I took a week to teach myself the program and its scripting language C#, neither of which I had worked with before. I then had four weeks to build the model. I began by thinking through how users will want to interact with the platform – specifically, what sort of contextual information they will come to the dealership with and what will require further signification, explanation, etc. I retained as much of the real-life EchoPark as possible to maximize contextual knowledge, modeling the building after a real showroom. I designed a side-by-side search and compare tool to leverage the metaverse\'s space-transcending nature, in which users can browse all cars in EchoPark\'s inventory and select 3-D models to explore and assess simultaneously. I carried over features of the website like their check-out pipeline and made the design as lifelike as possible to accentuate the immersive experience. I also left room for EchoPark virtual agents to inhabit the space and help customers in a full-scale model.',
        },
      ],
      image: [
        {
          src: echo5,
          caption: 'Transaction portal with e-checkout capability',
        },
        {
          src: echo6,
          caption: 'Immersive view of the transaction portal',
        },
      ],
    },
    {
      subheading: 'The Results',
      paragraph: [
        {
          type: 'text',
          content: 'The results of the project can be seen below. There is a complete demo below along with a gallery filled with still frames of different aspects of the model. You can view the basic C# scripts I wrote on my GitHub. I presented a live demo to EY\'s global metaverse team and they were impressed enough that they contracted my team for another metaverse project on the spot. Before my five weeks were up, I documented the project and left it with my team to make the final touches and present it to our clients at EchoPark.',
        },
      ],
      image: [],
    },
  ],
  relatedPages: [
    {
      title: 'View Code on GitHub',
      link: 'https://github.com/benlehrburger/Unity',
    },
    {
      title: 'Read the Documentation',
      link: 'https://drive.google.com/uc?id=1I064ighu-qBCPmgSYl23Psc9rnwVBVsl',
    },
  ],
  galleryImages: [
    '600px',
    {
      src: echo7,
      caption: 'Bird\'s eye view of the Echoverse',
      type: 'image',
    },
    {
      src: echo2,
      caption: 'Front view of the main showroom',
      type: 'image',
    },
    {
      src: echo8,
      caption: 'Interior of the main showroom',
      type: 'image',
    },
    {
      src: echo9,
      caption: 'Interior of the main showroom',
      type: 'image',
    },
    {
      src: echo3,
      caption: 'Side-by-side comparison tool, pre-search',
      type: 'image',
    },
    {
      src: echo4,
      caption: 'Side-by-side comparison tool, post-search',
      type: 'image',
    },
    {
      src: echo10,
      caption: 'Side-by-side comparison tool search page',
      type: 'image',
    },
    {
      src: echo11,
      caption: 'Side-by-side comparison tool search results',
      type: 'image',
    },
    {
      src: echo12,
      caption: 'Portal to the conference room',
      type: 'image',
    },
    {
      src: echo13,
      caption: 'Conference room',
      type: 'image',
    },
    {
      src: echo5,
      caption: 'Transaction portal',
      type: 'image',
    },
    {
      src: echo6,
      caption: 'Transaction portal landing page',
      type: 'image',
    },
  ],
};

export default echoverse_project;