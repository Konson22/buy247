import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { LazyImage } from '../helpers/LazyImage'

export default function Items({items, col=''}){
    return(
        <div className={`items-wraper ${col}`}>
            {items.length >= 1 ? items.map(item => (
                <div className='item-card border' key={item.id}>
                    <div className="item-card__image">
                        <LazyImage src={item.thumbnail} alt='' />
                        {/* <LazyImage src={`${process.env.REACT_APP_BACK_END_URL}${item.image}`} alt='' /> */}
                    </div>
                    <div className="item-card__text">
                        <h5 className='elips-text'>{item.title}</h5>
                        <h3>{item.price}$</h3>
                        <div className="item-card-footer d-flex align-items-center justify-content-between">
                            <Link className="btn item-card-btn rounded-0" to={`/product/detail/${item.id}`}>
                                detail <span className="sm-hide"> & contacts</span>
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            )) : 
            <div className="p-2 alert-danger">
                no items found
            </div>
            }
        </div>
    )
}