import { useGlobalContext } from "../../contexts/GlobalContextProvider"
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'


export default function Login(){

    const { setShowForm } = useGlobalContext()

    return(
        <div className="upload-form">
            <div className="text-center mb-4">
                <h5>Login with</h5>
                <div className="d-flex justify-content-center">
                    <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-danger'>
                        <FaGoogle />
                    </span>
                    <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-info'>
                        <FaFacebook />
                    </span>
                    <span className='icon-wraper rounded-circle d-flex align-items-center justify-content-center text-white bg-info'>
                        <FaTwitter />
                    </span>
                </div>
            </div>
            <div className="text-center mb-1">
                <h5>Login with E-mail</h5>
            </div>
            <form>
                <div className='input-container'>
                    <label htmlFor="email">E-mail</label>
                    <input name='email' type="email" placeholder='example@gmail.com' />
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Password</label>
                    <input name='password' type="text" placeholder='*******' />
                </div>
                <div className="">
                    <button className="btn my-button" type="submit">Login</button>
                </div>
                <div className="text-center mt-3">
                    I don't have account <span onClick={() => setShowForm('register')}>Sign up</span>
                </div>
            </form>
        </div>
    )
}