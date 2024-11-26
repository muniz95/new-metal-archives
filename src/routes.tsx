import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/features/home';
import Layout from '@/layouts/default';
import NotFound from '@/pages/not-found';
import Alphabteical from './features/bands/alphabteical';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      return {
        name: 'Admin',
        role: 'Administrator'
      }
    },
    id: 'root',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'bands',
        children: [
          {
            path: 'alphabetical',
            element: <Alphabteical />,
          },
          {
            path: 'country',
            element: <Home />,
          },
          {
            path: 'genre',
            element: <Home />,
          },
        ]
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]
  },
]);

export const AppRouter = () => <RouterProvider router={browserRouter} />;