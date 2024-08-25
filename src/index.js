import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.js';
import Auth from './context/Auth.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
   <Auth>
     <RouterProvider router={router} />
   </Auth>
  
);

reportWebVitals();
