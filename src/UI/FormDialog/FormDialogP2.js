import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (props) => {

  return (
    <Fragment>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter your Name2</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            id="name"
            onChange={props.onChangeName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default FormDialog;