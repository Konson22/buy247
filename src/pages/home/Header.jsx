import { Link } from "react-router-dom";
import { categDt } from "../../assets/data";


export default function Header() {
  return (
    <header>
        <div className="hero-container"></div>
        <div className="categories-container">
            {categDt.map((category, index) => (
                <Link className="category-content" style={{backgroundImage:`url(${category.image})`}} key={index} to={`/products/${category.url}`}>
                    <div className='category-card-text'>{category.text}</div>
                </Link>
            ))}
        </div>
    </header>
  )
}
