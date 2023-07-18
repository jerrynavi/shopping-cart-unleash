import { lazy } from 'react';
import Home from './Home';

const Checkout = lazy(() => import('./Checkout'));
const Catalog = lazy(() => import('./Catalog'));
const ViewProduct = lazy(() => import('./ViewProduct'));

export { Home, Checkout, Catalog, ViewProduct };
