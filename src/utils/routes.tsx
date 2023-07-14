import { RouteObject } from 'react-router-dom';
import { Catalog, Checkout, Home } from '../pages';
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
        element: <Catalog />,
      },
    ],
  },
] as RouteObject[];
