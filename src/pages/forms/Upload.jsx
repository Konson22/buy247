import { useState } from 'react'
import {categories} from '../../assets/data'
import { FaRegImages } from 'react-icons/fa'
import { useItems } from '../../contexts/ItemsContextProvider'
import LoadingSpinner from '../../components/LoadingSpinner'
import axiosInstance from '../../helpers/axiosInstance'
import './css/forms.css'


export default function Upload(){

    const { setItems } = useItems()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmit = async ev => {
        ev.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData(ev.target)
            const result = await axiosInstance.post('/items/upload', formData).then(res => res)
            setItems(prevItems => {
                return [...prevItems, result.data]
            })
        } catch (error) {
            setMessage(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }


    return(
        <div className='form-oter-container'>
            <div className="upload-form-wraper d-flex">
                <div className="upload-form">
                    <div className="text-center mb-3">
                        <h4>Upload you product</h4>
                        {message && <div className='p-1 bg-danger mt-2'>{message}</div>}
                        {loading && <LoadingSpinner />}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            {formInputs.map((fields, index) => (
                                <div className={`input-container ${fields.col}`} key={index}>
                                    <label htmlFor={fields.name}>{fields.label}</label>
                                    {(fields.type === 'text' || fields.type === 'email' || fields.type === 'password' ) && 
                                        <input {...fields} />
                                    }
                                    {fields.type === 'select' && 
                                        <select {...fields}>
                                            <option>Select {fields.name}</option>
                                            {fields?.options?.map((opt, index) => (
                                                <option value={opt.url} key={index}>{opt.text}</option>
                                            ))}
                                        </select>
                                    }
                                    {fields.type === 'textarea' &&
                                        <textarea {...fields} ></textarea>
                                    }
                                    {fields.type === 'file' &&
                                        <div className='file-input- text-white'>
                                            <label className='file-button btn' htmlFor="image" >
                                            <FaRegImages className='image-icon' /> Choose
                                            </label>
                                            <input id='image' {...fields} />
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <button type="submit">Upload</button>
                        </div>
                    </form>
                </div>
                <div className="upload-text"></div>
            </div>
        </div>
    )
}

const currency = [
    { text:'SSP',  url:"SSP" },
    { text:'USD', url:"USD"}
]

const conditions = [
    {text:'New', url:'New'},
    {text:'Used', url:'Used'}
]

const formInputs = [
    { name:'title', type:'text', placeholder:'Item name', label:'Item name', col:'' },
    { name:'category', type:'select', placeholder:'category', label:'category', options:categories, col:'col-md-6' },
    { name:'condition', type:'select', placeholder:'category', label:'category', options:conditions, col:'col-md-6' },
    { name:'price', type:'text', placeholder:'Price', label:'Set price', col:'col-md-6' },
    { name:'currency', type:'select', placeholder:'Currency', label:'Set Currency', options:currency, col:'col-md-6' },
    { name:'description', type:'textarea', placeholder:'description...', label:'Description', col:'' },
    { name:'image', type:'file', placeholder:'image', label:'Upload Image', col:'' },
]



