import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import SearchBar from "../../components/SearchBar"
import CategoriesDropdown from "../../components/CategoriesDropdown"
import './css/products.css'
import { useState } from 'react'

export default function ProductSearch(){

    const { query } = useParams()
    const { loading, errors, items } = useItems()
    const [queryStr, setQueryStr] = useState(query)

    const queryResults = (queryStr && items.length >= 1) && items.filter(item => item.title.toLowerCase().includes(queryStr.toLowerCase()));
   
    const handleSearch = value => {
        setQueryStr(value)
    }

    return(
        <main className='page-wraper'>
            <div className="secondary-nav d-flex align-items-center justify-content-between">
                <CategoriesDropdown />
                <SearchBar handleSearch={handleSearch} />
            </div>
            <div className="page-body">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {queryResults.length >= 1 && <Items items={queryResults} /> }
            </div>
        </main>
    )
}