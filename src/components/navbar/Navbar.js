import React from 'react'
import '../navbar/Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li className="header">
                        Redux Demo
                    </li>                    
                </ul>
                <ul className="nav-actions">                    
                    <li>
                        <button className="btn btn-warning">Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
