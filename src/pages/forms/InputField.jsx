import { ErrorMessage, useField } from 'formik'



export default function InputField({label, key='', ...props}){

    const [field, meta] = useField(props)

    return(
        <div className="input-container" key={field.name}>
            <label htmlFor={field.name}>{label}</label>
            {props.type === 'text' && <input
                className={(meta.touched && meta.error) ? 'error-border' : '' }
                {...field}
                {...props}
                autoComplete="off"
            />}
            {props.type === 'textarea' &&
                <textarea
                    className={(meta.touched && meta.error) ? 'error-border' : '' }
                    {...field}
                    {...props}
                    autoComplete="off" 
                ></textarea>
            }
            <ErrorMessage component='div' name={field.name} className="error-card small text-danger mt-1" />
        </div>
    )
}