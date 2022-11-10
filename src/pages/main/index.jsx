import { useItems } from "../../contexts/ItemsContextProvider"
import { FaHandshake, FaUser } from 'react-icons/fa'
import Items from "../../components/Items"
import Header from "./Header";
import './css/main.css'
import { Heading1, Heading2 } from "../../components/HeadingTitles";
import { LazyImage } from "../../helpers/LazyImage";

export default function MainPage(){

    const { loading, errors, items } = useItems()

    return(
        <main>
            <Header />
            <div className='my-container'>
                <div className="features-container d-flex align-items-center justify-content-between">
                    <div className="features-card d-flex align-items-center">
                        <FaUser className="features-card__icon" />
                        <div className="features-card__text-wraper">
                            <h4>Always available</h4>
                            <p>
                                Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
                            </p>
                        </div>
                    </div>
                    <div className="features-card d-flex align-items-center">
                        <FaHandshake className="features-card__icon" />
                        <div className="features-card__text-wraper">
                            <h4>Quick guider</h4>
                            <p>
                                Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
                            </p>
                        </div>
                    </div>
                    <div className="features-card d-flex align-items-center">
                        <FaUser className="features-card__icon" />
                        <div className="features-card__text-wraper">
                            <h4>Fast way to make money</h4>
                            <p>
                                Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
                            </p>
                        </div>
                    </div>
                </div>
                <div className="app-content d-flex">
                    <SpecialItems />
                    <div className="app-body">
                        <Heading1 text='New arrival items' />
                        {loading && 'Loading...'}
                        {(!loading && errors) && 'error occures!'}
                        {(!loading && items.length >= 1 ) && <Items items={items} col='col4' /> }
                    </div>
                </div>
            </div>
    
        </main>
    )
}


export function SpecialItems(){

    const { loading, items } = useItems()

    return(
        <div className="special-items-sidebar">
            <div className="sidebar-secion">
                <div className="sidebar-secion__header">
                    <h3 className='m-0 text-white'>Special items</h3>
                </div>
                <div className="sidebar-secion__content">
                    {(!loading && items.length >= 1 ) && items.map(item => (
                        <div className='item-box d-flex' key={item.id}>
                            <div className="item-box__image">
                                {/* <LazyImage className='' src={item.thumbnail} alt='' /> */}
                                <LazyImage className='' src='http://localhost:3001/uploads/1654708064726.jpg' alt='' />
                            </div>
                            <div className="item-box__text">
                                <h5>{item.title}</h5>
                                <p className='elips-text l2'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sidebar__content">
                <Heading2 text='Special items' />
            </div>
        </div>
    )
}