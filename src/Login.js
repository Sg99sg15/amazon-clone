import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from './firebase';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); //this stops the refresh
        // do the login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push("/");
        })
            .catch(e => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault(); //this stops the refresh
        // do the login logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // created a user and logged in, redirect to homepage
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
        <Link exact to='/'>
        <img 
        className="login-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        alt="logo"
        />
        </Link>
        <div className='login-container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" onChange={event => setEmail(event.target.value)} value={email} />
                <h5>Password</h5>
                <input type="password" onChange={event => setPassword(event.target.value)} value={password} />
                <button type="submit" onClick={login} className="login-signInButton" > Sign In </button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our intrest-Based Ads Notice.
            </p>
        <button onClick={register} className="login-registerButton">Create Your Amazon Account</button>
         </div>
        </div>
    )
}

export default Login
