import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar";
import ScrollToTop from './helpers/ScrollToTop';
import Main from './pages/main'
import Products from './pages/products';
import Upload from './pages/forms/Upload';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import ProductDetail from './pages/products/ProductDetail';
import ProductSearch from './pages/products/ProductSearch';


function App() {
  
  return (
    <div className='app-wraper'>
      <Navbar />
    <div className='app-content'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='products/search/:query' element={<ProductSearch />} />
        <Route path='/product/detail/:itemId' element={<ProductDetail />} />
      </Routes>
    </div>
    </div>
  );
}


export default App;
