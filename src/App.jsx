//import Navbar from './components/Navbar/navbar';
import React, {useState} from 'react';
import Intro from './components/Intro/intro';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AboutMe from './components/AboutMe/about';
import ProjectsList from './components/ProjectsList/projectsList';
import ContactMe from './components/ContactMe/contactMe';
import WorkExpList from './components/WorkExpList/workExpList';

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <HashRouter>
        <div style ={{'paddingTop': '3.1rem'}} />
        <Routes>
          <Route exact path='/' element={<Intro page={currentPage} />}></Route>
          <Route exact path='/about' element={<AboutMe page={currentPage} />}></Route>
          <Route exact path='/work' element={<WorkExpList page={currentPage} />}></Route>
          <Route exact path='/projects' element={<ProjectsList page={currentPage} />}></Route>
          <Route exact path='/contact' element={<ContactMe page={currentPage} />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

// const left = () => {
  // const myRef = useRef(null)

  // const introRef = useRef(null);

  // const aboutRef = document.getElementById("aboutMe")
  // const scrollToAbout = () => {} //aboutRef.current? aboutRef.current.scrollIntoView({ behavior: "smooth" }) : console.log('aboutNull');

  // const projRef = document.getElementById("projectsList")
  // const scrollToProj = () => {} //projRef?? projRef.current.scrollIntoView({ behavior: "smooth" });

  // const workExpRef = document.getElementById("workExp")
  // const scrollToWorkExp = () => {} //workExpRef?? workExpRef.current.scrollIntoView({ behavior: "smooth" });

  // const contactRef = document.getElementById("contactMe")
  // const scrollToContact = () => {}//contactRef ?? contactRef.current.scrollIntoView({ behavior: "smooth" });
//   return (
//     <>
//            <div style={{ background:"#1B1A1A" , position:"fixed"}}>
//           {/* <AppBar style={{ background:"#1B1A1A" }} position="fixed">
//             <Toolbar disableGutters style={{ minHeight: '55px' }}> */}
//             <Button 
//                 //onClick = {scrollToRef(introRef)}
//                 sx= {{
//                   color: 'white',
//                   fontWeight: 100,
//                   fontSize: '20px',
//                   textTransform: 'capitalize',
//                   fontFamily: 'Arial, Helvetica, sans-serif'
//                 }} 
//               >
//                 <img
//                   style = {{height : '20px', width: '20px'}}
//                   src={Home}
//                 />
//               </Button>
//               {/* <Item img title = { Home } handleClick={scrollToRef(introRef)} /> */}
//               <div style={{right: 0}}>
//                 <Item title = "About" handleClick={scrollToAbout} />
//                 <Item title = "Work Experience" handleClick={scrollToWorkExp}/>
//                 <Item title = "Projects" handleClick={scrollToProj}/>
//                 <Item title = "Contact me" handleClick={scrollToContact}/>
//               </div>  
//             {/* </Toolbar>
//           </AppBar> */}
//         </div>
    
//     </>
//   );
// }

export default App;
