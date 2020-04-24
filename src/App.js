import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, ProductList, Details, 
  Cart, Default, Modal } from './components';

class App extends Component {
  render(){

    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
