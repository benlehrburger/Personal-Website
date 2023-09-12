import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import '../Home.css';
import InsertImagesIntoText from './write.js';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Parallax ({ textWithImages, imageUrls, sideCardComponents }) {

  const [data, setData] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = React.useState(false);

  const steps = sideCardComponents.map((_, index) => (index + 1) * 10);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    const cardContainer = document.getElementById('scroll-pointer-oppo');
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
                  <div className="sidecard-container">
                    {sideCardComponents[value / 10 - 1]}
                  </div>
                </Step>
              );
            })}
          </Scrollama>
        </div>
        <div className="graphic" id="scroll-pointer">
          <div className="poster">
            <InsertImagesIntoText text={textWithImages} imageUrls={imageUrls} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
