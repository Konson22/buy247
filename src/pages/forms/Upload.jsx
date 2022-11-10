import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { useItems } from '../../contexts/ItemsContextProvider'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './css/forms.css'
import InputField from './InputField'

export default function UploadItem(){

    const { setShowForm } = useGlobalContext()
    const { setItems } = useItems()
    
    const validate = Yup.object({
        title:Yup.string().required('Name Required'),
        model:Yup.string().required('Model Required'),
        price:Yup.number('must be number').required('Enter price'),
        thumbnail:Yup.string().required('thumbnail Required'),
        discription:Yup.string().required('discription Required'),
    })
    

    const handleSubmit = val => {
        setItems(prevItem => {
            return [...prevItem, {...val, _id:'sassddd44'}]
        })
        console.log(val)
    }
    return(
        <div className="modal-wraper d-flex align-items-center justify-content-center">
            
            <Formik
                initialValues={{
                    title:'',
                    model:'',
                    price:'',
                    thumbnail:'',
                    discription:''
                }}
                validationSchema={validate}
                onSubmit={values => handleSubmit(values)}
            >
                {() => (
                    <div className="modal-wraper__content">
                    <span className='modal-wraper__close' onClick={() => setShowForm(false)}>close</span>
                        <Form>
                            {formInputs.map(input => (
                                <InputField name={input.name} type={input.type} placeholder={input.placeholder} label={input.label} />
                            ))}
                             <div className="d-flex mt-4">
                                <button className="btn btn-warning rounded-0 flex-grow-1" type='reset'>Reset</button>
                                <button className="btn btn-danger rounded-0 flex-grow-1 mx-1" type='button' onClick={() => setShowForm(false)}>Cancel</button>
                                <button className="btn btn-success rounded-0 flex-grow-1" type='submit'>Submit</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

const formInputs = [
    { name:'title', type:'text', placeholder:'Item name', label:'Item name' },
    { name:'model', type:'text', placeholder:'Model', label:'Model' },
    { name:'thumbnail', type:'text', placeholder:'thumbnail', label:'thumbnail' },
    { name:'price', type:'text', placeholder:'Price', label:'Set price' },
    { name:'discription', type:'textarea', placeholder:'item discription here..', label:'Discription' },
]