import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">EndUser</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/endUser">EndUser</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Admin</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/admin">Admin</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">M2M</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/m2m">M2M</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;