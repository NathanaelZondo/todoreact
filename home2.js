import React from "react";
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
import Logsin from './login.js';
import Signsin from './signup.js';
import FirebaseConfig from './firebase.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




export default function Home2() {
  const classes = useStyles();

 
return (
    <div>
      <h1 style={{"textAlign":"center"}}>Welcome to MyApp</h1>
     
      <div className={classes.root}>
      <Grid container spacing={1} elevation={0}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}>
            <Signsin/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}></Paper>
        </Grid>
       
      </Grid>
    </div>
    </div>
  );
}

