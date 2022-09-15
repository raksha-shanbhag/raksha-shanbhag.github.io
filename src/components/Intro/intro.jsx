import './intro.css';
import Navbar from '../Navbar/navbar';
import Profile from '../../img/profile_pic.PNG';
import { Button, scopedCssBaselineClasses } from '@mui/material';
import jsPDF from 'jspdf';
import Resume from '../../img/Resume.png';
import Typed from 'react-typed';
import { gitHub, linkedIn, resumeLink } from '../../assets/constants';
import Me from "../../img/aboutMe.PNG";
import {ImGithub} from 'react-icons/im';
import {GrLinkedin} from 'react-icons/gr';

const Intro = ({page}) => {
    const openResume = () => {
        window.open(resumeLink, "_blank", "");
    }

    return (
        <div>
            <div className = "moving">
                <div className= "moving-bg"></div>
            </div>
            <Navbar page = {page} />
            <div className="i-page">
                    <div className="i-left">
                        <div className="ice">
                            <h2 style={{color: "grey"}}>Hey, I'm </h2>
                            <h1>Raksha Shanbhag</h1>
                        </div>
                        <div className="job">
                            <Typed
                                strings={[
                                    "3rd Year Computer Engineering Student at Uwaterloo",
                                    "Full Stack Developer",
                                    "Tech Enthusiast",
                                    "Problem Solver"
                                ]}
                                typeSpeed={120}
                                backSpeed={80}
                                loop
                            />
                        </div>
                        <div className="intro-icons">
                            <a href = {gitHub} target="_blank"><ImGithub className="icon" /> </a>
                            <a href = {linkedIn} target="_blank"><GrLinkedin className="icon" /> </a>
                            <a href = {resumeLink} target="_blank"> 
                                <div className="resume-icon">Resume </div>
                            </a>
                        </div>
                    </div>
                    <div className="i-right">
                        <div className="i-card">
                            <img
                                src={Me}
                                alt="Me"
                                className="i-img"
                            />
                        </div>
                    </div>
                </div>
        </div>

    );

    // return (
    //     <>
    //         <Navbar />
    //         <div className="i-page">
    //             <div className="i-left">
    //                 <div className="ice">
    //                     <h2>Hi, My name is</h2>
    //                     <h1>Raksha Shanbhag</h1>
    //                 </div>
    //                 <div className="job">
    //                     <h3>Computer Engineering Student</h3>
    //                 </div>
    //                 <div className='buttons'> 
    //                     <Button 
    //                         onClick= {downloadResume} 
    //                         variant='outlined' 
    //                         sx= {{
    //                             color: 'white',
    //                             flex:1,
    //                             backgroundColor: 'rgb(59, 59, 59)',
    //                             borderColor: 'black',
    //                             textTransform: 'capitalize',
    //                             margin: '10px',
    //                             width: '10px',
    //                             fontWeight: 600
    //                         }} 
    //                     > 
    //                         Resume
    //                     </Button>
    //                     <Button 
    //                         variant = 'outlined'
    //                         sx= {{
    //                             color: 'white',
    //                             flex:1,
    //                             backgroundColor: '#0072b1',
    //                             borderColor: 'black',
    //                             textTransform: 'capitalize',
    //                             margin: '10px',
    //                             width: '10px',
    //                             fontWeight: 600,
    //                             '&:hover' : {
    //                                 borderColor: 'black',
    //                                 backgroundColor: '#0087d1',
    //                             },
    //                         }}
    //                         onClick = {() => redirectURL(linkedIn)}
    //                     >
    //                         LinkedIn
    //                         {/* <a href={() => }> LinkedIn </a> */}
    //                     </Button>
    //                     <Button 
    //                         variant = 'outlined' 
    //                         sx= {{
    //                             color: 'black',
    //                             flex:1,
    //                             backgroundColor: 'white',
    //                             borderColor: 'black',
    //                             textTransform: 'capitalize',
    //                             margin: '10px',
    //                             width: '10px',
    //                             fontWeight: 600,
    //                             '&:hover' : {
    //                                 borderColor: 'black',
    //                                 backgroundColor: '#1B1A1A',
    //                                 color: 'white'
    //                             },
    //                         }}
    //                     >
    //                         <a href={gitHub}> GitHub </a>
    //                     </Button>
    //                 </div>
    //             </div>
    //             <div className="rightPane">
    //                 <div className="i-right">
    //                     <div className="pic-bg"> </div>
    //                     {/* <img
    //                         className="picture"
    //                         src={Profile}
    //                         alt="Raksha Shanbhag"
    //                     /> */}
    //                 </div>
                    
    //                 {/* <div className="down">
    //                     <button class="button bounce">
    //                         Try Now
    //                     </button>
    //                 </div> */}
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Intro;