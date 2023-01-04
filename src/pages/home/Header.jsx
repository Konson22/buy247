import { categDt } from "../../assets/data";
import { Link } from 'react-router-dom'
import { useGlobalContext } from "../../contexts/GlobalContextProvider";


export default function Header() {

  const { setShowForm } = useGlobalContext()
  

  return (
    <header>
        <div className="hero-container d-flex align-items-center">
          <div className="hero-content">
            <h1 className='sm-hide'>There’s nothing quite like the thrill of finding a great bargain</h1>
            <h1 className='lg-hide'>All items, every day, are better than before</h1>
            {/* <h1>All your needs are complete here</h1> */}
            <div className='d-flex align-items-center mt-3'>
              <Link className='header-button btn text-white' to='/products/all'>Start Shopping</Link>
              <button className='header-button btn text-white sm-hide' onClick={() => setShowForm('upload')}>Start Salling</button>
              <Link className='header-button btn text-white lg-hide' to='/upload'>Start Salling</Link>
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
