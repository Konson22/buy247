import { Link } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import { FaArrowRight } from 'react-icons/fa'


export default function Products(){

    const { loading, errors, items } = useItems()

    return(
        <div className='home-section products-container'>
            <div className="home-section-heading text-center">
                <h1>Recently uploaded</h1>
            </div>
            <div className="home-section-content">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {(!loading && items.length >= 1 ) && <Items items={items} col='col4' /> }
                <div className="text-center mt-4">
                    <Link className='btn btn-primary' to='/products/all'>View more <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}