import { RouteObject } from 'react-router-dom';
import { Catalog, Checkout, Home, ViewProduct } from '../pages';
import Layout from '../components/Layout';

export default [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'catalog',
        children: [
          {
            index: true,
            element: <Catalog />,
          },
          {
            path: 'product/:id',
            element: <ViewProduct />,
          },
        ],
      },
    ],
  },
] as RouteObject[];
