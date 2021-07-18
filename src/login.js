import React, { useState } from "react";
import "./style.css";
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FirebaseConfig from './firebase.js';
import Snackbar from '@material-ui/core/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Logsin(){

  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    console.log(mail,password)
    console.log("CLicked")
   
    firebase.auth().signInWithEmailAndPassword(mail, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
     setMessage("Successful Sign In")
    console.log(user)
    handleClick()
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setMessage(error.message)
    console.log(errorCode)
    handleClick()
    // ..
  }); }

 
 


 

  return <div><h3>Sign In</h3> 
  <form onSubmit={handleSubmit}>
   <TextField  onChange={event => setMail(event.target.value)}   id="standard-basic" placeholder="Email Address" />
   <br></br>
   <TextField onChange={event => setPassword(event.target.value)} id="standard-basic" placeholder="Password" />
   <br></br> <br></br>
  <Button  variant="contained" color="primary" type="submit">Click</Button>
  </form>
  <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              Close
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
  </div>
}