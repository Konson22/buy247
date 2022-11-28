import { FaRegImages } from 'react-icons/fa'


export default function FormField({field, col='md-5'}){


    return(
        <div className={`input-container ${col}`} key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {(field.type === 'text' || field.type === 'email' || field.type === 'password') && <input
                {...field}
            />}
            {field.type === 'file' &&
              <div>
                <label className='file-button btn' htmlFor="image" >
                    <FaRegImages className='image-icon' /> Choose
                </label>
                <input id='image' {...field} />
              </div>
            }
            {field.type === 'select' && 
            <select {...field} >
                <option>Select {field.name}</option>
                {field?.options?.map((opt, index) => (
                    <option value={opt.url} key={index}>{opt.text}</option>
                ))}
            </select>
            }
            {field.type === 'textarea' &&
                <textarea {...field} ></textarea>
            }
        </div>
    )
}