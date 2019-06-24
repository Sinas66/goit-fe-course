import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import StorePage from './pages/StorePage/StorePage';
import Header from './components/Header/Header';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/store" component={StorePage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
