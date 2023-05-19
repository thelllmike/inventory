import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Image, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import logo from '../logo.png';
import Footer from './footer'
import './css/LandingPage.css';


class LandingPage extends Component{

    render() {
        return(
            <div class = "wrap">
                    <Navbar>
                        {/* <Navbar.Brand> */}
                         
                            {/* <h2 className="d-xl-inline" >Inventory Management System</h2> */}
                        {/* </Navbar.Brand> */}
                     
                    </Navbar>

                    <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">

                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className = "nav-link ">Address Inventory</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/inventoryView'} className = "nav-link">buy inventory</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/inventoryView'} className = "nav-link">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/inventoryView'} className = "nav-link"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline >
                        <div class="form-group">
                            <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                            <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                        </div>
                            
                        </Form>
                    </nav>

                    <br/>

                <div className='slide'>
                    
                    <Carousel className="w-80">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://idmadeeasy.blog/wp-content/uploads/2018/04/inventory-1200x800.jpeg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                           
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.picpedia.org/highway-signs/images/inventory.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            {/* <h3>Our Students</h3> */}
                            <p>.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                   
                    </Carousel>
                </div>
                <br/><br/>
               
                
                <br/><br/>
                <div className='top-footer'>
                  
                </div>

                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default LandingPage;