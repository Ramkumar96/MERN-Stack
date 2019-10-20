import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import CreateTodo from "./components/create-todo.component";
//import EditTodo from "./components/edit-todo.component";
//import TodosList from "./components/todos-list.component";
import ClientProfile from "./components/client-profile";
import AdminProfile from "./components/admin/adminProfile";


class App extends Component {
  render() {
    
    return (

      <div>
  
          <Router>
          <li className="navbar-item">
                  <Link to="/clientprofile/:id" >Client Profile</Link>
          </li>
          <li className="navbar-item">
                  <Link to="/adminprofile" >Admin profile</Link>
          </li>


          {/* For each route which needs to be added to the application a new <Route> element is added. */}
          {/* <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} /> */}
          <Route path="/adminprofile" component={AdminProfile}/>
          <Route path="/clientprofile/:id" component={ClientProfile} />
        
           </Router>

         </div>
         
    );
  }
}
export default App;