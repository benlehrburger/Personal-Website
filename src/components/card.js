import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../Home.css';
import React from 'react';

const CardHead = styled(Typography)`
  padding-top: 8px;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const CardBody = styled(Typography)`
  padding-top: 7px;
  margin-right: 20px;
  font-family: 'Quicksand';
  component="p";
`;

const HeadTheme = createTheme({
  typography: {
    fontSize: 17,
  },
});

const BodyTheme = createTheme({
  typography: {
    fontSize: 13,
  },
});

function CardComponent({ project }) {
  
  const header = project.header;
  const body = project.body;
  const image = project.image;
  const tools = project.tools;
  const date = project.date;
  const projectId = project.projectId;

  const detailsPageLink = `/${projectId}`;

  return (
    <React.Fragment>
      <Link to={detailsPageLink} className="link-no-underline">
        <Card className="card">
          <CardContent className="cardContent">
            <ThemeProvider theme={HeadTheme}>
              <CardHead>
                {header}
              </CardHead>
            </ThemeProvider>
            <ThemeProvider theme={BodyTheme}>
              <CardBody>
                {body}
              </CardBody>
            </ThemeProvider>
            <div className="projectDetails">
              <div className="projectTime">
                <span role="img" aria-label="Time">🕑</span> {date}
              </div>
              <div className="projectTools">
                <span role="img" aria-label="Tool">🔨</span> {tools}
              </div>
            </div>
          </CardContent>
          <div className="cardImage">
            <img src={image} alt="Card" className="cardImageContent" />
          </div>
        </Card>
      </Link>
    </React.Fragment>
  );
}

export default CardComponent;
