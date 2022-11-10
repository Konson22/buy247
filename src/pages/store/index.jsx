import { useState } from "react"
import { useParams } from 'react-router-dom'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import './css/store.css'
import CategoriesDropdown from "../../components/CategoriesDropdown"

export default function Store(){
    
    const { category } = useParams()
    const { loading, errors, items } = useItems()
    const [query, setQuery] = useState('')

    const currentItems = (category === 'all' ) ? items : items.filter(item => item.category === category);
    
    const queryResult = items.length >= 1 && items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))

    return(
        <div>
            <div className="store-nav d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <CategoriesDropdown /> 
                    <div className="sm-hide">
                        <FaChevronRight  className='arrow mx-2' />
                        <span>{category}</span>
                    </div>
                </div>
                <div className="search-bar-container d-flex">
                    <input type="search" placeholder='Search...' onChange={e => setQuery(e.target.value)} />
                    <button><FaSearch /></button>
                </div>
            </div>
            <div className='my-container mt-4'>
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {(!loading && !query ) && <Items items={currentItems} /> }
                {query && <Items items={queryResult} /> }
            </div>
        </div>
    )
}