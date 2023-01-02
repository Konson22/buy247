import { Link } from "react-router-dom";
import { categDt } from "../../assets/data";
import {FiSearch} from 'react-icons/fi';


export default function Header() {
  return (
    <header>
        <div className="hero-container d-flex align-items-center">
          <div className="hero-content">
            {/* <h1>There’s nothing quite like the thrill of finding a great bargain</h1> */}
            {/* <h1>All items, every day, are better than before</h1> */}
            <h1>All your needs are complete here</h1>
            <div className="search-container d-flex">
              <input type="search" placeholder='Search...' />
              <button className='button'><FiSearch /> <span className="sm-hide">Search</span></button>
            </div>
          </div>
        </div>
        <div className="categories-container">
          {categDt.map((category, index) => (
            <Link className="category-content" key={index} to={`/products/${category.url}`}>
              <img className='category-image-bg' src={category.image} alt='' />
              <div className='category-card-text'>{category.text}</div>
            </Link>
          ))}
        </div>
    </header>
  )
}
