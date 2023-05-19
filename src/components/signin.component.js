import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";



import './css/LandingPage.css';
import Footer from './footer'


export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            email:'',
            password:''
        }
    }
    onChangeEmail(e){
        this.setState( {
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
    
    
        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };
    
        if ((this.state.email === "admin@gmail.com") && (this.state.password === "admin123")) {
           //  const Station = "Hotel";
             this.props.history.push('/Landing/'+Email);
    
        }
        else {
            axios.post('http://localhost:4000/inventory/login',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        // alert(res.data.message)
                        // alert(Email)
                        this.props.history.push('//'+Email);
                      // this.props.history.push('/');
                    }
                    else{
                        // alert(res.data.message)
                        this.props.history.push('/login');
                    }
    
                });
        }
        
    
    }

    render() {
        return(
            <div class = "wrap">
             
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                       
                    </div>
                    <Form inline>
                                <input class="form-control input-sm mr-1"  type="text" placeholder='search here....'/>
                                <Button type="submit" className='btn btn-info btn-sm'>search</Button>
                    </Form>
                </nav>
                <br/>
                <div className="container" style={{marginTop:10, width:'30%'}}>
                <br/>  <br/>  <br/>  <br/>
                    <h3 className="text-center">Sign In</h3>
                    <br/>     
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username :</label>
                            <input type ="text" className="form-control" placeholder="Email" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign In" className="btn btn-info"/>
                        </div>
                    </form>
                </div>
                <br/><br/>
              
                <div>
                    <hr className="shadow-lg card-footer"/>
                </div>
                <br/>  <br/>  <br/>  <br/>
                <Footer/>
            </div>
        )
    }
}
