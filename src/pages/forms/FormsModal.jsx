import UploadItem from "./Upload";
import Login from "./Login";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";


export default function FormsModal(){

    const { showForm, setShowForm } = useGlobalContext()

    return(
        <div className='modal-wraper d-flex align-items-center justify-content-center'>
            <div className="modal-wraper__content">
                <span className='modal-wraper__close' onClick={() => setShowForm(null)}>close</span>
                { showForm === 'login' && <Login /> }
                { showForm === 'upload' && <UploadItem /> }
            </div>
        </div>
    )
}