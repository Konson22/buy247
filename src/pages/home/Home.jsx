import Header from './Header'
import FeaturedProducts from './FeaturedProducts'
import Features from './Features'
import './css/home.css'
import TopSallers from './TopSallers'

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <TopSallers />
      <Features />
    </div>
  )
}
