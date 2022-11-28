/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { LazyImage } from '../../helpers/LazyImage'
import { useEffect, useState } from 'react'
import GobackButton from '../../components/GobackButton'

export default function ProductDetail(){

    const { itemId } = useParams()
    const { loading, items } = useItems()
    const [ selectedItem, setSelectedItem ] = useState(null)
    const [ relatedItems, setRelatedItems ] = useState([])
    
   
    useEffect(() => {
        if(!loading && items.length >= 1){
            const selected = items.filter(item => item.id.toString() === itemId)[0]
            const related = selected ? items.filter(item => item.category === selected.category && item.id.toString() !== itemId) : []
            selected && setSelectedItem(selected)
            related.length >= 1 && setRelatedItems(related)
        }
    }, [itemId])


    return(
        <div className='product-container d-flex'>
            <div className='product-sidebar sm-hide'>
                sidebar
            </div>
            <div className='product-content'>
                <div className="lg-hide">
                    {selectedItem && <GobackButton path={`/products/category+${selectedItem.category}`} text='Details' />}
                </div>
                {selectedItem && 
                    <div className='product-detal-container d-flex'>
                        <div className="product-detal-image">
                            <LazyImage src={selectedItem.thumbnail} alt='' />
                            {/* <LazyImage src={`${process.env.REACT_APP_BACK_END_URL}${selectedItem.image}`} alt='' /> */}
                        </div>
                        <div className="product-detal-text d-flex flex-column">
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
                    </div>
                }
                {items.length >= 1 && 
                    <div className='product-related-items'>
                        <h4>Related Items</h4>
                        <Items items={items} col='col4' />
                    </div>
                }
                {relatedItems.length >= 1 && 
                    <div className='product-related-items'>
                        <h4>Related Items</h4>
                        <Items items={relatedItems} col='col4' />
                    </div>
                }
            </div>
        </div>
    )
}