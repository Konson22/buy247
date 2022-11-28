import { Link } from 'react-router-dom'
import { LazyImage } from '../helpers/LazyImage'

export default function Items({items, col=''}){
    return(
        <div className={`items-wraper ${col}`}>
            {items.length >= 1 ? items.map(item => (
                <div className='item-card shadow-sm border' key={item._id}>
                    <div className="item-card__image">
                        <LazyImage src={`${process.env.REACT_APP_BACK_END_URL}${item.image}`} alt='' />
                    </div>
                    <div className="item-card__text">
                        <h5 className='elips-text'>{item.title}</h5>
                        <p className='elips-text l2'>{item.description}</p>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <h3>{item.price}$</h3>
                            <Link className="btn btn-primary btn-s rounded-0" to={`/details/${item._id}`}>detail</Link>
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