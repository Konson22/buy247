import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import SearchBar from "../../components/SearchBar"
import CategoriesDropdown from "../../components/CategoriesDropdown"
import './css/products.css'

export default function Products(){

    const { category } = useParams()
    const { loading, errors, items } = useItems()

    const currentItems = (category === 'all' ) ? items : items.filter(item => item.category === category)
   

    return(
        <main className='page-wraper'>
            <div className="secondary-nav d-flex align-items-center justify-content-between">
                <CategoriesDropdown />
                <SearchBar />
            </div>
            <div className="page-body">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {currentItems.length >= 1 && <Items items={currentItems} /> }
            </div>
        </main>
    )
}