// import { useItems } from "../contexts/ItemsContextProvider"
import { LazyImage } from "../helpers/LazyImage"
import { Heading2 } from "./HeadingTitles"
import { FaMapMarkerAlt, FaTag } from 'react-icons/fa'


export default function Shopps(){

    return(
        <div className="special-items-sidebar">
            <div className="sidebar-secion">
                <div className="sidebar-secion__header">
                    <h3 className='m-0 text-white'>Special items</h3>
                </div>
                <div className="sidebar-secion__content">
                    {shoppsData.length >= 1 && shoppsData.map(shope => (
                        <div className='item-box d-flexd' key={shope._id}>
                            <div className="item-box__image">
                                <LazyImage className='' src={shope.avatar} alt='' />
                            </div>
                            <div className="item-box__text">
                                <h5 className='m-0'>{shope.name}</h5>
                                <p className='elips-text l2 m-'>{shope.about}</p>
                                <div className="d-flex mt-1">
                                    <FaTag className='icon' /> 
                                    <span>Electronic</span>
                                </div>
                                <div className="d-flex mt-1">
                                    <FaMapMarkerAlt className='icon' /> 
                                    <span>{shope.address}</span>
                                </div>
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


const shoppsData = [
    {
        _id:'2qw3',
        name:'Blue fashion',
        about:'Many of the designations used by manufacturers and sellers to distinguish their products are',
        address:'Juba, Custom near test',
        avatar:process.env.PUBLIC_URL+'/images/drink-864958__340.jpg'
    },
    {
        _id:'237s',
        name:'Juba Electronic',
        about:'Many of the designations used by manufacturers and sellers to distinguish their products are',
        address:'Juba, Main market near bank',
        avatar:process.env.PUBLIC_URL+'/images/logo (4).png'
    },
    {
        _id:'2asd3',
        name:'Mens how fashion',
        about:'Many of the designations used by manufacturers and sellers to distinguish their products are',
        address:'Juba, Malakia near shope',
        avatar:process.env.PUBLIC_URL+'/images/pngegg.png'
    },
    {
        _id:'23ds',
        name:'Blue fashion',
        about:'Many of the designations used by manufacturers and sellers to distinguish their products are',
        address:'Juba, Custom near test',
        avatar:process.env.PUBLIC_URL+'/images/logo2.png'
    },
]