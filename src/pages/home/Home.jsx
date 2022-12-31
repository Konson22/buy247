import Header from './Header'
import FeaturedProducts from './FeaturedProducts'
import Features from './Features'
import './css/home.css'

export default function Home() {
  return (
    <div>
        <Header />
        <div className="sm-hide">
          <Features />
        </div>
        <FeaturedProducts />
        <div className="lg-hide">
          <Features />
        </div>
    </div>
  )
}
