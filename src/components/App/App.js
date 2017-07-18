import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
  } from 'react-router-dom'
import './App.css';
import Posts from '../Posts/Posts.js'
import Comments from '../Comments/Comments.js'
import Home from '../Home/Home.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/post">Post an Idea</Link>
          </nav>
          <main>
            <Route
              path="/home"
              render={() => {
                return(
                  <Home />
                )
              }}
            />
              <Route
                path="/posts"
                render={() => {
                  return(
                    <Posts />
                  )
                }}
              />
          </main>
        </div>
      </Router>
    );
  }
}

// axios.get('url')
//     .then((response) => {
//       console.log(response)
//     })

export default App;
