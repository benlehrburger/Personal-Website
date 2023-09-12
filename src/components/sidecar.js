import { Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Home.css';
import React from 'react';


function SideCard({ project }) {

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
        <Card className="sidecard" elevation={0}>
          <div className="sidecard-image-container">
            <img src={image} alt="Card" className="sidecard-image" />
          </div>
          <CardContent className="sidecard-content-container">
            <div>
              <p className="sidecard-title">{header}</p>
            </div>
            <p className="sidecard-body">{body}</p>
            <div className="sidecard-details">
              <div>
                <span role="img" aria-label="Time">
                  🕑
                </span>{' '}
                {date}
              </div>
              <div>
                <span role="img" aria-label="Tool">
                  🔨
                </span>{' '}
                {tools}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </React.Fragment>
  );
}

export default SideCard;
