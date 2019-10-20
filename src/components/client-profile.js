import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import {Tabs,Tab} from 'react-bootstrap';
import "./client-profile.css";

//import { Link } from 'react-router-dom';

export default class ClientProfile extends Component {

    render(){

        return(
           <div className="body">
               <div className="container ">
                   <div className="row">
                       <div className="col-md-12 col-sm-12 col-xs-12 image-section">
                            <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg" alt="cover"/>
                       </div>
                   </div>

                    {/* second row container */}
                   <div className="row">
                       {/* profile photo coloumn */}
                        <div className="col-lg col-md-3 col-sm-0 text-center profile-blue">
                            <img src="//placehold.it/200" className="profile img-fluid img-circle d-block" alt="avatar"/>        
                        </div>
                        {/* profile details coloumn */}
                        <div className="col-lg-6 col-md-6 col-sm-12 profile-blue middle-container">
                                <div className="row">
                                    <div className="col-md-8 col-sm-6 col-xs-6">
                                        <h3>Saroj Seram</h3>
                                        <h5>Professional nurse</h5>
                                    </div> 
                                </div>
                                <div className="row">

                                    {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                        <Tab eventKey="home" title="Profile Details" className="tabpad">
                                            XXXXXXXXX
                                        </Tab>
                                        <Tab eventKey="profile" title="Personnel Details">
                                        YYYYYYYYYYYY
                                        </Tab>
                                    </Tabs> */}





                                     <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">Nurse Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#buzz" role="tab" data-toggle="tab"> Personnel details</a>
                                        </li>                                                
                                    </ul>
                                </div>

                            {/* tabs */}
                                             
                                   



                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-0 profile-blue right-container">
                            <div className="row">
                                <a href="/Edit" className="btn btn-outline-primary btn-block " >Edit Profile</a>
                            </div>   
                            <div className="text-center container">
                                <h1 className="rating-num">
                                    4.0
                                </h1>
                            </div>
                            <div className="text-center container">
                                <div className="rating">
                                    <span className="glyphicon glyphicon-star"> d</span>
                                    <span className="glyphicon glyphicon-star">d</span>
                                    <span className="glyphicon glyphicon-star">d</span>
                                    <span className="glyphicon glyphicon-star">d</span>
                                    <span className="glyphicon glyphicon-star-empty">d</span>
                                </div>
                            </div> 
                            <div className="row">
                                <a href="/search" className="btn btn-info btn-block" >Search Nurse</a>
                            </div>  
                        </div>
                   </div>

               </div>
               
           </div>
        );
    }
}