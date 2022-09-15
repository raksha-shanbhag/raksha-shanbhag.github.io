import './project.css'
import ProjectDialog from '../ProjectDialog/projectDialog'

import React, { useState }  from 'react'

const Project = () => {
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
                card
            </div>
            <ProjectDialog 
                open = {open}
                title = "Project Card"
                handleClose =  {handleClose}            
            />
        </>
    );
}

export default Project
