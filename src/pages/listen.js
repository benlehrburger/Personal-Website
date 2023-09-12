import l1 from '../images/listen/m1.png';
import l2 from '../images/listen/m2.png';
import l3 from '../images/listen/m3.png';
import l4 from '../images/listen/m4.png';
import l5 from '../images/listen/m5.png';
import g1 from '../images/listen/g1.png';
import g2 from '../images/listen/g2.png';
import g3 from '../images/listen/g3.png';
import g5 from '../images/listen/g5.jpg';
import g6 from '../images/listen/g6.jpg';
import g7 from '../images/listen/g7.png';

const listen_project = {
  title: 'LISTEN Center Redesign',
  description: 'I devised and visualized a new floorplan for a food pantry looking to maximize their space and improve resources available to those in need in the Upper Valley.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'The LISTEN Center provides resources to need in the Upper Valley. In early 2020, they asked each member of my architecture class to redesign the layout and aesthetic of their food pantry within a $1M budget. They requested a warm, welcoming environment for both food pantry customers and also LISTEN Center staff. Further, they wanted the space to offer additional resources like desktop computers, community bulletin boards, and built-in libraries. It became my mission to provide the LISTEN Center with a design worth pursuing.',
        },
      ],
      image: [
        {
          src: l1,
          caption: 'Wireframe floorplan',
        },
        {
          src: l2,
          caption: 'Rendered floorplan',
        },
      ],
    },
    {
      subheading: 'The Design',
      paragraph: [
        {
          type: 'text',
          content: 'I first considered all the resources that I wanted to include in the space. The food pantry itself demanded a welcome/help desk, shelving, fridges and freezers, a food washing station, and a place to keep shopping carts. The staff also wanted a full kitchen and a demo area where they could show patrons new ways to use the foods they had in stock. Further, I decided to include a conference room for staff, a resource room for patrons, and a bathroom. I then partitioned the floorplan into different spaces, allowing myself to be guided by existing walls and support beams to minimize any need for demolition. I tried to control the flow of traffic within the space by creating aisles and turns that carry patrons in a common direction. With a wireframe blueprint done, I chose a color scheme of warm blue for comfort and bright orange for airiness and excitement.',
        },
      ],
      image: [
        {
          src: l3,
          caption: 'Perspective view of floorplan design rendered using Rhino 3D',
        },
      ],
    },
    {
      subheading: 'The Build',
      paragraph: [
        {
          type: 'text',
          content: 'I built a 3D model of the space using Rhinoceros 3D (to scale). I adopted a few pre-fabbed models from online 3D warehouses, but 90% of the model\'s components were created by me. It was my first time using Rhino in a full-scale build, so the project took about 15 hours to bring to life. I first built the components and then applied textures to common objects to make them feel cohesive. About halfway through the project, the LISTEN Center staff came to our studio to give some brief feedback on everyone\'s models. They asked that I add more shelving, so I developed some additional shelving solutions. Once my rendering was done, I uploaded the model to Unity so that we could explore it in virtual reality.',
        },
      ],
      image: [
        {
          src: l4,
          caption: 'First-person view of main entrance',
        },
        {
          src: l5,
          caption: 'First-person view from inside the kitchen',
        },
      ],
    },
    {
      subheading: 'The Results',
      paragraph: [
        {
          type: 'text',
          content: 'Some further images of the model are below. We welcomed our clients from the LISTEN Center in to interact with our models in virtual reality. When they put on the Oculus headset, they were able to move throughout the space as first-person characters. Although they did not say which floorplan and design they would like to use in their final renovation, I like to think it was mine.',
        },
      ],
      image: [],
    },
  ],
  galleryImages: [
    '450px',
    {
      src: g1,
      caption: 'Perspective view',
      type: 'image',
    },
    {
      src: g2,
      caption: 'Kitchen and office',
      type: 'image',
    },
    {
      src: g3,
      caption: 'Resource center',
      type: 'image',
    },
    {
      src: g5,
      caption: 'Reception area, demo station, and produce section',
      type: 'image',
    },
    {
      src: g6,
      caption: 'Conference room, office, surplus storage, and food washing station',
      type: 'image',
    },
    {
      src: g7,
      caption: 'Main entrance',
      type: 'image',
    },
  ],
};

export default listen_project;