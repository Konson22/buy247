import { useState } from "react"
import { useParams } from 'react-router-dom'
import { FaChevronRight, FaSearch } from 'react-icons/fa'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import './css/products.css'
import CategoriesDropdown from "../../components/CategoriesDropdown"
import { NavDropdown } from 'react-bootstrap'
import SearchBar from "../../components/SearchBar"



export default function ProductsPage(){
    
    const { query } = useParams()
    const { loading, errors, items } = useItems()

    const queryType = query.split('+')

    const currentItems = (queryType[0] === 'all' ) ? items : items.filter(item => item[queryType[0]] === queryType[1])
   
    const setQuery = () => {}

    return(
        <div>
            <div className="products-nav d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <CategoriesDropdown /> 
                </div>
                <SearchBar handleSearch={setQuery} />
            </div>
            <div className='products-container'>
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {currentItems.length >= 1 && <Items items={currentItems} /> }
            </div>
        </div>
    )
}