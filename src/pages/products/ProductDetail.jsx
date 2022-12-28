/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useNavigate } from 'react-router-dom'
import Items from "../../components/Items"
import { useItems } from "../../contexts/ItemsContextProvider"
import { FaMapMarkerAlt, FaTimes, FaArrowLeft, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { LazyImage } from '../../helpers/LazyImage'
import { useEffect, useState } from 'react'
import TopSallers from '../home/TopSallers'

export default function ProductDetail(){

    const { itemId } = useParams()
    const { loading, items } = useItems()
    const [ selectedItem, setSelectedItem ] = useState(null)
    const [ relatedItems, setRelatedItems ] = useState([])
    const navigate = useNavigate()
    
   
    useEffect(() => {
        if(!loading && items.length >= 1){
            const selected = items.filter(item => item._id.toString() === itemId)[0]
            const related = selected ? items.filter(item => item.category === selected.category && item._id.toString() !== itemId) : []
            selected && setSelectedItem(selected)
            related.length >= 1 && setRelatedItems(related)
        }
    }, [itemId])

    return(
        <div className='detail-container d-flex'>
            <div className='detail-container__sidebar sm-hide'>
                <TopSallers />
            </div>
            <div className='detail-container__content'>
                {selectedItem && 
                    <div className="detail-box">
                        <div className="detail-image">
                            {/* <LazyImage src={selectedItem.thumbnail} alt='' /> */}
                            <LazyImage src={process.env.PUBLIC_URL+'/images/cars.jpg'} alt='' />
                        </div>
                        <div className="detail-text p-2">
                            <div className="flex-grow-1">
                                <h2>{selectedItem.title}</h2>
                                <p>{selectedItem.description}</p>
                                <h3>Price: {selectedItem.price}</h3>
                            </div>
                            <div className="">
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
                            <div 
                                className="back-btn-sm mt-2"
                                onClick={() => navigate(`/products/${selectedItem.category}`)}
                            >
                                <FaArrowLeft />
                                <span className="mx-2">Go Back</span>
                            </div>
                            <div 
                                className="back-btn d-flex align-items-center justify-content-center rounded-circle sm-hide" 
                                onClick={() => navigate(`/products/${selectedItem.category}`)}
                            >
                                <FaTimes />
                            </div>
                        </div>
                    </div>
                }
                {relatedItems.length >= 1 && 
                    <div className='related-items-box'>
                        <h3 className='mb-3'>Related Items</h3>
                        <Items items={relatedItems} col='col4' />
                    </div>
                }
            </div>
        </div>
        // <div className='product-container d-flex'>
        //     <div className='product-sidebar sm-hide'>
        //         sidebar
        //     </div>
        //     <div className='product-content'>
        //         {selectedItem && 
        //             <div className='product-detal-container'>
        //                 <div className="product-detal-image">
        //                     <LazyImage src={selectedItem.thumbnail} alt='' />
        //                     {/* <LazyImage src={process.env.PUBLIC_URL+'/images/cars.jpg'} alt='' /> */}
        //                 </div>
        //                 <div className="product-detal-text d-flex flex-column">
                            // <div className="flex-grow-1">
                            //     <h2>{selectedItem.title}</h2>
                            //     <p>{selectedItem.description}</p>
                            //     <h3>Price: {selectedItem.price}</h3>
                            // </div>
                            // <div className="">
                            //     <h5>Contacts & Address</h5>
                            //     <div className="d-flex align-items-center mb-2">
                            //         <FaMapMarkerAlt />
                            //         <span className="mx-2">Juba, Hai malakia near test</span>
                            //     </div>
                            //     <div className="d-flex align-items-center mb-2">
                            //         <FaPhoneAlt />
                            //         <span className="mx-2">+211920079070</span>
                            //     </div>
                            //     <div className="d-flex align-items-center mb-2">
                            //         <FaWhatsapp />
                            //         <span className="mx-2">+211920079070</span>
                            //     </div>
                            //     <div className="d-flex align-items-center mb-2">
                            //         <FiMail />
                            //         <span className="mx-2">konsonak@gmail.com</span>
                            //     </div>
                            // </div>
                            // <div 
                            //     className="back-btn-sm mt-2"
                            //     onClick={() => navigate(`/products/${selectedItem.category}`)}
                            // >
                            //     <FaArrowLeft />
                            //     <span className="mx-2">Go Back</span>
                            // </div>
                            // <div 
                            //     className="back-btn d-flex align-items-center justify-content-center rounded-circle sm-hide" 
                            //     onClick={() => navigate(`/products/${selectedItem.category}`)}
                            // >
                            //     <FaTimes />
                            // </div>
        //                 </div>
        //             </div>
        //         }
                // {relatedItems.length >= 1 && 
                //     <div className='product-related-items'>
                //         <h3 className='mb-3'>Related Items</h3>
                //         <Items items={relatedItems} col='col4' />
                //     </div>
                // }
        //     </div>
        // </div>
    )
}