import Typed from 'react-typed';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import { linkedIn, gitHub } from '../Contact/contactMe';

const baseClass = 'intro'

const resumeLink = ''

const Intro = () => {
    return (
        <div className={`${baseClass}-page`} id='intro'>
            <div className={`${baseClass}-block`} >
                <div className={`${baseClass}-title`}>Hi, my name is </div>
                <div className={`${baseClass}-name`}>Raksha Shanbhag</div>
                <div className={`${baseClass}-work`}>I'm a&nbsp;
                    <Typed
                        strings={[
                            "Computer Engineering Student",
                            "Full Stack Developer",
                            "Tech Enthusiast",
                            "Problem Solver"
                        ]}
                        typeSpeed={100}
                        backSpeed={40}
                        className={`${baseClass}-typing-text`}
                        loop
                    /> 
                </div>
                <div className={`${baseClass}-contact-me`}>
                    <h4> Contact Me !</h4>
                    <div className={`${baseClass}-icons`}>
                        <a href = {gitHub} target="_blank" rel="noreferrer">
                            <GitHubIcon className={`${baseClass}-icon ${baseClass}-gitHub`} />
                        </a>
                        <a href = {linkedIn} target="_blank" rel="noreferrer">
                            <LinkedInIcon className={`${baseClass}-icon ${baseClass}-linkedIn`}/>
                        </a>
                        <a href = {resumeLink} target="_blank" rel="noreferrer">
                            <ArticleIcon className={`${baseClass}-icon ${baseClass}-resume`}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
        
}

export default Intro;
