import React from 'react'
import '../login/Login.css'
import { logIn } from "../../store/auth-slice"
import { useDispatch } from 'react-redux'
const Login = () => {
    const dispatch = useDispatch();
    const loginHandler = () => {
        dispatch(logIn());
    }
    return (
        <div className="card">
            <div className="card-header">
                Login
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <span>Username</span>
                        <input type="text" className="form-control" placeholder="Enter your username"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>Password</span>
                        <input type="password" className="form-control" placeholder="Enter your password"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary col-md-3" onClick={loginHandler}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
