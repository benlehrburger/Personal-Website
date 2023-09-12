import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../Home.css';
import InsertImagesIntoText from './write.js';


function OppoParallax ({ textWithImages, imageUrls, sideCardComponents }) {

  const [data, setData] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = React.useState(false);

  const steps = sideCardComponents.map((_, index) => (index + 1) * 10);

  const onStepEnter = (e) => {
    const { data } = e;
    setData(data);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === 'up' && data === steps[0]) {
      setData(0);
    }
  };

  const onStepProgress = ({ progress }) => {
    setProgress(progress);
  };

  const handleScrollToContent = () => {
    const cardContainer = document.getElementById('scroll-pointer-back');
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
    <div>
      <div className="graphicContainer">
        <div className="graphic-left">
          <div className="poster">
            <InsertImagesIntoText text={textWithImages} imageUrls={imageUrls} />
          </div>
          {/* <div className="arrowLeft">
            <DownToContentButton handleClick={handleScrollToContent} />
          </div> */}
        </div>
        <div className="scroller">
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            onStepProgress={onStepProgress}
            offset="0.5"
          >
            {steps.map(value => {
              return (
                <Step data={value} key={value}>
                  <div className="sidecard-container-right" id="scroll-pointer-oppo">
                    {sideCardComponents[value / 10 - 1]}
                  </div>
                </Step>
              );
            })}
          </Scrollama>
        </div>
      </div>
    </div>
  );
}

export default OppoParallax;
