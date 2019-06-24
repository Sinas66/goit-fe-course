import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Store from './store/index';
import LoginModal from './components/ModalLogin/ModalLogin';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        {/* <LoginModal /> */}
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </Provider>
  );
};

export default App;
