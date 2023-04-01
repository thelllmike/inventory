import  React, {Component} from 'react';
import axios from 'axios'
import TableRow from './TableRow';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

import logo from '../logo.png';
import profile from '../profile.png';
import Footer from './footer'
import './css/LandingPage.css';
import './css/profile.css';

export default  class Index extends  Component{


    constructor(props) {
        super(props);
        this.state = {student : []};
        this.state.Username = this.props.match.params.id;

        
    }

    componentDidMount() {
        // alert('Username is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/campus/'+this.props.match.params.id)
            .then(response => {
             
                this.setState({student : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
            return <TableRow obj={this.state.student}/>
    }

    render() {
        return(
                <div className='wrap'>
                    <Navbar>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="200"
                                height="120"

                            />{''}
                            <h2 className="d-xl-inline" >School of Information Technology</h2>
                        </Navbar.Brand>

                            <img src = "https://img.freepik.com/free-vector/flat-design-minimalistic-technology-twitch-banner_23-2149107142.jpg" height="100" style = {{padding :2}}/>
                            <img src = "https://img.freepik.com/free-vector/gradient-halftone-technology-twitch-banner_23-2149164513.jpg?w=360" height="100" style = {{padding :2}}/>
                            <img src = {profile} height="90" style = {{padding :10}}/>
                    </Navbar>
                    <nav className="navbar navbar-expand-lg navbar-light bg-info">
                        <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                            <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">
                               
                                <li className="nav-item">
                                    <Link to={''} className = "nav-link">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className = "nav-link">Time Tables</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className = "nav-link">Subjects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className = "nav-link">Exams</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={''} className = "nav-link">Results</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/logout'} className = "nav-link">Sign Out</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline>
                            <div class="form-group">
                                <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                                <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                            </div>
                        </Form>
                    </nav>
                    <br/>

              

                <div className='profile-top'>
                   <div className='left-details'>
                        <h3>Your Profile Details</h3>
                        <h5>You can edit or delete your profile details in here....</h5>
                        <img src = "https://www.signupgenius.com/cms/images/college/college-student-with-books.jpg"/>
                   </div>
                   <div className='right-details'>
                    {this.tabRow()}
                   </div>
                  
                    
                </div>
                <br/>
                <div className='access'>
                    <Link to={""} className="btn btn-outline-primary" style={{marginRight:10}}>Goto LMS</Link>
                    <Link to={""} className="btn btn-outline-secondary" style={{marginRight:10}}>Student Library</Link>
                    <Link to={""} className="btn btn-outline-success" style={{marginRight:10}}>Events</Link>
                    <Link to={""} className="btn btn-outline-danger" style={{marginRight:10}}>Exams</Link>
                    <Link to={""} className="btn btn-outline-dark" style={{marginRight:10}}>Result</Link>
                </div>
                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>
             </div>
        );
    }
}