import React from "react";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import BackToTopButton from "../components/back2top.js";
import DownToContentButton from "../components/scroll2bottom.js";
import CardComponent from "../components/card.js";
import projectObjects from "./projectspecifics.js";
import BackButton from "../components/backbutton.js";
import TypewriterComponent from "../components/typewrite.js";
import '../App.css';


const ProfessionalPage = () => {

  const projectData = projectObjects();
  const typeSpeed = 18;
  const description = "Case studies that I\'ve worked on through internships, part-time work, and volunteering.";

  const [showButton, setShowButton] = React.useState(false);
  const [typedBio, setTypedBio] = React.useState('');

  const handleScrollToContent = () => {
    const cardContainer = document.getElementById('card-container');
    if (cardContainer) {
      const cardOffsetTop = cardContainer.offsetTop;
      const headerHeight = 80;
  
      window.scrollTo({
        top: cardOffsetTop - 10,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", marginTop: "90px", marginRight: "70px", marginLeft: "70px" }}>
        <h1>Professional Work</h1>
        <div id="first_line" style={{ height: "80px", maxWidth: "400px" }}>
          <TypewriterComponent text2type={description} delay={typeSpeed} element={"#first_line"}/>
        </div>
        <div className="scroll-arrow" style={{ marginTop: "-120px", marginBottom: "60px" }}>
          <DownToContentButton id="down-to-content-icon" handleClick={handleScrollToContent} />
        </div>
      </div>
      <div>
        <BackToTopButton />
      </div>
      <div className="card-container" id="card-container">
        <CardComponent project={projectData.echopark_meta}/>
      </div>
      <div className="card-container">
        <CardComponent project={projectData.mnl_meta}/>
      </div>
      <div className="card-container">
        <CardComponent project={projectData.herrmann_meta}/>
      </div>
      <div className="card-container">
        <CardComponent project={projectData.ai4a_meta}/>
      </div>
      <div style={{ marginTop: "30px" }}>
        <BackButton />
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionalPage;
