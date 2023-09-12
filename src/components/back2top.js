import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackToTopIcon = styled(ArrowCircleUpIcon)`
  position: fixed;
  bottom: 16px;
  right: calc((100% - 900px) / 2 + 5%);
  color: lightgray;
  opacity: 0.8;
  transition: color 0.3s ease, opacity 0.3s ease;
  font-size: 60px;
  z-index: 9999;

  @media (max-width: 900px) {
    right: 30px;
  }

  &:hover {
    color: #424242;
    opacity: 1;
    cursor: pointer;
  }
`;

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showButton ? (
    <BackToTopIcon fontSize="large" onClick={handleBackToTop} />
  ) : null;
}

export default BackToTopButton;