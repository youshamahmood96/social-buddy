import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Interface from './Component/Interface/Interface';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Component/Post/Post';
import NotFound from './Component/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
      <Switch>
      <Route path = '/home'>
        <Interface></Interface>
      </Route>
        <Route path='/posts/:Id' >
          <Post></Post>
        </Route>
        <Route exact path= '/'>
          <Interface></Interface>
        </Route>
        <Route path ='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>


    </div>


  );




}

export default App;
