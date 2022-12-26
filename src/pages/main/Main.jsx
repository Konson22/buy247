import Header from './Header'
import Categories from './Categories'
import Products from './Products'
import Features from './Features'
import Testimonies from './Testimonies'
import Footer from '../../components/footer'
import './css/main.css'

export default function Main(){
    return(
        <main className='navbar-wraper'>
            <Header />
            <Categories />
            <Products />
            <Features />
            <Testimonies />
            <Footer />
        </main>
    )
}