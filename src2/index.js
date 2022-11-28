import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './global-style/global-style.css'
import GlobalContextProvider from './contexts/GlobalContextProvider';
import ItemsContextProvider from './contexts/ItemsContextProvider';
// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ItemsContextProvider>
          <App />
        </ItemsContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


