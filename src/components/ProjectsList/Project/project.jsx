import './project.css'
import ProjectDialog from '../ProjectDialog/projectDialog'

import React, { useState }  from 'react'

const Project = (props) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    
    return (
        <>
            <div className='project' onClick={handleOpen}>
                <h4 className='project-title'>{props.title}</h4>
                <div className='image-postioning'>
                    <img
                        className='image-props'
                        src = {props.cover}
                    />
                </div>
            </div>
            <ProjectDialog 
                open = {open}
                title = {props.title}
                handleClose =  {handleClose}            
            />
        </>
    );
}

export default Project
