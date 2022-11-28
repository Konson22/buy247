

export default function LoadingSpinner(){
    return(
        <div className='form-loader d-flex align-items-center justify-content-center'>
            <div className="form-loader__content text-center">
                <img src={process.env.PUBLIC_URL+'/images/loader.gif'} alt='Loading...' />
                <div className="mt-3">
                    <h5>Please wait...</h5>
                </div>
            </div>
        </div>
    )
}
