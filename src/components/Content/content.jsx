import React from 'react';
import '../../App.scss';
import WorkExperience from './WorkExpList/workExpList';
import AboutMe from './About/about';
import Intro from './Intro/intro';
import Projects from './Projects/projectsList';
import Contact from './Contact/contactMe';

const Content = () => {
  return (
    <div className="content">
      <Intro />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
