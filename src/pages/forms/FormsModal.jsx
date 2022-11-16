import UploadItem from "./Upload";
import Login from "./Login";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { FaTimes } from 'react-icons/fa'

export default function FormsModal(){

    const { showForm, setShowForm } = useGlobalContext()

    return(
        <div className='modal-wraper d-flex align-items-center justify-content-center'>
            <div className="modal-wraper__content">
                <div className='modal-wraper__close rounded-circle d-flex align-items-center justify-content-center' onClick={() => setShowForm(null)}>
                    <FaTimes />
                </div>
                { showForm === 'login' && <Login /> }
                { showForm === 'upload' && <UploadItem /> }
            </div>
        </div>
    )
}