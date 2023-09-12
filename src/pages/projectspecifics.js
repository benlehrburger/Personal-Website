import echoCover from "../assets/echoverse-cover.png";
import agoraCover from "../assets/agora-cover.png";
import mnlCover from "../assets/mnl-cover.png";
import herrmannCover from "../assets/herrmann-cover.png";
import ai4aCover from "../assets/ai4a-cover.jpg";
import listenCover from "../assets/listen-cover.png";
import robotCover from "../assets/robot-cover.png";
import paperCover from "../assets/paper-cover.png";
import dartCover from "../assets/dart-cover.jpg";
import photoCover from "../assets/photo-cover.JPG";
import genCover from "../assets/gen-cover.png";
import artCover from "../assets/art-cover.jpg";


const projectObjects = (() => {
  const echopark_meta = {
    header: "EchoPark in the Metaverse",
    body: "I created one of the first car dealerships in the metaverse working with the technology consulting team at EY.",
    image: echoCover,
    date: "Jun - Aug 2022",
    tools: "Unity, C#",
    projectId: "echoverse",
  }

  const mnl_meta = {
    header: "Predicting Generosity",
    body: "I programmed a deep learning neural network to predict alumni donations to colleges and universities.",
    image: mnlCover,
    date: "Feb - Nov 2021",
    tools: "Python, PyTorch",
    projectId: "mnl",
  }
  
  const herrmann_meta = {
    header: "Herrmann Email Plugin",
    body: "I designed and created a proof-of-concept that makes recommendations for writing styles based on email recipients' thinking preferences.",
    image: herrmannCover,
    date: "Sep - Jan 2021",
    tools: "IBM Watson, JavaScript",
    projectId: "herrmann",
  }
    
  const agora_meta = {
    header: "Agora Website Prototype",
    body: "In preparation for applying to YCombinator, I built a clean website frontend that simplifies financial analyses and crowdsourcing.",
    image: agoraCover,
    date: "Sep - Nov 2020",
    tools: "Unity, C#",
    projectId: "agora",
  }
  
  const ai4a_meta = {
    header: "A.I. For Anyone",
    body: "A collection of blog posts I wrote to improve AI literacy among more than 50,000 teen readers.",
    image: ai4aCover,
    date: "Jun 2020 - Jun 2021",
    tools: "Photoshop, Microsoft Office",
    projectId: "ai4a",
  }
  
  const listen_meta = {
    header: "LISTEN Center Redesign",
    body: "I visualized a new floorplan for a food pantry looking to improve resources available to those in need in the Upper Valley.",
    image: listenCover,
    date: "Feb - Mar 2020",
    tools: "Rhinoceros 3D, Unity",
    projectId: "listen",
  }
  
  const robotics_meta = {
    header: "Self-Driving Robot",
    body: "Working with a group of three other Dartmouth students, I helped design and program a robot that simulates a crash avoidance system.",
    image: robotCover,
    date: "Nov - Dec 2021",
    tools: "Python, ROS",
    projectId: "robot",
  }
  
  const papers_meta = {
    header: "Academic Papers",
    body: "A collection of academic papers I've written across psychology, computer science, philosophy, cognitive science, and linguistics.",
    image: paperCover,
    date: "Sep 2019 - Jun 2023",
    tools: "Microsoft Office, Google Suite",
    projectId: "papers",
  }

  const code_meta = {
    header: "Academic Code",
    body: 'Repositories of code that I\'ve written for computer science courses including robotics, machine learning, and human-computer interaction.',
    image: dartCover,
    date: "Sep 2019 – Jun 2023",
    tools: "Python, Java",
    projectId: "code",
  }

  const photo_meta = {
    header: "Photography",
    body: 'Pictures on my camera roll that make me want to look again.',
    image: photoCover,
    date: "Jun 2015 – Jul 2023",
    tools: "Adobe Photoshop",
    projectId: "photo",
  }

  const generative_meta = {
    header: "Independent Study on Generative AI",
    body: "I trained a series of generative AI image and language models to empower creatives with new tools.",
    image: genCover,
    date: "Mar – Jun 2023",
    tools: "Stable Diffusion, GPT",
    projectId: "generative",
  }

  const artwork_meta = {
    header: "Artwork",
    body: "Check out some more of my work including 3D modeling with Maya, Photoshop, woodworking, pottery, and doodles.",
    image: artCover,
    date: "Sep 2019 - Jun 2023",
    tools: "Maya 3D, Adobe Photoshop",
    projectId: "artwork",
  }

  return {
    echopark_meta,
    mnl_meta,
    herrmann_meta,
    agora_meta,
    ai4a_meta,
    listen_meta,
    robotics_meta,
    papers_meta,
    code_meta,
    photo_meta,
    generative_meta,
    artwork_meta
  }
})

export default projectObjects;