import React from "react";
import "./style.css";
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
import FirebaseConfig from './firebase.js';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

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




export default function Todo() {
  const classes = useStyles();

 
return (
    <div>
      <h1 style={{"textAlign":"center"}}>To Do List</h1>
     
      <div className={classes.root}>
      <Grid container spacing={1} >
       
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"yellow"}}  elevation={3}>

          <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"blue"}} elevation={3}>
          <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0} style={{backgroundColor:"red"}} elevation={3}>
          <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />

          </Paper>
        </Grid>
       
      </Grid>
    </div>
    </div>
  );
}

