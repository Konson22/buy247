import Header from './Header'
import Categories from './Categories'
import Products from './Products'
import './css/main.css'
import Features from './Features'
import Testimonies from './Testimonies'
import Benefits from './Benefits'
import Footer from '../../components/footer'

export default function Main(){
    return(
        <main className='navbar-wraper'>
            <Header />
            <Benefits />
            <Categories />
            <Products />
            <Features />
            <Testimonies />
            <Footer />
        </main>
    )
}