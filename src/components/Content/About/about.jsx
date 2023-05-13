import SkillsBox from './rotating-skills';
import Backend from '../../../img/about/backend.PNG';

const baseClass = 'about';

const AboutMe = () => {
    return (
      <div className={`${baseClass}-page`} id='about'>
        <h1 className={`${baseClass}-title`}>About Me</h1>
        <div className={`${baseClass}-container`}> 
          <div className={`${baseClass}-intro`}>
            <div className={`${baseClass}-pic`}><img src={Backend} /></div>
            <div className={`${baseClass}-description`}>
              <p>If I had to describe myself in three words, it would be - <b>Passionate Problem Solver</b>. I love to solve problems that seek effective yet creative solutions through technology. 
              Having worked at <b>Ford, PointClickCare and TS Analytics</b> previously, I have 3 years of internship experience in the tech industry, with fields ranging from <b>Healthcare, Software Architecture for Vehicles to FinTech. </b>
              At <b>TS analytics</b>, I worked in a startup environment with a team of 4 engineers. I spearheaded many feature development initiatives for the core product, as well as, historical data imports for Banks. In every internship, I've consistently been awarded 
              <b> "Outstanding"</b>, for work term evaluations, due to my ability to take pick up new technologies in a short span, and deliver work of great quality. </p>
            </div>
          </div>
          <div className={`${baseClass}-skills`}>
            <div className={`${baseClass}-list`}> 
              <h3>Education</h3>
              <p>University of Waterloo</p>
              <h3>Skills</h3> 
              <ul>
                <li>Languages: C/C++, C#, Java, Python, JavaScript, TypeScript, Kotlin, HTML, CSS, Bash scripting</li>
                <li>Frontend Frameworks: ReactJS, Redux, Bootstrap, jQuery, OfficeJS</li>
                <li>Backend Frameworks: .NET, Express, NodeJS, Spring Boot, Flask</li>
                <li>Databases: MySQL, MongoDB, Transact SQL, MS Access</li>
                <li>Tools: Jira, Git, SSMS, Docker, Dbt Cloud, Metabase, Cypress, Jest, Postman, Jenkins, Sonar Cloud, Heroku, VS Code</li>
              </ul>
            </div>
            <div className={`${baseClass}-box`}><SkillsBox /></div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;