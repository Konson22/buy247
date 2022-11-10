import { Routes, Route } from 'react-router-dom'
import { Navbar, MobileNavbar } from "./components/navbar";
import ScrollToTop from './helpers/ScrollToTop';
import ItemDetail from './pages/store/ItemDetail';
import Store from './pages/store';
import UploadItem from './pages/forms/Upload';
import Main from './pages/main'
import { useGlobalContext } from './contexts/GlobalContextProvider';

function App() {
  
  const { showForm } = useGlobalContext()
  return (
    <>
      <Navbar />
      <ScrollToTop />
      { showForm && <UploadItem /> }
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/upload' element={<UploadItem />} />
        <Route path='/items/:category' element={<Store />} />
        <Route path='/details/:itemId' element={<ItemDetail />} />
      </Routes>
      <MobileNavbar />
    </>
  );
}


export default App;
