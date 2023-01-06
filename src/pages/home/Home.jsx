import Header from './Header'
import FeaturedItems from './FeaturedItems'
import Features from './Features'
import './css/home.css'
import TopSallers from './TopSallers'

export default function Home() {
  return (
    <div>
      <Header />
      <FeaturedItems />
      <TopSallers />
      <Features />
    </div>
  )
}
