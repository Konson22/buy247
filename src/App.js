import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from './components/Loaders';
import Navbar from "./components/navbar";
import { useGlobalContext } from './contexts/GlobalContextProvider';
import ScrollToTop from './helpers/ScrollToTop';

// const Main = lazy(() => import('./pages/main/Main'))
const Home = lazy(() => import('./pages/home/Home'))
const Products = lazy(() => import('./pages/products/Products'))
const Upload = lazy(() => import('./pages/forms/Upload'))
const Login = lazy(() => import('./pages/forms/Login'))
const FormsModal = lazy(() => import('./pages/forms/FormsModal'))
const Register = lazy(() => import('./pages/forms/Register'))
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'))
const ProductSearch = lazy(() => import('./pages/products/ProductSearch'))

function App() {
  
  const { showForm } = useGlobalContext()

  return (
    <div className='app-wraper'>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        { showForm && <FormsModal /> }
        <div className='app-content'>
          <ScrollToTop />
          <Routes>
            {/* <Route path='/' element={<Main />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='products/search/:query' element={<ProductSearch />} />
            <Route path='/product/detail/:itemId' element={<ProductDetail />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}


export default App;
