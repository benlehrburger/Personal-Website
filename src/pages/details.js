import React from 'react';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery, Button } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import Gallery from "react-photo-gallery";
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/header.js';
import Footer from "../components/footer.js";
import BackToTopButton from "../components/back2top.js";
import BackButton from '../components/backbutton.js';
import MiniCard from '../components/minicard.js';
import DocDisplay from '../components/docdisplay.js';
import CodeDisplay from '../components/codedisplay.js';
import Slideshow from '../components/carousel.js';


const Subheader = styled(Typography)`
  font-family: 'Montserrat', monospace;
  padding-bottom: 10px;
  display: flex;
  ${({ indented }) => indented && 'padding-left: 30px;'}
`;

const Bar = styled('div')`
  position: relative;
  width: 90%;
  height: 2px;
  background-color: lightgrey;
  margin: 0 auto;
  margin-top: 70px;
`;

const Body = styled(Typography)`
  font-family: 'Quicksand';
  padding-bottom: 10px;
`;

const IndentedBody = styled(Body)`
  padding-left: 30px;
`;

const ImageContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;

const Caption = styled(Typography)`
  font-family: 'Quicksand';
  font-style: italic;
`;

const HeadTheme = createTheme({
  typography: {
    fontSize: 20,
  },
});

const BodyTheme = createTheme({
  typography: {
    fontSize: 12,
  },
});

const getButtonIcon = (title) => {
  if (title === 'View Code on GitHub') {
    return <CodeIcon />;
  } else {
    return <ArticleIcon />;
  }
};

const DetailsPage = ({ project }) => {

  useEffect(() => {
  }, [project.imageLink]);

  const [typedText, setTypedText] = useState('');
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const mobileContainer = isMobile ? window.screen.width : '1000px';
  const linksContainerHeight = isMobile ? '80px' : '50px';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const typewriter = (text, delay) => {
    let i = 0;
    const type = () => {
      const currentText = text.substring(0, i++);
      setTypedText(currentText);
      
      if (i <= text.length) {
        setTimeout(type, delay);
      }
    };

    type();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typewriter(
            project.description,
            20
          );
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const section = document.querySelector('#project_bio');
    observer.observe(section);
  }, [project.description]);

  return (
    <div className="details-container" style={{ maxWidth: mobileContainer }}>
      <Header />
      <div className="details-title">
        <h1>{project.title}</h1>
        <div id="project_bio">
          <p id="project_descrip">{typedText}</p>
        </div>
      </div>
      <BackToTopButton />
      {project.sections.map((section, index) => (
        <div className="details-body-container" key={index}>
          <ThemeProvider theme={HeadTheme}>
            <Subheader indented={section.paragraph.some((p) => p.type === 'indented')}>{section.subheading}</Subheader>
          </ThemeProvider>
          <ThemeProvider theme={BodyTheme}>
            {section.paragraph.map((paragraph, pIndex) => (
              <Body key={pIndex}>
                {paragraph.type === 'text' ? (
                  paragraph.content
                ) : paragraph.type === 'o-list' ? (
                  <ol type="1">
                    {paragraph.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ol>
                ) : paragraph.type === 'u-list' ? (
                  <ul type="1">
                    {paragraph.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : paragraph.type === 'code' ? (
                  <div>
                    <p style={{ padding: '1em 1em', background: '#e6e6e6', maxWidth: '500px' }}>{paragraph.content}</p>
                  </div>
                ) : paragraph.type === 'subhead' ? (
                  <h3 style={{ fontFamily: "Montserrat" }}>{paragraph.content}</h3>
                ) : paragraph.type === 'indented' ? (
                  <div className='column-container'>
                    <div>
                      <IndentedBody>{paragraph.content}</IndentedBody>
                    </div>
                    {paragraph.imageSrc && (
                      <div className='indented-image'>
                        <ImageContainer>
                          <img
                            src={paragraph.imageSrc}
                            alt={paragraph.imageCaption}
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <Caption>{paragraph.imageCaption}</Caption>
                        </ImageContainer>
                      </div>
                    )}
                  </div>
                ) : null}
              </Body>
            ))}
          </ThemeProvider>
          <div className="image-container">
            {section.image.length > 0 && section.image[0].type == "double" && (
              <div>
                <ImageList 
                  variant="standard" 
                  cols={isMobile ? 1 : 2}
                  gap={10}
                  sx={{ width: "100%" }}
                >
                  {section.image.slice(1).map((image, idx) => (
                    <ImageListItem key={idx}>
                      <img className='image-constrictor' src={image.src} alt={image.caption} />
                    </ImageListItem>
                  ))}
                </ImageList>
                <Typography
                  variant="subtitle2"
                  component="p"
                  sx={{
                    fontFamily: 'Source Code Pro',
                    fontSize: 11,
                    textAlign: 'center',
                  }}
                >
                  {section.image[0].caption}
                </Typography>
              </div>
            )}
            {section.image.length > 0 && section.image[0].type != "double" && (
              <ImageList 
                variant="standard" 
                cols={isMobile || section.image.length === 1 ? 1 : 2} 
                gap={10}
                sx={{ width: section.image.length === 2 ? "100%" : "auto" }}
              >
                {section.image.map((image, idx) => (
                  <ImageListItem key={idx}>
                    <img className='image-constrictor' src={image.src} alt={image.caption} />
                    <ImageListItemBar
                      title={
                        <Typography
                          variant="subtitle2"
                          component="p"
                          sx={{
                            fontFamily: 'Source Code Pro',
                            fontSize: 11,
                            textAlign: 'center',
                          }}
                        >
                          {image.caption}
                        </Typography>
                      }
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </div>
        </div>
      ))}
      {project.video && (
        <div className="video-container">
          <iframe
            src={project.video}
            width="100%"
            height="400"
            title="Project Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {project.imageLink && (
        <div>
          {project.imageLink.map((image, idx) => (
            <div className="cardContainer" id="card-container" style={{ marginLeft: "20px", marginRight: "20px" }} key={idx}>
              <MiniCard 
                title={image.title}
                body={image.body}
                img={image.img}
                date={image.date}
                target={image.target}
              />
            </div>
          ))}
        </div>
      )}
      {project.docLink && (
        <div>
          {project.docLink.map((doc, idx) => (
            <div className="cardContainer" id="card-container" key={idx}>
              <DocDisplay 
                title={doc.title}
                course={doc.course}
                date={doc.date}
                target={doc.target}
              />
            </div>
          ))}
        </div>
      )}
      {project.codeLink && (
        <div>
          {project.codeLink.map((doc, idx) => (
            <div className="cardContainer" id="card-container" key={idx}>
              <CodeDisplay 
                title={doc.title}
                course={doc.course}
                language={doc.language}
                date={doc.date}
                target={doc.target}
              />
            </div>
          ))}
        </div>
      )}
      {project.imgWtitle && (
        <div className="gallery-container" style={{ marginTop: "-50px", alignItems: "center" }}>
          {project.imgWtitle.map((sect, idx) => (
            <div key={idx} style={{ textAlign: 'center', marginTop: "30px" }}>
              <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ fontFamily: "Montserrat" }}>{sect.title}</h2>
                <p style={{ marginBottom: "50px" }}>{sect.bio}</p>
              </div>
              <Gallery photos={sect.photos} style={{ width: "100%"}} />
            </div>
          ))}
        </div>
      )}
      {project.photoAlbum && (
        <div className="gallery-container">
          <Gallery photos={project.photoAlbum} />
        </div>
      )}
      {project.reRenderedIMG && (
        <div className="gallery-container" style={{ marginTop: "-50px", alignItems: "center" }}>
          {project.reRenderedIMG.map((sect, idx) => (
            <div key={idx} style={{ textAlign: 'center', marginTop: "30px" }}>
              <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ fontFamily: "Montserrat" }}>{sect.title}</h2>
                <p style={{ marginBottom: "50px" }}>{sect.bio}</p>
              </div>
              <ImageList 
                variant="standard" 
                cols={isMobile || sect.photos.length === 1 ? 1 : sect.photos.length === 2 ? 2 : 3} 
                gap={5}
                sx={{ width: isMobile || sect.photos.length === 1 ? "100%" : "auto" }}
              >
                {sect.photos.map((image, idx) => (
                  <ImageListItem key={idx}>
                    <img className='image-constrictor' src={image.src} />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          ))}
        </div>
      )}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="gal-container">
          <ThemeProvider theme={HeadTheme}>
            <Subheader>Gallery</Subheader>
          </ThemeProvider>
          <div className="slideshow">
            <Slideshow images={project.galleryImages} />
          </div>
        </div>
      )}
      {project.relatedPages && (
        <div className="related-container">
          <ThemeProvider theme={HeadTheme}>
            <Subheader>Related Links</Subheader>
          </ThemeProvider>
          <div className="links-container">
            {project.relatedPages.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                style={{ 
                  borderColor: '#3d3d3d',
                  color: '#3d3d3d',
                  margin: '0 10px', 
                  height: linksContainerHeight,
                  fontFamily: 'Source code pro',
                  flexBasis: '55%',
                  fontSize: '12px',
                }}
                startIcon={getButtonIcon(page.title)}
              >
                {page.title}
              </Button>
            ))}
          </div>
        </div>
      )}
      <BackButton />
      <Footer typeWrite={true}/>
    </div>
  );
};

export default DetailsPage;
