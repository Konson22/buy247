import { Routes, Route } from 'react-router-dom'
import Appbar from "./components/appbar";
// import { Navbar, MobileNavbar } from "./components/navbar";
import ScrollToTop from './helpers/ScrollToTop';
import ItemDetail from './pages/store/ItemDetail';
import Store from './pages/store';
import UploadItem from './pages/forms/UploadProduct';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';
import Main from './pages/main'
import { useGlobalContext } from './contexts/GlobalContextProvider';
import Footer from './components/footer';
import SearchPage from './pages/search';
import ProductsPage from './pages/products';

function App() {
  
  const { showForm } = useGlobalContext()
  return (
    <div className='app-wraper'>
      <Appbar />
      <ScrollToTop />
      <div className='sm-hide'>
        { showForm === 'login' && <Login /> }
        { showForm === 'upload' && <UploadItem /> }
        { showForm === 'register' && <Register /> }
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/upload' element={<UploadItem />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/items/:category' element={<Store />} />
        <Route path='/products/:query' element={<ProductsPage />} />
        <Route path='/search/:searchQuery' element={<SearchPage />} />
        <Route path='/details/:itemId' element={<ItemDetail />} />
      </Routes>
      <Footer />
      {/* <MobileNavbar /> */}
    </div>
  );
}


export default App;
