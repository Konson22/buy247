import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { categories } from '../../assets/data'
import { NavDropdown } from 'react-bootstrap'
import { motion, useCycle } from "framer-motion"
import './css/appbar.css'

export default function Appbar() {

    const { profile, setShowForm } = useGlobalContext()
    const [toggle, setToggle] = useCycle(false, true)

    
    const guestUserActions = (
        <div className="action-container d-flex align-items-center">
            <button className="nav-button" onClick={() => setShowForm('login')}>Login</button>
        </div>
    )
    const authUserActions = (
        <div className="action-container d-flex align-items-center">
            <button className="nav-button sm-hide" onClick={() => setShowForm('upload')}>Start Salling</button>
            <NavLink className="nav-button lg-hide" to='/upload'>Upload</NavLink>
            <div className="icon-wraper rounded-circle d-flex align-items-center justify-content-center">
                <FiBell className='icon' />
            </div>
            <div className="icon-wraper rounded-circle">
                <img src={process.env.PUBLIC_URL+'/images/user.png'} alt='' />
            </div>
        </div>
    )


    // NAVIGATIONS LINKS
    const navigationsLinks = (
        <div className={`nav-link-wraper sm-hide`}>
            <ul className='nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/products/all'>
                        Shop
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                        Services
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    )


    const varients = {
        oepn:{
            clipPath:`circle(105vh at 1.8rem 1.8rem)`,
            backgroundColor:'rgb(18, 236, 207)',
            transition:{
                duration:.6
            }
        },
        closed:{
            clipPath:`circle(1rem at 1.8rem 1.8rem)`,
            backgroundColor:'transparent',
            transition:{
                duration:.6
            }
        },
    }
    
    const liVarients = {
        oepn:{
            y:0,
            opacity:1,
            transition:{
                duration:.5,
                ease:[0.6, 0.05, -0.01, 0.9]
            }
        },
        closed:{
            y:0,
            opacity:1,
            transition:{
                duration:.5,
                ease:[0.6, 0.05, -0.01, 0.9]
            }
        },
    }

    return (
        <nav className='appbar-wraper d-flex align-items-center justify-content-between'>
            <div className='menu-bar-icon rounded-circle' onClick={setToggle}>
                { toggle ? <FaBars /> : <FaTimes /> }
                <motion.div className="lg-hide mobile-nav" variants={varients} initial={false} animate={toggle ?  'closed' : 'oepn'}>
                    {!toggle && <ul className='nav' variants={liVarients}>
                        <motion.li className='nav-item text-white'>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </motion.li>
                        <motion.li className='nav-item text-white'>
                            <NavLink className='nav-link' to='/products/all'>
                                Shop
                            </NavLink>
                        </motion.li>
                        <motion.li className='nav-item text-white'>
                            <NavLink className='nav-link' to='/'>
                                Services
                            </NavLink>
                        </motion.li>
                        <motion.li className='nav-item text-white'>
                            <NavLink className='nav-link' to='/'>
                                About
                            </NavLink>
                        </motion.li>
                    </ul>}
                </motion.div>
            </div>
            <div className='logo-container'>
                <img src={process.env.PUBLIC_URL+'/images/pngwing.com.png'} alt='' />
            </div>
            {navigationsLinks}
            <div className="search-container d-flex align-items-center sm-hide">
                <div className="categories">
                    <NavDropdown title='Categories' className='text-dark'>
                        {categories.map((link, index) => (
                            <NavDropdown.Item key={index}>
                                {link.text}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </div>
                <div className="search-bar d-flex align-items-center">
                    <input type="search" placeholder='Search...' />
                    <button type="submit">Search</button>
                </div>
            </div>
            {profile ? authUserActions : guestUserActions}
        </nav>
    )
}
