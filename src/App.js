import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import logo from './logo.png';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import SignIn from './components/signin.component';
import Landing from './components/LandingPage.component';
import inventoryView from './components/inventory.view';
import buy from './components/buy';
import search from './components/search';





class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route  path='/create' component={Create}/>
                        <Route  path='/edit/:id' component={Edit}/>
                        <Route  path='/index/:id' component={Index}/>
                       
                        <Route  path='/Landing' component={Landing}/>
                        <Route  path='/logout' component={Landing}/>
                        <Route  path='/buy/:id' component={buy}/>
                        {/* <Route  path='/inventoryView/:id' component={inventoryView}/> */}
                        <Route  path='/inventoryView' component={inventoryView}/>
                        <Route  path='/search/:pathParam1?' component={search}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;