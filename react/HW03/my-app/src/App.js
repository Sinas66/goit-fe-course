import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home/Home';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route
      path="/about/:id"
      render={props => (
        <div>
          {props.match.params.id}
          <button onClick={() => props.history.push('/')}>Home</button>
          <button onClick={() => props.history.goBack()}>Back</button>
        </div>
      )}
    />
  </Router>
);

export default App;
