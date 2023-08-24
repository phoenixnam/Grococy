import React, { useState } from "react";
import axios from "axios";
import '../css/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTrash, faUser, faBagShopping, faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.get('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/user');
            const users = response.data;

            const user =users.find(user => user.email === email && user.password === password && user.username ===username);
            if(user){
                console.log('ok')
                setLoggedIn(true);
                alert('Login successful');
                window.location.href = './home'
            }else{
                setErrorMessage('Invalid credentials');
            }
        } catch (error) {
            alert('Error fetching user data', error);
            
        }
    }
    const handleLogout = () => {
        setLoggedIn(false); 
    }
    return (
        <div>
          
        <form className="login">
            <div className="username">
                <label className="font-medium">Username</label>
                <input type="text" className="input"
                    value={username}
                    onChange={e => setUsername(e.target.value)} name="" id="" placeholder="username" />
            </div>
            <div className="password-login">
                <label className="">Password</label>
                <input type="text" className="input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="" id="" placeholder="password" />
            </div>
            <div className="email-login">
                <label className="">Email</label>
                <input type="text" className="input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="email" />
            </div>

            <div className='button-login'>
                <button className='btn-login' onClick={handleLogin}>Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </div>

            <div className="text">
                <span>Have account yet? </span>
                <a className="r" href="./register">signup</a>
            </div>
        </form>
        <a href='logout' onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} style={{color: "#f38a12",}} /></a>
        </div>
    );
}

export default Login;