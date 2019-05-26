import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Store from './store';
import Nav from './pages/Nav';
import Todo from './pages/ToDo/Todo';
import './App.module.css';
import Slider from './pages/Slider/Slider';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/slider" component={Slider} />
    </Router>
  </Provider>
);

export default App;
