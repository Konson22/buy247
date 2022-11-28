import Header from "./Header";
import Features from "./Features";
import UploadedItems from "./UploadedItems";
import Services from "./Services";
import './css/main.css'



export default function MainPage(){

    return(
        <main>
            <Header />
            <Services />
            <UploadedItems />
            <Features />
        </main>
    )
}


            // <div className='my-container'>
            //     <div className="features-container d-flex align-items-center justify-content-between">
            //         <div className="features-card d-flex align-items-center">
            //             <FaUser className="features-card__icon" />
            //             <div className="features-card__text-wraper">
            //                 <h4>Always available</h4>
            //                 <p>
            //                     Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
            //                 </p>
            //             </div>
            //         </div>
            //         <div className="features-card d-flex align-items-center">
            //             <FaHandshake className="features-card__icon" />
            //             <div className="features-card__text-wraper">
            //                 <h4>Quick guider</h4>
            //                 <p>
            //                     Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
            //                 </p>
            //             </div>
            //         </div>
            //         <div className="features-card d-flex align-items-center">
            //             <FaUser className="features-card__icon" />
            //             <div className="features-card__text-wraper">
            //                 <h4>Fast way to make money</h4>
            //                 <p>
            //                     Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="app-content d-flex">
            //         <Shopps />
            //         <div className="app-body">
            //             <div className="app-body__section">
            //                 <h2>New arrival items</h2>
            //                 {loading && 'Loading...'}
            //                 {(!loading && errors) && 'error occures!'}
            //                 {(!loading && items.length >= 1 ) && <Items items={items.slice(1,9)} col='col4' /> }
            //                 <div className="text-center mt-4">
            //                     <Link className='btn btn-primary' to='/items/all'>View more <FaArrowRight /></Link>
            //                 </div>
            //             </div>
            //             <div className="ads__section">
            //                 <h2>New items</h2>
            //             </div>
            //             <div className="app-body__section">
            //                 <h2>New items</h2>
            //             </div>
            //         </div>
            //     </div>
            // </div>