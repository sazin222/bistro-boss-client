import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/Authprovider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
   <HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </HelmetProvider>
   </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
