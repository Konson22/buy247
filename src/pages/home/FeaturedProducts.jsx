import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useItems } from "../../contexts/ItemsContextProvider"
import Items from "../../components/Items"
import TopSallers from './TopSallers'
import SpecialItems from './SpecialItems'

export default function FeaturedProducts() {

    const { loading, errors, items } = useItems()

    return (
        <div className='featured-products d-flex'>
            <div className="featured-products__sidebar">
                <TopSallers />
                <SpecialItems />
            </div>
            <div className="featured-products__body">
                <div className="content">
                    <div className="content-header d-flex align-items-center justify-content-between">
                        <h2>Featured Items</h2>
                        <div className="">
                            links
                        </div>
                    </div>
                    <div className="content-body">
                        {loading && 'Loading...'}
                        {(!loading && errors) && 'error occures!'}
                        {(!loading && items.length >= 1 ) && <Items items={items.slice(0, 8)} col='col4' /> }
                        <div className="text-center mt-4">
                            <Link className='btn my-btn' to='/products/all'>Explore More Items <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                        content
                </div>
            </div>
        </div>
    )
}
