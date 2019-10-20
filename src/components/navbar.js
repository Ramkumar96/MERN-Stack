import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <li className="navbar-brand">MERN-Stack Todo App</li>
                        <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                            Todo
                            </li>
                            <li className="navbar-item">
                            Create Todo
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar