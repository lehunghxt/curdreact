import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login(props) {
    let navigate = useNavigate();
    const [credential, setCredential] = useState({});

    const HandleInput = e => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const HandleLogin = (e) => {
        e.preventDefault();
        if (credential.username === 'hungadmin' && credential.password === 'hungadmin') {
            props.setisLogin(true);
            navigate("/");
        }
    }
    return (
        <>
            <div className="container">
                <div className="card card-container">
                    <p id="profile-name" className="profile-name-card">Đăng nhập</p>
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="text"
                            id="username"
                            name='username'
                            className="form-control"
                            placeholder="Username"
                            required autoFocus
                            onChange={(e) => HandleInput(e)}
                        />
                        <input type="password"
                            id="password"
                            name='password'
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={(e) => HandleInput(e)}
                        />
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button
                            onClick={(e) => HandleLogin(e)}
                            className="btn btn-lg btn-primary btn-block btn-signin"
                        >Đăng nhập</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login