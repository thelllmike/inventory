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





class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route  path='/create' component={Create}/>
                        <Route  path='/edit/:id' component={Edit}/>
                        <Route  path='/index/:id' component={Index}/>
                       
                        <Route  path='/signIn' component={SignIn}/>
                        <Route  path='/logout' component={Landing}/>
                        {/* <Route  path='/inventoryView/:id' component={inventoryView}/> */}
                        <Route  path='/inventoryView' component={inventoryView}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;