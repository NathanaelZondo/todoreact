import React, { useEffect, useState}  from "react";
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black",
    height:'75vh'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));


const messages = [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];


export default function Todo() {
  const classes = useStyles();
  const [Dta,setDta]=useState({txt:"",img:"",txt2:""})
 
return (
    <div>
      <h1 style={{"textAlign":"center"}}>To Do List</h1>
     
      <div className={classes.root}>
      <Grid container spacing={0} >
       
        <Grid item xs={4}>
          <Paper className={classes.paper}  style={{backgroundColor:"white"}}  elevation={3}>

          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>

          </Paper>
        </Grid>
        <Grid item xs={4} style={{"scroll":"overflow"}}>
          <Paper className={classes.paper}  style={{backgroundColor:"white",overflow:"scroll"}} elevation={3}>
       
     <div style ={{"height":"40px","width":"100%",  position: "absolute",
  left: "0px",
  top: "70px",
  zIndex: 1,backgroundColor:"white"}} align="center"></div>


<List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
              <ListItem button onClick={()=>{
                console.log("clix",id, primary, secondary, person)
                setDta({txt:primary,txt2:secondary,img:person})
              }}>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
                <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      <div style ={{"height":"40px","width":"100%",  position: "absolute",
  left: "0px",
  bottom: "70px",
  zIndex: 1,backgroundColor:"white"}} align="center">

<Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={()=>{
  console.log("cliki")
}}>
            <AddIcon />
          </Fab>

</div>

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}  style={{backgroundColor:"white"}} elevation={3}>
          <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
         
        </ListItemAvatar>
        <ListItemText primary={Dta.txt} secondary={Dta.txt2} />
      </ListItem>
      <Divider variant="inset" component="li" />
     
     
    </List>

          </Paper>
        </Grid>
       
      </Grid>
    </div>
    </div>
  );
}

