import { useItems } from '../../contexts/ItemsContextProvider'
import FormField from './FormField'
import { FaTimes } from 'react-icons/fa'
import { categories } from '../../assets/data'
import axiosInstance from '../../helpers/axiosInstance'
import './css/forms.css'
import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'



export default function UploadProduct(){

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
        <div className="form-outer-wraper d-flex">
            <div className="upload-form-wraper d-flex">
                <div className="upload-form">
                    {loading && <LoadingSpinner />}
                    <div className="text-center">
                        {message && <p className='p-2 mt-3 alert-danger'>{message}</p>}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row p-0 m-0">
                            {formInputs.map(input => (
                                <FormField field={input} col={input.col} />
                            ))}
                        </div>
                        <div className="d-flex mt-4">
                            <button className="btn btn-success rounded-0 flex-grow-1" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="upload-sidebar">

                </div>
            </div>
        </div>
    )
}

const currency = [
    { text:'SSP',  url:"SSP" },
    { text:'USD', url:"USD"}
]

const formInputs = [
    { name:'title', type:'text', placeholder:'Item name', label:'Item name', col:'' },
    { name:'category', type:'select', placeholder:'category', label:'category', options:categories, col:'' },
    { name:'price', type:'text', placeholder:'Price', label:'Set price', col:'col-md-8' },
    { name:'currency', type:'select', placeholder:'Currency', label:'Set Currency', options:currency, col:'col-md-4' },
    { name:'description', type:'textarea', placeholder:'description...', label:'Description', col:'' },
    { name:'image', type:'file', placeholder:'image', label:'Upload Image', col:'' },
]