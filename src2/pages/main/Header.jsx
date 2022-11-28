import { Link, useNavigate } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi';
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useRef } from 'react';


export default function Header(){

    const { setShowForm } = useGlobalContext()
    const queryRef = useRef()
    const navigate = useNavigate()
    
    const handleSearch = () => queryRef.current.value && navigate(`/search/${queryRef.current.value}`)

    return(
        <header className='header-container d-flex align-items-center justify-content-cente'>
            <div className="hero">
                <h1>Where something special happens every day</h1>
                <div className="hero__actions d-flex align-items-center">
                    <div className="search-bar d-flex align-items-center">
                        <input type="search" placeholder='Search...'  ref={queryRef} />
                        <button onClick={handleSearch}><FiSearch /> <span className="sm-hid">Search</span></button>
                    </div>
                    <Link className='header-btn sm-hide' to='/items/all'><span className="sm-hide">Start</span> shopping</Link>
                </div>
            </div>
        </header>
    )
}

/*
-- There are many great reasons to shop our online storefronts:
- Where something special happens every day
- Whatever you’ve got in mind, we’ve got inside.
-- Your gateway to great shopping.
-- Your one stop smart shopping resource
-- Something different, every day.


*/

