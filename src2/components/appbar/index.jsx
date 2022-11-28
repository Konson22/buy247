import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { FaBars, FaHome, FaBell, FaPlus } from 'react-icons/fa'
import { categories } from '../../assets/data'
import './css/appbar.css'
import CategoriesDropdown from '../CategoriesDropdown'


export default function Appbar(){

    const { profile, setShowForm } = useGlobalContext()

    const authUserActions = (
        <>
            <NavLink className='nav-button sm-hid' to='/upload' >
                <span className="sm-hide">Start salling</span>
                <span className="lg-hide"><FaPlus /> Upload</span>
            </NavLink>
            <NavLink className="nav-icon lg-hide" to='/'>
                <FaHome />
            </NavLink>
            <NavLink className="nav-icon" to='/notifications'>
                <FaBell />
            </NavLink>
            {profile ?
                <button className='nav-button' onClick={() => setShowForm('login')}>Login</button> :
                <NavLink className="navbar-avatar d-flex align-items-center" to='/account'>
                    <img src='http://localhost:3001/images/kon.png' alt='' className='navbar-avatar__image rounded-circle' /> 
                    <span className='navbar-avatar__text sm-hide'>Kon</span>
                </NavLink>
            }
        </>
    )

    return(
        <nav className='appbar-wraper'>
            <div className='appbar-wraper-top d-flex align-items-center justify-content-between'>
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL+'/images/pngegg.png'} alt='' />
                </div>
                <div className="navbar-actions-container d-flex align-items-center justify-content-center">
                    {authUserActions}
                    <div className="nav-icon lg-hide">
                        <FaBars />
                    </div>
                </div>
            </div>
            <div className="app-wraper-navigation d-flex align-items-center sm-hide">
                <CategoriesDropdown />
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/products/all'>All</NavLink>
                    </li>
                    {categories.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <NavLink className='nav-link' to={`/products/category+${link.url}`}>{link.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

/*
 <nav className='appbar-wraper d-flex align-items-center justify-content-between'>
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt='' />
            </div>
            <div className="appbar-content  d-flex align-items-center justify-content-between">
                <div className="appbar-navigation-container flex-grow-1 sm-hide">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/products/all'>All</NavLink>
                        </li>
                        {categories.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className='nav-link' to={`/products/category+${link.url}`}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-actions-container d-flex align-items-center justify-content-center">
                    {authUserActions}
                </div>
            </div>
        </nav>

*/

