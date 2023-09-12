import React from 'react';
import { styled } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TypewriterComponent from "./typewrite.js";
import "../Home.css";


const FooterContainer = styled('footer')`
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ typeWrite }) => (typeWrite ? '50px' : '10px')};
`;

const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 25px;
  gap: 10px;
`;

const Icon = styled('a')`
  margin: 0 8px;
  color: black;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: lightgrey;
  }
`;

const Address = styled('p')`
  color: #8f8f8f;
  text-align: center;
  font-size: 14px;
`;

function Footer({ typeWrite }) {

  const foot = "Let's make something amazing.";
  const typeSpeed = 25;

  return (
    <FooterContainer typeWrite={typeWrite}>
      {typeWrite ? (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <div id="last_line" className="footer-text" style={{ height: "40px", textAlign: "center" }}>
            <TypewriterComponent text2type={foot} delay={typeSpeed} element={"#last_line"} />
          </div>
        </div>
      ) : null}
      <IconContainer>
        <Icon href="https://www.linkedin.com/in/benlehrburger/" target="_blank">
          <LinkedInIcon fontSize="medium" />
        </Icon>
        <Icon href="https://github.com/benlehrburger" target="_blank">
          <GitHubIcon fontSize="medium" />
        </Icon>
        <Icon href="mailto:benlehrburger@gmail.com" target="_blank">
          <EmailIcon fontSize="medium" />
        </Icon>
      </IconContainer>
      <Address>© 2023 Ben Lehrburger</Address>
    </FooterContainer>
  );
}

export default Footer;