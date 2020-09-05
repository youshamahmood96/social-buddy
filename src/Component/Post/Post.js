import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css'
import Comment from '../Comment/Comment';
import Photo from '../Photo/Photo';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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

const Post = () => {
    const { Id } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
            .then(res => res.json())
            .then(data => setPhoto(data.results))
    }, [])



    const relevantComment = comment.filter(object => parseInt(object.postId) === parseInt(Id))
    let x = relevantComment.length;
    console.log(x);
    const relevantPhoto = photo.slice(1, x + 1)
    console.log(relevantPhoto);

    const classes = useStyles();

    return (

        <div className="post">
            <div className="main-post">
                <h1>{post.title}</h1>
                <small>5 minutes ago</small>
                <p>{post.body}</p>
            </div>
            <div className="comment-section">
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Paper className={classes.paper}> {
                                relevantPhoto.map(photo => <Photo photo={photo}></Photo>)
                            }</Paper>
                        </Grid>
                        <Grid item xs={10}>
                            <Paper className={classes.paper}>{
                                relevantComment.map(comment => <Comment comment={comment}></Comment>)
                            }</Paper>
                        </Grid>

                    </Grid>
                </div>


            </div>
        </div>
    );
};

export default Post;