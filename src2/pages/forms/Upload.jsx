import { useItems } from '../../contexts/ItemsContextProvider'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './css/forms.css'
import InputField from './InputField'
import { FaTimes } from 'react-icons/fa'
import { categories } from '../../assets/data'
import axiosInstance from '../../helpers/axiosInstance'



export default function UploadItem(){

    const { setItems } = useItems()

    const priceRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?/

    const validate = Yup.object({
        title:Yup.string().required('Name Required'),
        category:Yup.string().required('category Required'),
        price:Yup.string().matches(priceRegExp, 'Must be a number').required('Enter price'),
        image:Yup.string().required('image Required'),
        discription:Yup.string().required('discription Required'),
    })
    
    const initialValues = {
        title:'',
        category:'',
        price:'',
        image:'',
        discription:''
    }

    const handleSubmit = async data => {
        try {
            const result = await axiosInstance.post('/items/upload', data).then(res => res)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="form-outer-wraper d-flex">
        <Formik initialValues={initialValues} validationSchema={validate} onSubmit={values => {
            const formData = new FormData(values)
            handleSubmit(formData)
        }}>
            <div className="upload-form-wraper d-flex">
                <div className="upload-form">
                    <Form>
                        {formInputs.map(input => (
                            <InputField 
                                name={input.name} 
                                type={input.type} 
                                placeholder={input.placeholder} 
                                label={input.label} 
                                options={input.options && input.options}
                            />
                        ))}
                            <div className="d-flex mt-4">
                            {/* <button className="btn btn-warning rounded-0 flex-grow-1" type='reset'>Reset</button> */}
                            <button className="btn btn-success rounded-0 flex-grow-1" type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>
                <div className="upload-sidebar">

                </div>
            </div>
        </Formik>
        </div>
    )
}

const formInputs = [
    { name:'title', type:'text', placeholder:'Item name', label:'Item name' },
    { name:'category', type:'select', placeholder:'category', label:'category', options:categories },
    { name:'price', type:'text', placeholder:'Price', label:'Set price' },
    { name:'discription', type:'textarea', placeholder:'item discription here..', label:'Discription' },
    { name:'image', type:'file', placeholder:'image', label:'Upload Image' },
]