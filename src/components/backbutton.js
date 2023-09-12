import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const BackButtonIcon = styled(ArrowCircleUpIcon)`
  position: fixed;
  bottom: 16px;
  left: calc((100% - 900px) / 2 + 5%);
  color: lightgray;
  opacity: 0.8;
  transition: color 0.3s ease, opacity 0.3s ease;
  font-size: 60px;
  z-index: 9999;

  @media (max-width: 900px) {
    left: 30px;
  }

  &:hover {
    color: #424242;
    opacity: 1;
    cursor: pointer;
  }
`;

function BackButton() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return showButton ? (
    <BackButtonIcon fontSize="large" onClick={handleBack} style={{ transform: 'rotate(-90deg)' }} />
  ) : null;
}

export default BackButton;