import { Link, useNavigate } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi';
import { useRef } from 'react';

export default function Header(){

    const queryRef = useRef()
    const navigate = useNavigate()
    
    const handleSearch = () => queryRef.current.value && navigate(`/products/search/${queryRef.current.value}`)

    return(
        <header className='header-container d-flex align-items-center'>
            <div className="hero-container">
                <h1>Where something special happens every day</h1>
                <div className="hero-inner-container d-flex align-items-center">
                    <div className="hero-search-bar d-flex align-items-center">
                        <input type="search" placeholder='Search...'  ref={queryRef} />
                        <button className='button' onClick={handleSearch}><FiSearch /> <span className="sm-hid">Search</span></button>
                    </div>
                    <Link className='button header-btn sm-hide' to='/items/all'><span className="sm-hide">Start</span> shopping</Link>
                </div>
            </div>
        </header>
    )
}