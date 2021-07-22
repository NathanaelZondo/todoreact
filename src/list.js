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
}));




export default function Todo() {
  const classes = useStyles();

 
return (
    <div>
      <h1 style={{"textAlign":"center"}}>To Do List</h1>
     
      <div className={classes.root}>
      <Grid container spacing={0} >
       
        <Grid item xs={4}>
          <Paper className={classes.paper}  style={{backgroundColor:"yellow"}}  elevation={3}>

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
        <Grid item xs={4} style={{"scroll":"overflow"}}>
          <Paper className={classes.paper}  style={{backgroundColor:"white",overflow:"scroll"}} elevation={3}>
       
     
      <List component="nav" className={classes.root} aria-label="mailbox folders" style={{backgroundColor:"white"}}>
  <ListItem button>
    <ListItemText primary="Inbox" />    
     <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <Divider  />
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
    <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            name="checkedI"
          />
  </ListItem>
</List>

      <div style ={{"height":"40px","width":"100%",  position: "absolute",
  left: "0px",
  bottom: "70px",
  zIndex: 1,backgroundColor:"green"}} align="center">

 
<Button color="secondary" variant="contained" style={{}}>+</Button>
</div>

          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}  style={{backgroundColor:"red"}} elevation={3}>
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

