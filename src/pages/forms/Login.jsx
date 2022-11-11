import { useGlobalContext } from '../../contexts/GlobalContextProvider'
import { useItems } from '../../contexts/ItemsContextProvider'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InputField from './InputField'

export default function Login(){

    const { setShowForm } = useGlobalContext()
    const { setItems } = useItems()

    const validate = Yup.object({
        title:Yup.string().required('Email Required'),
        model:Yup.string().required('Password Required')
    })
    
    const initialValues = { email:'', password:'' }

    const handleSubmit = val => {
        setItems(prevItem => {
            return [...prevItem, {...val, _id:'sassddd44'}]
        })
        console.log(val)
    }
    return(
        <div className="">
            <Formik initialValues={initialValues} validationSchema={validate} onSubmit={values => handleSubmit(values)}>
                <div className="">
                    <Form>
                        {formInputs.map(input => (
                            <InputField name={input.name} type={input.type} placeholder={input.placeholder} label={input.label} />
                        ))}
                            <div className="d-flex mt-4">
                            <button className="btn btn-danger rounded-0 flex-grow-1" type='button' onClick={() => setShowForm(false)}>Cancel</button>
                            <button className="btn btn-success rounded-0 flex-grow-1" type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    )
}

const formInputs = [
    { name:'email', type:'email', placeholder:'E-mail address', label:'E-mail' },
    { name:'password', type:'password', placeholder:'Enter password', label:'Password' }
]