import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.tsx';
import RootLayout from './pages/RootLayout.tsx';
import SearchPage from './pages/SearchPage.tsx';
import DetailsPage from './pages/DetailsPage.tsx';
import AppProvider from './context/AppContext.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'search-results/:page',
        element: <SearchPage />,
      },
      {
        path: 'movie-details/:movieId',
        element: <DetailsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
