import { lazy } from 'react';
import Home from './Home';

const Checkout = lazy(() => import('./Checkout'));
const Catalog = lazy(() => import('./Catalog'));

export { Home, Checkout, Catalog };
