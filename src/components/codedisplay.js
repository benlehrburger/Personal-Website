import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import "../App.css";

const CardHead = styled(Typography)`
  margin-bottom: 10px;
  margin-right: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  flex-grow: 1;
`;

const HeadTheme = createTheme({
  typography: {
    fontSize: 17.5,
  },
});

function CodeDisplay({ title, course, language, date, target }) {

  return (
    <Card className="doc-card">
      <Link to={target} target="_blank" className="doc-link">
        <CardContent className="docContent">
          <ThemeProvider theme={HeadTheme}>
            <CardHead>
              {title}
            </CardHead>
          </ThemeProvider>
          <div className="docDetails">
            <div>
              <span role="img" aria-label="Book">📚</span> {course}
            </div>
            <div>
              <span role="img" aria-label="Nut and Bolt">🔩</span> {language}
            </div>
            <div>
              <span role="img" aria-label="Time">🕑</span> {date}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default CodeDisplay;
