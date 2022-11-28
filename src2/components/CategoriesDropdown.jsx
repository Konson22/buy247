import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { categories } from '../assets/data'



export default function CategoriesDropdown({color=''}){
    return(
        <div className='category-dropdown-wraper'>
            <NavDropdown title='Categories' className='categories text-dark'>
                <NavDropdown.Item>
                    <NavLink className='nav-link text-dark' to='/items/all'>All</NavLink>
                </NavDropdown.Item>
                {categories.map((link, index) => (
                    <NavDropdown.Item key={link.url}>
                        <NavLink className='nav-link text-dark' to={`/items/${link.url}`}>{link.text}</NavLink>
                    </NavDropdown.Item>
                ))}
            </NavDropdown>
        </div>
    )
}