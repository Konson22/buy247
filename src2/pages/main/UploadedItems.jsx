// import Shopps from "../../components/Shopps";
import { Link } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import { FaArrowRight } from 'react-icons/fa'



export default function UploadedItems(){

    const { loading, errors, items } = useItems()


    return(
        <div className='home-section uploaded-items-wraper'>
            <div className="home-section__heading text-center">
                <h1>New arrival items</h1>
            </div>
            <div className="home-section__content">
                {loading && 'Loading...'}
                {(!loading && errors) && 'error occures!'}
                {(!loading && items.length >= 1 ) && <Items items={items} col='col4' /> }
                <div className="text-center mt-4">
                    <Link className='btn btn-primary' to='/items/all'>View more <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}