import './App.css';
import React from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import DetailsPage from "./pages/details.js";
import echoverse_project from "./pages/echoverse.js";
import mnl_project from "./pages/mnl.js";
import agora_project from "./pages/agora.js";
import herrmann_project from "./pages/herrmann.js";
import ai4a_project from "./pages/ai4a.js";
import listen_project from "./pages/listen.js";
import robot_project from "./pages/robot.js";
import paper_project from "./pages/papers.js";
import code_project from "./pages/code.js";
import photo_project from "./pages/photos.js";
import generative_project from "./pages/generation.js";
import art_project from "./pages/artwork.js";
import PersonalPage from "./pages/personal.js";
import HomePage from './pages/home.js';
import ProfessionalPage from './pages/professional.js';
import AcademicPage from './pages/academic.js';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/:projectId" element={<DetailsPageRoute />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/professional" element={<ProfessionalPage />} />
      <Route path="/academic" element={<AcademicPage />} />
    </Routes>
  );
};

export default App;

const DetailsPageRoute = () => {
  const { projectId } = useParams();

  let project;
  if (projectId === "echoverse") {
    project = echoverse_project;
  } else if (projectId === "mnl") {
    project = mnl_project;
  } else if (projectId === "agora") {
    project = agora_project;
  } else if (projectId === "herrmann") {
    project = herrmann_project;
  } else if (projectId === "ai4a") {
    project = ai4a_project;
  } else if (projectId === "listen") {
    project = listen_project;
  } else if (projectId === "robot") {
    project = robot_project;
  } else if (projectId === "papers") {
    project = paper_project;
  } else if (projectId === "code") {
    project = code_project;
  } else if (projectId === "photo") {
    project = photo_project;
  } else if (projectId === "generative") {
    project = generative_project;
  } else if (projectId === "artwork") {
    project = art_project;
  } else {
    return <div>Project not found.</div>;
  }

  return <DetailsPage project={project} />;
};
