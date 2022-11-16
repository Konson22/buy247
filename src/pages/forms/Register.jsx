import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { useItems } from '../../contexts/ItemsContextProvider'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField'
import { FaTimes, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export default function Register(){

    const { setShowForm } = useGlobalContext()
    const { setItems } = useItems()

    const validate = Yup.object({
        name:Yup.string().required('Please enter Name'),
        address:Yup.string().required('Please enter address'),
        phone:Yup.string().required('Please enter phone number'),
        email:Yup.string().required('Email Required'),
        password:Yup.string().required('Password Required'),
        repeate_password:Yup.string().required('Password Required')
    })
    
    const initialValues = { name:'', address:'', phone:'', email:'', password:'', repeate_password:'' }

    const handleSubmit = val => {
        setItems(prevItem => {
            return [...prevItem, {...val, _id:'sassddd44'}]
        })
        console.log(val)
    }
    return(
        <Formik initialValues={initialValues} validationSchema={validate} onSubmit={values => handleSubmit(values)}>
            <div className="modal-wraper d-flex align-items-center justify-content-center">
                <div className="modal-wraper__content form-content register">
                    <div className='modal-wraper__close rounded-circle' onClick={() => setShowForm(null)}>
                        <FaTimes />
                    </div>
                    <div className="form-header text-center">
                        <div className="icon-wraper rounded-circle  d-flex align-items-center justify-content-center">
                            <FaUserPlus />
                        </div>
                        <h3>Register</h3>
                    </div>
                    <Form>
                        <div className="col-form">
                            {formInputs.map(input => (
                                <InputField name={input.name} type={input.type} placeholder={input.placeholder} label={input.label} />
                            ))}
                        </div>
                        <div className="mt-4">
                            <button className="btn my-btn rounded-0" type='submit'>Submit</button>
                            <div className="mt-3 sm-hide"> 
                                Already have an account <span onClick={() => setShowForm('login')}>Login</span>
                            </div>
                            <div className="mt-2 lg-hide"> 
                                Already have an account <Link to='/login' >Login</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

const formInputs = [
    { name:'name', type:'text', placeholder:'Name', label:'Name' },
    { name:'address', type:'text', placeholder:'Address', label:'Address' },
    { name:'phone', type:'text', placeholder:'Phone', label:'Phone' },
    { name:'email', type:'email', placeholder:'E-mail address', label:'E-mail' },
    { name:'password', type:'password', placeholder:'Create password', label:'Password' },
    { name:'repeate_password', type:'password', placeholder:'Repeate password', label:'Repeate Password' }
]