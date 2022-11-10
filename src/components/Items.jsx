import { Link } from 'react-router-dom'
import { LazyImage } from '../helpers/LazyImage'

export default function Items({items, col=''}){
    return(
        <div className={`items-wraper ${col}`}>
            {items.length >= 1 ? items.map(item => (
                <div className='item-card shadow-sm border' key={item.id}>
                    <div className="item-card__image">
                        {/* <LazyImage src='http://localhost:3001/uploads/1655047862206.jpg' alt='' /> */}
                        <LazyImage src={item.thumbnail} alt='' />
                    </div>
                    <div className="item-card__text">
                        <h5 className='elips-text'>{item.title}</h5>
                        <p className='elips-text l2'>{item.description}</p>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                            <h3>{item.price}$</h3>
                            <Link className="btn btn-primary btn-s rounded-0" to={`/details/${item.id}`}>detail</Link>
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