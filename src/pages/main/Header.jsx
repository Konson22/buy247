import { categories } from "../../assets/data";
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

export default function Header(){

    const { setShowForm } = useGlobalContext()

    return(
        <header className='header-container d-flex'>
            <div className="header-hero d-flex align-items-center">
                <div className='header-hero__content'>
                    {/* <h1>Your Favorite Items Made Affordable For You</h1> */}
                    <h1>Share your Items to help shoppers discover your merchandise</h1>
                    {/* <p>Share Listings with your followers to help shoppers discover your merchandise</p> */}
                    <div className="mt-4">
                        <Link className='btn-info btn btn-lg rounded-0 text-white' to='/items/all'>Start shopping</Link>
                        <button className='btn-info btn btn-lg rounded-0 text-white mx-2' onClick={() => setShowForm('upload')}>Start saling</button>
                    </div>
                </div>
            </div>
            <div className='header-container__category'>
                {categories.map((category, index) => (
                    <Link className="category-card d-flex align-items-end" style={{backgroundImage:`url(${category.image})`}} key={index} to={`/items/${category.url}`}>
                        <span>{category.text}</span>
                    </Link>
                ))}
            </div>
        </header>
    )
}