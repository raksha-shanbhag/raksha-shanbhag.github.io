import './about.css'
import aboutMe from '../../img/aboutMe.PNG'
import Navbar from '../Navbar/navbar';

import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
  width: "30px",
  background: 'none',
  border: '0px'
};

const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
];

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
  nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>,
};

const AboutMe = () => {
    return (
      <div>
        <Navbar />
        <h1 className="a-title">About Me</h1>
        <div className="a"> 
          {/* <div className="a-left"> */}
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="spinner face1">
                  <FontAwesomeIcon icon={faPython} color="#DD0031" />
                </div>
                <div className="spinner face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="spinner face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="spinner face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="spinner face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="spinner face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
          </div>
          <div className="a-right">
            <h2 className="a-sub">
              It is a long established fact that a reader will be distracted by the
              readable content.
            </h2>
            <h2 className="a-desc">
              Can I wish on the stars for another day. Cause it feels like I am all on my own tonight
              and I find, myself, in pieces.
            </h2>
          </div>   
        </div>
      </div>
    );
}

export default AboutMe;

//       <div className="a-page">
{/* <div className="a-left">
<div className="a-card bg"></div>
<div className="a-card">
    <img
        src= {aboutMe}
        className="aboutPic"
        alt= "Me"
    />
</div>
</div>
<div className="a-right">
<h1 className='title'>About me</h1>
<p className='a-info'>
    I am third year student in Computer engineering
</p>
</div>   
</div> */}


        
        {/* <h1 className="a-title">About Me</h1>
        <div className="a"> */}
          {/* <div className="a-left"> */}
            {/* <div className="a-card bg"></div> */}
            {/* <div className="a-card"> */}
              {/* <div className="slide-container">
                <Slide 
                  prevArrow = {<button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>}
                  nextArrow = {<button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>}
                >
                  {slideImages.map((each, index) => (
                    <div key={index} className="each-slide">
                      <img src={each} alt="sample" />
                    </div>
                  ))}
                </Slide> */}
            {/*}  </div>
           </div> */}
          {/* </div>
          <div className="a-right">
            <h2 className="a-sub">
              It is a long established fact that a reader will be distracted by the
              readable content.
            </h2>
            <h2 className="a-desc">
              Can I wish on the stars for another day. Cause it feels like I am all on my own tonight
              and I find, myself, in pieces.
            </h2>
          </div> 
        </div> */}