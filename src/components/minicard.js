import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import "../App.css";

const CardHead = styled(Typography)`
  margin-bottom: 10px;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const CardBody = styled(Typography)`
  margin-top: 7px;
  margin-right: 20px;
  padding-right: 5px;
  margin-bottom: 10px;
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
    fontSize: 12,
  },
});

function MiniCard({ title, body, img, date, target }) {

  return (
    <Card className="card">
      <Link to={target} target="_blank" className="card-link">
        <CardContent className="miniCardContent">
          <ThemeProvider theme={HeadTheme}>
            <CardHead>
              {title}
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
          </div>
        </CardContent>
        <div className="cardImage">
          <img src={img} alt="Card Image" className="cardImageContent" />
        </div>
      </Link>
    </Card>
  );
}

export default MiniCard;
