import { Link } from 'react-router-dom'
// import Carousel from 'react-bootstrap/Carousel';
import { useGlobalContext } from "../../contexts/GlobalContextProvider";


export default function Header(){

    const { setShowForm } = useGlobalContext()

    return(
        <header className='header-container d-flex align-items-center justify-content-cente'>
            <div className="hero">
                <h1>Where something special happens every day</h1>
                <div className="header-btn-wraper d-flex mt-4">
                    <Link className='header-btn btn btn-yellow' to='/items/all'>Start shopping</Link>
                    <span className="lg-hide">
                        <Link className='header-btn btn bordered' to='/upload'>Start salling</Link>
                    </span>
                    <span className="sm-hide">
                        <button className='header-btn btn bordered' onClick={() => setShowForm('upload')}>Start salling</button>
                    </span>
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

