import { categories } from "../../assets/data";
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className='header-container d-flex'>
            <div className="header-hero d-flex align-items-center">
                <div>
                    <h1>hi ther</h1>
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