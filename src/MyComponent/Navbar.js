import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/form">Form</Link>
                    </li>       
                </ul>
                
            </div>
        </nav>
     );
}
 
export default Navbar;