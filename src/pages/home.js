import '../Home.css';
import React from "react";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import BackToTopButton from "../components/back2top.js";
import DownToContentButton from "../components/scroll2bottom.js";
import TypewriterComponent from "../components/typewrite.js";
import SideCard from "../components/sidecar.js";
import projectObjects from "./projectspecifics.js";
import Parallax from '../components/parallax.js';
import OppoParallax from "../components/oppoparallax.js";


function HomePage ({}) {

  const [showButton, setShowButton] = React.useState(false);
  const [typedBio, setTypedBio] = React.useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const text2type = "I'm on a mission to understand the human condition. Studying people helps me create things that people enjoy, whether it's homemade holiday cards, user experience designs, or artificial intelligence tools. Scroll to explore some highlighted case studies I've worked on.";
  const bio1 = "I'm on a mission to understand the human condition.";
  const bio2 = "Studying people helps me create things that people enjoy, whether it's homemade holiday cards, user experience designs, or artificial intelligence tools.";
  const bio3 = "Scroll to learn more about my work and why it\'s important to me.";
  const typeSpeed = 18;
  const startDelay1 = 1400;
  const startDelay2 = 5100;
  const arrowDelay = 7000;

  const sect1text = "In my work, I\'ve built a metaverse prototype with <IMAGE>, trained a predictive deep learning model for <IMAGE>, designed a cognitive productivity tool at <IMAGE>, and taught <IMAGE> readers about AI ethics.";

  const sect1imgs = [
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/ey-logo.png",
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/mnl-logo.png",
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/herrmann-logo.png",
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/ai4a-logo.png",
  ];

  const sect2text = "I graduated from <IMAGE> in 2️⃣0️⃣2️⃣3️⃣ with a major in Cognitive Science. My research revolved around the question: “How can understanding the 🧠 help us build better 🛠️?”";

  const sect2imgs = [
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/dart-logo.png",
  ]

  const sect3text = "Right now I\’m working at <IMAGE> as a Product Manager, taking on personal projects to integrate human cognition with 🤖 / 🖥️, seeking out good 🍝, and playing 🎸.";

  const sect3imgs = [
    "https://raw.githubusercontent.com/benlehrburger/images/main/logos/stubhub-logo.png",
  ]

  const projectData = projectObjects();

  const sect1cards = [
    <SideCard project={projectData.echopark_meta}/>,
    <SideCard project={projectData.mnl_meta}/>,
    <SideCard project={projectData.herrmann_meta}/>,
    <SideCard project={projectData.ai4a_meta} />
  ]

  const sect2cards = [
    <SideCard project={projectData.generative_meta}/>,
    <SideCard project={projectData.papers_meta}/>,
    <SideCard project={projectData.robotics_meta}/>,
    <SideCard project={projectData.code_meta}/>
  ]

  const sect3cards = [
    <SideCard project={projectData.photo_meta}/>,
    <SideCard project={projectData.agora_meta}/>,
    <SideCard project={projectData.listen_meta}/>,
    <SideCard project={projectData.artwork_meta}/>
  ]

  const handleScrollToContent = () => {
    const cardContainer = document.getElementById('scroll-pointer');
    if (cardContainer) {
      const cardOffsetTop = cardContainer.offsetTop;
      const headerHeight = 80;
  
      window.scrollTo({
        top: cardOffsetTop - 10,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY < window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="intro-container">
        <div className="home-bio">
          <div id="first_line">
            <TypewriterComponent text2type={bio1} delay={typeSpeed} element={"#first_line"}/>
          </div>
          <div id="second_line">
            <TypewriterComponent text2type={bio2} delay={typeSpeed} startDelay={startDelay1} element={"#second_line"}/>
          </div>
          <div id="third_line">
            <TypewriterComponent text2type={bio3} delay={typeSpeed} startDelay={startDelay2} element={"#third_line"}/>
          </div>
        </div>
        <div className="scroll-arrow">
          <DownToContentButton handleClick={handleScrollToContent} delay={arrowDelay}/>
        </div>
      </div>
      <div>
        <BackToTopButton />
      </div>
      <div style={{ marginTop: "-100px" }}>
        <Parallax 
          textWithImages={sect2text} 
          imageUrls={sect2imgs}
          sideCardComponents={sect2cards}
        />
      </div>
      <div style={{ marginTop: "-150px" }}>
        <OppoParallax 
          textWithImages={sect1text} 
          imageUrls={sect1imgs}
          sideCardComponents={sect1cards}
        />
      </div>
      <div style={{ marginTop: "-150px" }}>
        <Parallax 
          textWithImages={sect3text} 
          imageUrls={sect3imgs}
          sideCardComponents={sect3cards}
        />
      </div>
      <Footer typeWrite={true} />
    </div>
  );
};

export default HomePage;