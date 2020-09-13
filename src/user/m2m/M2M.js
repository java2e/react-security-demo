import React, { Component } from 'react';
import './M2M.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';

class M2M extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
    



        return (
            <div className="login-container">
                <div className="login-content">
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Client Id Giriniz" required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Client secret giriniz" required/>
                </div>
                    <div className="or-separator">
                    </div>
                    <LoginForm {...this.props} />
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Log in with Google</a>
            </div>
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.push("/");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {

        const jwt = localStorage.getItem(ACCESS_TOKEN);


        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-item">
                    <input type="textarea" name="email" 
                        className="form-control" placeholder="jwt"
                        value={jwt} required/>
                </div>

                <div className="form-item">
                    <div style={{width: '20%', float:"left"}}>
                    <button type="submit" style={{width: 100, margin: 10}} className="btn btn-block btn-primary">GET</button>
                    <button type="submit" style={{width: 100, margin: 10}}  className="btn btn-block btn-primary">LIST</button>
                    <button type="submit" style={{width: 100, margin: 10}} className="btn btn-block btn-primary">ADD</button>
                    <button type="submit" style={{width: 100, margin: 10}} className="btn btn-block btn-primary">DELETE</button>
                    </div>
                    <div style={{width: '80%', float:"left"}}>
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                    </div>
                </div>
            </form>                    
        );
    }
}

export default M2M;
