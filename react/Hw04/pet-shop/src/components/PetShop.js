import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Pets } from './Lazy';
import Nav from './Navigation/Navigation';
import Pet from './Pet/Pet';

const PetShop = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pets" component={Pets} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pets/:id" component={Pet} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default PetShop;
