import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import SearchBar from "../../components/SearchBar"
import CategoriesDropdown from "../../components/CategoriesDropdown"
import './css/products.css'
import { categDt } from '../../assets/data'

export default function Products(){

    const { category } = useParams()
    const { loading, errors, items } = useItems()

    
    const currentItems = (category === 'all' ) ? items : items.filter(item => item.category === category)
    
    const subcategory = categDt.find(c => c.url === category)?.subcategory

    const subcategoriesContent = (
        <div className="suncategories-container flex-grow-1 d-flex align-items-center">
            <span>{category}</span>
            {subcategory && subcategory.map(subcat => (
                <span key={subcat}>{subcat}</span>
            ))}
        </div>
    )

    return(
        <main className='page-wraper'>
            <div className="seconary-navbar">
                <div className="d-flex align-items-center">
                    <CategoriesDropdown />
                    <div className="sm-hide flex-grow-1">
                        {subcategoriesContent}
                    </div>
                    <SearchBar />
                </div>
                <div className="lg-hide w-100 mt-3">
                    {subcategoriesContent}
                </div>
            </div>
            <div className="page-body">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {currentItems.length >= 1 && <Items items={currentItems} /> }
            </div>
        </main>
    )
}