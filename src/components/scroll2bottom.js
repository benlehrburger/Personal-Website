import React, { useState, useEffect } from 'react';
import { styled, keyframes } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

const FadingInIcon = styled(ExpandMoreIcon)`
  font-size: 80px;
  cursor: pointer;
  margin-bottom: 50px;
  margin-top: -30px;
  transition: color 0.3s ease, opacity 0.3s ease;
  color: lightgrey;
  opacity: 0;

  &.appear {
    animation: ${opacityAnimation} 0.7s ease forwards;
  }

  &:hover {
    color: #424242;
  }

  @media (max-width: 900px) {
    transform: translateX(0);
  }
`;

function DownToContentButton({ handleClick, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <>
      {isVisible && (
        <FadingInIcon
          className={isVisible ? 'appear' : ''}
          onClick={handleClick}
        />
      )}
    </>
  );
}

export default DownToContentButton;
