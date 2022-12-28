import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiHome, FiUser } from 'react-icons/fi'
import { categDt } from '../../assets/data'
import './css/navbar.css'
import { useState } from 'react'


export default function Navbar(){

    const { profile, setShowForm } = useGlobalContext()
    const [isOpen, setIsOpen] = useState(false)

    const authUserActions = (
        <>
            <button className="nav-button btn" onClick={() => setShowForm('upload')}>
                <span className="sm-hide">Start salling</span>
                <span className="lg-hide">Upload</span>
            </button>
            <div className="nav-icon-wraper">
                <FiBell />
            </div>
            <div className="nav-icon-wraper">
                <FiUser />
            </div>
        </>
    )

    const guestUserActions = (
        <button className="nav-button btn" onClick={() => setShowForm('login')}>
            <span className="">Login </span>
            <span className="sm-hide">| Signup</span>
        </button>
    )
   
    // NAVIGATIONS LINKS
    const navigationsLinks = (
        <div className={`nav-link-wraper ${isOpen ? 'show' : ''}`}>
            <ul className='d-flex'>
                <li>
                    <NavLink className='my-link' to='/' onClick={() => setIsOpen(!isOpen)}>
                        Home
                    </NavLink>
                </li>
                {categDt.map((link, index) => (
                    <li key={index}>
                        <NavLink className='my-link' to={`/products/${link.url}`} onClick={() => setIsOpen(!isOpen)}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )

    return(
        <nav className='appbar-wraper d-flex align-items-center justify-content-between'>
            <div className="logo-wraper d-flex align-items-center">
                <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='' />
                <NavLink className="nav-icon-wraper menu-bar-icon" to='/'>
                    <FiHome />
                </NavLink>
            </div>
            {navigationsLinks}
            <div className="nav-buttons-wraper d-flex align-items-center">
                {!profile ? authUserActions : guestUserActions}
                <div className="nav-icon-wraper menu-bar-icon" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <FaBars /> : <FaTimes />}
                </div>
            </div>
        </nav>
    )
}
