import { NavLink } from 'react-router-dom'
import { FaSearch, FaUser, FaStoreAlt, FaShoppingCart } from 'react-icons/fa'
import { FiHome, FiBell, FiMail, FiPlus, FiShoppingCart } from 'react-icons/fi'
import { categories } from '../../assets/data'
import CategoriesDropdown from '../CategoriesDropdown'
import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import './css/navbar.css'


export function Navbar(){
    
  const { setShowForm } = useGlobalContext()

    return(
        <nav className='app-header-wraper'>
            <div className="navbar__top d-flex align-items-center">
                <div className="navbar__logo d-flex align-items-center">
                    <img src={process.env.PUBLIC_URL+'/images/logo.png'} alt='' />
                    {/* <span className='p-0 m-0'>logo</span> */}
                </div>
                <div className="navbar-search">
                    <CategoriesDropdown color='dark' />
                    <div className="search-bar-container d-flex align-items-center flex-grow-1">
                        <input type="search" placeholder='Search...' />
                        <button className='bg-warning'><FaSearch /> Search</button>
                    </div>
                </div>
                <div className="navbar-buttons d-flex align-items-center">
                    <div className="icon-wraper d-flex align-items-center text-info">
                        <FaShoppingCart />
                    </div>
                    <div className="icon-wraper d-flex align-items-center text-warning">
                        <FiMail />
                    </div>
                    <div className="icon-wraper d-flex align-items-center text-white">
                        <FaUser />
                    </div>
                </div>
            </div>
            <div className="navbar__links-container">
                <CategoriesDropdown />
                <div className="navbar__links flex-grow-1">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>Main</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/items/all'>All</NavLink>
                        </li>
                        {categories.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className='nav-link' to={`/items/${link.url}`}>{link.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="auth-user-buttons">
                    <button className='btn bg-white btn-sm mx-2' onClick={() => setShowForm(true)}>Start salling</button>
                    <button className='btn bg-white btn-sm'><FaUser /> Login | Sign up</button>
                </div>
            </div>
        </nav>
    )
}


export function MobileNavbar(){


    return(
        <div className='mobile-navbar'>
            <NavLink className="mobile-nav-link d-flex align-items-center justify-content-center flex-column" to='/' >
                <FiHome className='icon' />
                <span className='small'>Home</span>
            </NavLink>
            <NavLink className="mobile-nav-link d-flex align-items-center justify-content-center flex-column" to='/items/all' >
                <FaStoreAlt className='icon' />
                <span className='small'>Items</span>
            </NavLink>
            <NavLink className="mobile-nav-link center rounded-circle d-flex align-items-center justify-content-center flex-column" to='/upload' >
                <FiPlus className='icon' />
            </NavLink>
            <NavLink className="mobile-nav-link d-flex align-items-center justify-content-center flex-column" to='/my-cart' >
                <FiShoppingCart className='icon' />
                <span className='small'>Cart</span>
            </NavLink>
            <NavLink className="mobile-nav-link d-flex align-items-center justify-content-center flex-column" to='/messages' >
                <FiBell className='icon' />
                <span className='small'>Mess..</span>
            </NavLink>
        </div>
    )
}
