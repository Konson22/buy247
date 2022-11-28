import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField'
import { FaTimes, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'
import axiosInstance from '../../helpers/axiosInstance'


export default function Login(){

    const { setShowForm, setProfile } = useGlobalContext()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const validate = Yup.object({
        email:Yup.string().required('Please enter Email!'),
        password:Yup.string().required('Please enter password!')
    })
    
    const initialValues = { email:'', password:'' }

    const handleSubmit = async val => {
        try {
            setLoading(true)
            const response = await axiosInstance.post('/users/login', val).then(res => res)
            if(response?.status === 200){
                console.log(response.data)
                setProfile(response.data)
                setShowForm(null)
            }
        } catch (error) {
            if(error.response?.status === 400 || error.response?.status === 403){
                setMessage(error.response?.data)
            }else if(error.response?.status === 500){
                setMessage('server side problem')
            }else{
                setMessage('Opps something went wrong!')
            }
        }finally{
            setLoading(false)
        }
    }
    return(
        <Formik initialValues={initialValues} validationSchema={validate} onSubmit={values => handleSubmit(values)}>
            <div className="modal-wraper d-flex align-items-center justify-content-center">
                <div className="modal-wraper__content form-content login">
                    <div className='modal-wraper__close rounded-circle' onClick={() => setShowForm(null)}>
                        <FaTimes />
                    </div>
                    <div className="form-header text-center">
                        <div className="icon-wraper rounded-circle  d-flex align-items-center justify-content-center">
                            <FaUser />
                        </div>
                        <h3>Login</h3>
                        { message && <div className="mt-3 p-2 alert-danger text-danger">{message}</div>}
                        {loading && <LoadingSpinner />}
                    </div>
                    <Form>
                        {formInputs.map(input => (
                            <InputField name={input.name} type={input.type} placeholder={input.placeholder} label={input.label} />
                        ))}
                        <div className="mt-4">
                            <button className="btn my-btn rounded-0 flex-grow-1" type='submit'>Login</button>
                            <div className="mt-2 sm-hide"> 
                                Don't have an account <span onClick={() => setShowForm('register')}>Register</span>
                            </div>
                            <div className="mt-2 lg-hide"> 
                                Don't have an account <Link to='/register' >Register</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

const formInputs = [
    { name:'email', type:'email', placeholder:'E-mail address', label:'E-mail' },
    { name:'password', type:'password', placeholder:'Enter password', label:'Password' }
]