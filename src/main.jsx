import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
