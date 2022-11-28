import { ErrorMessage, useField } from 'formik'
import { FaRegImages } from 'react-icons/fa'



export default function InputField({label, options, key='', ...props}){

    const [field, meta] = useField(props)

    return(
        <div className="input-container" key={field.name}>
            <label htmlFor={field.name}>{label}</label>
            {(props.type === 'text' || props.type === 'email' || props.type === 'password') && <input
                className={(meta.touched && meta.error) ? 'error-border' : '' }
                {...field}
                {...props}
                autoComplete="off"
            />}
            {props.type === 'file' &&
              <div>
                <label 
                    className='file-button btn'
                    htmlFor="image" 
                    {...field}
                    {...props}
                ><FaRegImages className='image-icon' /> Choose</label>
                <input  
                    id='image' 
                    {...field}
                    {...props}
                />
              </div>
            }
            {props.type === 'select' && 
            <select
                className={(meta.touched && meta.error) ? 'error-border' : '' }
                {...field}
                {...props}
            >
                <option>Select category</option>
                {options?.map((opt, index) => (
                    <option value={opt.url} key={index}>{opt.text}</option>
                ))}
            </select>
            }
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