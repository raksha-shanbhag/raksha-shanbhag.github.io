import './contactMe.css';
import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const emailID = 'r2shanbh@uwaterloo.ca';
export const linkedIn = 'https://www.linkedin.com/in/raksha-shanbhag/';
export const gitHub = 'https://github.com/raksha-shanbhag';

export const Contact = ({page}) => {
    const FormRef = useRef(null);
    const serviceID = 'service_kog0ccf' ;
    const templateID = 'portfolio_msg_template' ;
    const userID = 'user_vEx0iaM3qBnEhSmxGYw9G';
    
    const sendEmail = (e) => {
        e.preventDefault();

        if (window.confirm("Sending a message to Raksha !") ){
            emailjs.sendForm(serviceID, templateID, FormRef.current, userID)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
            });
            document.getElementById("message").value = "";
        }    
    };
  
    return (
        <div className='main-background' id="contact">
            <div className= "ContactMe">
                <div className="outer-card">
                    <h1>Contact Me</h1>
                    <div className="container">
                        <div className="contact-info">
                            <div className="description">
                                Let's get in touch!!
                            </div>
                            <div className="contact-methods">
                                <div className = "contact-card">
                                    <EmailIcon className="contact-icon" />
                                    <div className = "method" >
                                        <div className = "method-title">
                                            Email
                                        </div>
                                        <a href ={`mailto:${emailID}`} className = "method-link"> {emailID} </a>
                                    </div>
                                </div>
                                <div className = "contact-card">
                                    <LinkedInIcon className="contact-icon" />
                                    <div className = "method" >
                                        <div className = "method-title">
                                            LinkedIn
                                        </div>
                                        <a className = "method-link" href = {linkedIn} target="_blank"> { linkedIn.replace('https://','') } </a>
                                    </div>
                                </div>
                                <div className = "contact-card">
                                    <GitHubIcon className="contact-icon" />
                                    <div className = "method" >
                                        <div className = "method-title">
                                            GitHub
                                        </div>
                                        <a className = "method-link" href = {gitHub} target="_blank"> { gitHub.replace('https://','') } </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "outer-sheet">
                            <div className = "contact-form">
                                <form ref={FormRef} onSubmit={sendEmail}>
                                    <label for="fname">Name</label>
                                    <input 
                                        type="text" 
                                        id="fname" 
                                        name="user_name" 
                                        placeholder="Your full name" 
                                    />

                                    <label for="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="user_email" 
                                        placeholder="Your email"
                                    /> 

                                    <label for="subject">Subject</label>
                                    <input 
                                        id="subject" 
                                        type="text" 
                                        name="user_subject" 
                                        placeholder="Subject"
                                    />

                                    <label for="message">Message</label>
                                    <textarea 
                                        id="message" 
                                        type="text" 
                                        name="message" 
                                        placeholder="Write something.."
                                        style = {{minHeight : "100px"}}
                                    />
                                    <button type="submit">SEND</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;