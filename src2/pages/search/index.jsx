import { useParams } from 'react-router-dom'
// import { FaChevronRight, FaSearch } from 'react-icons/fa'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import CategoriesDropdown from "../../components/CategoriesDropdown"
import { NavDropdown } from 'react-bootstrap'
import { useState } from 'react'
import SearchBar from '../../components/SearchBar'



export default function SearchPage(){
    
    const { searchQuery } = useParams()
    const { loading, errors, items } = useItems()
    const [query, setQuery] = useState(searchQuery)
    

    let currentItems = null

    if(query){
        currentItems = items.length >= 1 && items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) );
        console.log(currentItems)
    }
    

    return(
        <div>
            <div className="store-nav d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <CategoriesDropdown /> 
                </div>
                <SearchBar handleSearch={setQuery} />
            </div>
            <div className='my-container mt-3'>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h4>Items <span>({currentItems && currentItems.length}</span>)</h4>
                    <div className="d-flex align-items-center">
                        <NavDropdown title='Sort by A-Z' className='border py-1 px-2'>
                            <NavDropdown.Item>A-Z</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                <div>
                    {loading && 'Loading...'}
                    {(!loading && errors) && 'error occures!'}
                    {currentItems && <Items items={currentItems} /> }
                </div>
            </div>
        </div>
    )
}