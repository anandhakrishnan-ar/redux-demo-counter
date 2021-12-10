import React from 'react'
import '../navbar/Navbar.css'
import { logOut } from '../../store/auth-slice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logOut());
    }
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li className="header">
                        Redux Demo
                    </li>
                </ul>
                {isAuth &&
                    <ul className="nav-actions">
                        <li>
                            <button className="btn btn-secondary" onClick={logOutHandler}>Logout</button>
                        </li>
                    </ul>
                }
            </nav>
        </div>
    )
}

export default Navbar
