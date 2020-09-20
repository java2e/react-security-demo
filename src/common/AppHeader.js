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
                            
                                    <ul>
                                        <li>
                                            <a href="/" onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul> 
                                    <ul>
                                        <li>
                                            <NavLink to="/endUser">EndUser</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/admin">Admin</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/m2m">M2M</NavLink>        
                                        </li>
                                    </ul>
                                
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;