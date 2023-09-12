import { useState } from 'react';
import { styled } from '@mui/system';
import { Button, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const SlideshowContainer = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 48vh;
  margin-top: 10px;
`;

const StyledCarousel = styled(Carousel)`
  height: 95%;
`;

const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 38vh;
  margin: 0 auto;
`;

const VideoContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 41vh;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
`;

const ArrowIndicatorWrapper = styled(Box)`
  position: absolute;
  top: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  & > div {
    cursor: pointer;
  }
`;

const ArrowButton = styled(Button)`
  margin: 0 5px;
  color: ${({ active }) => (active ? 'black' : 'black')};
`;

const ArrowWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Slideshow = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  const [maxWidth, ...restImages] = images;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % restImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + restImages.length) % restImages.length);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <SlideshowContainer>
      <StyledCarousel
        selectedItem={activeIndex}
        showStatus={false}
        showThumbs={false}
        renderIndicator={() => null}
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
        onChange={(index) => {
          setActiveIndex(index);
          setAutoplay(false);
        }}
        stopOnHover={false}
      >
        {restImages.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <ImageContainer style={{ maxWidth: maxWidth }}>
                <img src={item.src} alt={item.caption} style={{ width: '100%', height: '100%' }} />
              </ImageContainer>
            ) : (
              <VideoContainer>
                <iframe
                  title={item.caption}
                  src={item.src}
                  width='100%'
                  height="100%"
                  allowFullScreen
                  onMouseEnter={handleVideoPlay}
                  onMouseLeave={handleVideoPause}
                  onClick={() => {
                    if (isPlaying) {
                      handleVideoPause();
                    } else {
                      handleVideoPlay();
                    }
                  }}
                />
              </VideoContainer>
            )}
          </div>
        ))}
      </StyledCarousel>
      <ArrowIndicatorWrapper>
        <ArrowButton onClick={handlePrev} disabled={activeIndex === 0} active={false}>
          <ArrowBack />
        </ArrowButton>
        {restImages.map((_, index) => (
          <div key={index} onClick={() => handleIndicatorClick(index)} style={{ width: '10px', height: '10px', background: activeIndex === index ? 'lightgrey' : 'grey', margin: '0 5px', borderRadius: '50%' }} />
        ))}
        <ArrowButton onClick={handleNext} disabled={activeIndex === restImages.length - 1} active={false}>
          <ArrowForward />
        </ArrowButton>
      </ArrowIndicatorWrapper>
    </SlideshowContainer>
  );
};

export default Slideshow;