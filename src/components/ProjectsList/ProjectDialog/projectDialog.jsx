import './projectDialog.css'

import React, {useState, useRef, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ProjectDialog = (props) => {
  const content = () => {
    return (
      <div>
        <h1>This is content of the card</h1>
      </div>
    );
  }

  return (
    <div>
      <Dialog
        open={props.open}
        scroll={'paper'}
        fullWidth = {true}
        maxWidth = {'md'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
            {props.title}
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
             
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProjectDialog
