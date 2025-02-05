import { Link } from 'react-router-dom'

import logo from '../img/logo.png'

import './navbar.css'

export default function Navbar() {
    return(
        <nav>
            <img src={ logo } alt="logo" className="logo" />
            <ul>
                <li><Link className='nav-link' to="">Home</Link></li>
                <li><a className='nav-link' href="#about">About</a></li>
                <li><Link className='nav-link' to="/reg">Contact</Link></li>
                <li><a className='nav-link' href="#test">Testimonal</a></li>
                <li><a className='nav-link' href="#pric">Priceing</a></li>
            </ul>
            <Link to="/login" className="btn type-1">Get Started</Link>
        </nav>
    )
}
