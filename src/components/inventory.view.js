import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import InventoryTableRow from './inventoryOderTableRow';
import jsPDF from "jspdf";
import 'jspdf-autotable';
import logo from "../logo.png";
import './css/LandingPage.css';
import Footer from './footer';


export default  class Inventory extends  Component{


    
    constructor(props) {
        super(props);
        this.state = {inventory : [], search:''};
        this.state.Station = this.props.match.params.id;

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e){
        this.setState( {
           search: e.target.value
        });

    }

    componentDidMount() {
        // alert('email is ' +this.props.match.params.id);
        axios.get('http://localhost:4000/inventory/getall/')
            .then(response => {
                // alert('Pass una')
                // alert('Data Tika :'+response.data)
                this.setState({inventory : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.inventory.map(function (object, i){
            return <InventoryTableRow obj = {object} key = {i}/>;
        });
        // return <OrderTableRow obj={this.state.orders}/>
    }


    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
		const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Stock Report";
        const headers = [["pName", "stock", "pCode","cost", "vender"]];
    
        const data = this.state.inventory.map(elt=> [elt.pName, elt.stock,  elt.pCode,elt.cost, elt.vender]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
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
                                    <Link to={'/aboutUs'} className = "nav-link"></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/'} className = "nav-link">logout</Link>
                                </li>

                            </ul>
                        </div>
                        <Form inline >
                        <div class="form-group">
                            <input class="form-control input-sm mr-1"  type="text" placeholder='search here....' required value={this.state.search} onChange = {this.onChangeSearch}/>
                            <Button type="submit" className='btn btn-info btn-sm'> <a href ={"/search/"+this.state.search} >Search</a></Button>
                            {/* <button type="submit" className="search"> </button> */}
                        </div>
                            
                        </Form>
                    </nav>
                    <br/> <h3 align="center">Inventory</h3>
                    <div className='row-frm'>
                      
                   
                       

                       <table className="table table-striped" style = {{marginTop :20}}>
                           <thead>
                               <tr>
                                   {/* <th>id</th> */}
                                   <th>Product Name</th>
                                   <th>Stock</th>
                                   <th>Product code</th>
                                   <th>Cost</th>
                                   <th>Vender</th>
                                  
                                   <th colSpan="3">Action</th>
                               </tr>
                           </thead>
                           <tbody>
                               {this.tabRow()}
                           </tbody>
                       </table>
                
                     
                    </div>
                    <center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>Report</button>
                    </center>

                    <br/><br/>
                    <br/>  <br/>  <br/>  <br/><br/>  <br/>  <br/>  <br/>
                    <div>
                         <hr className="shadow-lg card-footer"/>
                    </div>
                    <br/>  <br/>  <br/>  <br/>
                    <Footer/> 
            </div>
            
        )
    }
}

