import React from 'react'
import styled,{ThemeProvider} from 'styled-components'
import {darkTheme} from './utils/Themes'
import NavBar from './components/NavBar/nav'
import Hero from './components/HeroSection/hero'
import Education from './components/Education/Education'
import Skills from './components/Skill/skills'
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './components/Footer/indexs'
import Contact from './components/Contact'



 export const Body = styled.div`
   background-color: ${({ theme }) => theme.bg};
   height: 100%;
   width: 100%;
   overflow-x: hidden;
 `;

 export const Wrapper = styled.div`
   background: linear-gradient(
       38.73deg,
       rgba(204, 0, 187, 0.15) 0%,
       rgba(201, 32, 184, 0) 50%
     ),
     linear-gradient(
       141.27deg,
       rgba(0, 70, 209, 0) 50%,
       rgba(0, 70, 209, 0.15) 100%
     );
   width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
 `;

const App = () => {
 

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>

          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </ThemeProvider>
    </Router>
  );
}

export default App