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
            {/* <figure class="iHolder">
                <img src={props.cover} />
                <figcaption>{props.title}</figcaption>
            </figure> */}
            <div className='project' onClick={handleOpen}>
                <h4 className='project-title'>{props.title}</h4>
                <img
                    className='image-props'
                    src = {props.cover}
                />
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
