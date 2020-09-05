import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Interface.css';
import Placeholder from '../Placeholder/Placeholder';
import Newsfeed from '../Newsfeed/Newsfeed';
import { Link } from 'react-router-dom';
import FriendsList from '../FriendsList/FriendsList';

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

const Interface = () => {

const [newsfeed,setNewsfeed] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setNewsfeed(data))
},[])

const [friends,setFriends] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
},[])


const classes = useStyles();

    return (
      <div className="interface-container">
      
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}> <Placeholder></Placeholder> </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <h1>Posts</h1>
            
            {
                newsfeed.map(feed=><Newsfeed key={feed.id} feed={feed}></Newsfeed>)
            }
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
            <h1>Active Friends</h1>
            {
              friends.map(friends=><FriendsList key={friends.id} friends={friends}></FriendsList>)
            }
            
            </Paper>
          </Grid>
        </Grid>
      </div>


      </div>
    );
};

export default Interface;