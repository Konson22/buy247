import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { LazyImage } from '../../helpers/LazyImage'
import { SpecialItems } from '../main'


export default function Details(){

    const { itemId } = useParams()
    const { loading, items } = useItems()
    
    const selectedItem = items.length >= 1 && items.filter(item => item.id.toString() === itemId)[0]
    const relatedItems = (items.length >= 1 && selectedItem) && items.filter(item => item.category === selectedItem.category && selectedItem.id !== itemId)
    return(
        <div className='my-container item-detail-wraper d-flex'>
            <SpecialItems />
            <div className="item-detail-content">
                {selectedItem ?
                    <div className="detail-card d-flex shadow-sm border">
                        <div className="detail-card__image">
                            {/* <LazyImage src={selectedItem.thumbnail} alt='' /> */}
                            <LazyImage src='http://localhost:3001/uploads/1655658148098.jpg' alt='' />
                        </div>
                        <div className="detail-card__text d-flex flex-column">
                            <div className="flex-grow-1">
                                <h2>{selectedItem.title}</h2>
                                <p>{selectedItem.description}</p>
                                <h3>Price: {selectedItem.price}</h3>
                            </div>
                            <div className="mt-3">
                                <h5>Contacts & Address</h5>
                                <div className="d-flex align-items-center mb-2">
                                    <FaMapMarkerAlt />
                                    <span className="mx-2">Juba, Hai malakia near test</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaPhoneAlt />
                                    <span className="mx-2">+211920079070</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaWhatsapp />
                                    <span className="mx-2">+211920079070</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FiMail />
                                    <span className="mx-2">konsonak@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>: 
                    'not found'
                }
                {(!loading && relatedItems.length >= 1 ) && 
                    <div className="mt-3">
                        <h4>Related Items</h4>
                        <Items items={relatedItems} />
                    </div>
                }
            </div>
        </div>
    )
}