import rob1 from '../images/robot/im1.png';
import rob2 from '../images/robot/im2.png';
import rob3 from '../images/robot/im3.jpg';
import rob4 from '../images/robot/im4.png';
import rob5 from '../images/robot/im5.png';
import s1 from '../images/robot/s1.png';
import s2 from '../images/robot/s2.png';

const robot_project = {
  title: 'Self-Driving Robot',
  description: 'Working with a group of three other Dartmouth students, I helped design and program a robot that simulates a crash avoidance system.',

  sections: [
    {
      subheading: 'The Challenge',
      paragraph: [
        {
          type: 'text',
          content: 'In a course on Robot Design and Programming, my groupmates and I were tasked with creating a robot that does something novel for our final project. We were given a Husarion ROSbot (2.0) and needed to equip the robot with hardware and program software to control it. Our project was graded based on the efficiency of the program and the extent to which the robot succeeds at its task.',
        },
      ],
      image: [
        {
          src: rob1,
          caption: 'Mockup of what robot might look like in environment',
        },
        {
          src: rob2,
          caption: 'Actual robot with hardware modifications in custom arena',
        },
      ],
    },
    {
      subheading: 'The Design',
      paragraph: [
        {
          type: 'text',
          content: 'We wanted to demonstrate a complex task in a simple manner. Specifically, we wanted to emulate how self-driving cars perceive their environment and respond to cues like traffic lights. Drawing inspiration from a video game we all used to play – Bloons Tower Defense - we decided to have our robot target and destroy balloons of a particular color (green) while avoiding balloons of other colors (red). We designed a 5x5 meter arena with balloons on the side so we could have complete control over the external environment. To handle perception and image processing, we took the image read by the robot\'s RGBD camera and fed it into OpenCV, which detected and targeted specific colors. Once the robot identified a green balloon, we needed to have some way of popping it, so we attached small blades to the front of the robot (which, admittedly, was a little terrifying).',
        },
      ],
      image: [
        {
          src: s1,
          caption: 'State machine mockup',
        },
        {
          src: s2,
          caption: 'Sequential decision-making logic',
        },
      ],
    },
    {
      subheading: 'The Build',
      paragraph: [
        {
          type: 'text',
          content: 'The movements of the robot were controlled by a finite state machine, a program that we wrote to alternate between three behaviors. First, a random walk state, in which the robot explores its environment randomly until it detects a green balloon. When the robot senses a green balloon in its field of vision, it iteratively checks if the balloon is in the center of its field of vision, turns to adjust, moves forwards, and checks again. When the robot pops the green balloon, it will no longer sense a green balloon in the image frame. If the robot is near a wall or sees a red balloon, it enters a turn state, in which it rotates some number of degrees and continues with the random walk state. We spent a lot of hours getting this program right, particularly because the robot\'s LIDAR and RGBD cameras were not very accurate.',
        },
      ],
      image: [
        {
          src: rob3,
          caption: 'A late night in the lab',
        },
      ],
    },
    {
      subheading: 'The Results',
      paragraph: [
        {
          type: 'text',
          content: 'When testing the final version of our code, the robot successfully popped the initial three green balloons in the arena without popping any red balloons. Then, it successfully popped another green balloon when we added it to the arena. The robot avoided running into any walls or making erroneous movements. We ended up receiving a 98% final grade on the project. More importantly, we successfully simulated autonomous crash avoidance, a complex task that self-driving cars have to execute with greater than 99% accuracy. By synthesizing readings across RGBD and LIDAR cameras, it is possible to create an accurate internal model of a 3D environment and use that model to chart actions. Although Husarion 2.0 is a long way off from Tesla, the basic principles underlying its autonomous capabilities are the same.',
        },
      ],
      image: [
        {
          src: rob5,
          caption: 'Robot targeting green balloon',
        },
      ],
    },
  ],
  relatedPages: [
    {
      title: 'View Code on GitHub',
      link: 'https://github.com/benlehrburger/Robotics',
    },
    {
      title: 'Read the Documentation',
      link: 'https://drive.google.com/uc?id=12S8svJboE2CicOD5c43WrXWa9qmWKqpo',
    },
  ],
};

export default robot_project;