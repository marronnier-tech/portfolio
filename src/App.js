// import logo from './logo.svg˚
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Title from './components/Title';
import Works from './components/Works';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Title />
        <Container className="content">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/works" exact component={Works} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
