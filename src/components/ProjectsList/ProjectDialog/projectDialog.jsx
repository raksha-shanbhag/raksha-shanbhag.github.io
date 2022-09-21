import './projectDialog.css'

import React, {useState, useRef, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ProjectBulletPoints } from '../projectsArray.js';

const ProjectDialog = (props) => {
  const ProjectPoints = ProjectBulletPoints[props.title];

  const ProjectPts = (
    ProjectPoints.map((project, index) => {
      return(<li key={index} className="point">{project.one}</li>);
    })
  )

  const card = (
    <div className='projectExp'>
      <div className='project-desc'>
        <div className='tech-stack'>
          <h2>Tech Stack</h2>
            <h4>{ProjectPoints[0].stack}</h4>
          </div>
          <ul className='text-wrap'>
            {ProjectPts}
          </ul>
      </div>
    </div>
  )

  return (
    <div>
      <Dialog
        open={props.open}
        scroll={'paper'}
        fullWidth = {true}
        maxWidth = {'sm'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
            <h1>{props.title}</h1>
        </DialogTitle>
        <DialogContent dividers={true}>
          {card }
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProjectDialog
