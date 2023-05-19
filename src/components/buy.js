import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

import logo from "../logo.png";
import './css/LandingPage.css';
import Footer from './footer';


export default  class Edit extends  Component{


    constructor(props){
        super(props);

        this.onChangepName = this.onChangepName.bind(this);
        this.onChangestock = this.onChangestock.bind(this);
        this.onChangepCode = this.onChangepCode.bind(this);
        this.onChangecost = this.onChangecost.bind(this);
        this.onChangevender = this.onChangevender.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);

      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            pName: '',
            stock: '',
            pCode:'',
            cost:'',
            vender:'',
            qty:''
        }
    }

   componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/inventory/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    pName: res.data.pName,
                    stock: res.data.stock,
                    pCode: res.data.pCode,
                    cost: res.data.cost,
                    vender: res.data.vender
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    } 

    onChangeqty(e){
        this.setState( {
            qty: e.target.value
        });
    }

    onChangepName(e){
        this.setState( {
            pName: e.target.value
        });
    }
    onChangestock(e){
        this.setState( {
            stock: e.target.value
        });
    }
    onChangepCode(e){
        this.setState( {
            pCode: e.target.value,
        });
    }
    onChangecost(e){
        this.setState( {
            cost: e.target.value
        });
    }
    onChangevender(e){
        this.setState( {
            vender: e.target.value
        });
    }
    onSubmit(e){

        let balance = this.state.stock - this.state.qty;
        this.state.stock = balance;

        if(this.state.stock < 5){
            alert('stocks running out..');
        }

        e.preventDefault();
        let id = this.state.id;
        const obj ={
            pName: this.state.pName,
            stock: this.state.stock,
            pCode: this.state.pCode,
            cost: this.state.cost,
            vender: this.state.vender,
          
        };

        console.log('Update id '+this.props.match.params.id);
        if(this.state.pName.length >= 1){
            // if(this.state.stock.length > 0){
                if(this.state.cost.length > 1){
                  
                        
                        axios.post('http://localhost:4000/inventory/update/'+this.props.match.params.id,obj)
                            .then(res => {
                                alert("Update Successfully");
                                this.setState({
                                    pName: '',
                                    stock: '',
                                    pCode:'',
                                    cost:'',
                                    vender:''
                        
                                })
                                console.log(res.data)});
                        this.props.history.push('/inventoryView');
                    
                } 
                else {
                    alert('Invalid Cost Number.. Pleace enter more than 1 digit.');
                }
            // }
            // else{
            //     alert('Invalid Stock number.. Pleace enter more than 1 digits.');
            // }
        } 
        else {
            alert('Pleace enter at more than 1 caractors');
        }
    
}


render() {
    return(
        <div class = "wrap">
                <Navbar>
                  </Navbar>
                
                  <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <ul className="navbar-nav mr-auto font-weight-bold form-control-lg text-dark ">

                            <li className="nav-item">
                                <Link to={'/'} className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className = "nav-link ">Add Inventory</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/inventoryView'} className = "nav-link">View Inventory</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/aboutUs'} className = "nav-link">Contact Us</Link>
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
                <div className='row-frm'>
                    <div className='col-frm-1'>
                        <img src = "https://www.scnsoft.com/software-development-services/creating-inventory-management-system/creating-an-inventory-system_cover-upd.svg" width = "" height = ""/>
                       
                    </div>
                    <div className="container reg-frm" style={{marginTop:10}}>
                        <h3 className="text-center">Sell Inventory</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Product Name :</label>
                                <input type ="text" required placeholder = "Please enter product  name" className="form-control" value={this.state.pName} onChange = {this.onChangepName}/>
                            </div>
                         
                            <div className="form-group">
                                <label>Quntity :</label>
                                <input type ="number" required placeholder = "Please enter stock" className="form-control" value={this.state.qty} onChange = {this.onChangeqty}/>
                            </div>
                            <div className="form-group">
                                <label style={{color:'Black',fontWeight:'bold'}}>Product code :</label>
                                <input type ="text"  className="form-control" value={this.state.pCode} onChange = {this.onChangepCode}/>
                            </div>
                            <div className="form-group">
                                <label >Cost :</label>
                                <input type ="text" required placeholder = "Please enter cost" className="form-control" value={this.state.cost} onChange = {this.onChangecost}/>
                            </div>
                          
                            <div className="form-group">
                                <label>Vender :</label>
                                <input type ="text" required placeholder = "Please enter product  name" className="form-control" value={this.state.vender} onChange = {this.onChangevender}/>
                            </div>

                            <div className="form-group">
                                <input type = "submit" value = "Sell" className="btn btn-info"/>
                            </div>
                          
                            <br/>
                         
                        </form>
                    </div>
                </div>

                <br/><br/>
                
                <div>
                     <hr className="shadow-lg card-footer"/>
                </div>
                <Footer/>
        </div>
    )
}
}