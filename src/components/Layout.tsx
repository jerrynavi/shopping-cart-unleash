import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import useCart from '../utils/hooks/useCart';

const navItems: {
  label: string;
  url: string;
}[] = [
  {
    label: 'Featured',
    url: '/catalog?showFeatured=true',
  },
  {
    label: 'Browse all',
    url: '/catalog',
  },
  {
    label: 'Checkout',
    url: '/checkout',
  },
];

function Layout() {
  const { numberOfItems } = useCart();
  return (
    <div className="bg-alternate min-h-full flex flex-col">
      <nav className="bg-white">
        <div className="flex justify-between container mx-auto p-4 lg:px-0">
          <Link to="/">
            <figure className="text-primary">
              <BuildingStorefrontIcon className="h-8 w-8" />
            </figure>
          </Link>
          <ul className="flex gap-x-6">
            {navItems.map(({ label, url }) => (
              <li key={url}>
                <Link to={url}>
                  {url === '/checkout' && numberOfItems > 0
                    ? `Checkout (${numberOfItems})`
                    : label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-1 container mx-auto py-10 px-4 lg:px-0">
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="flex-shrink-0 bg-primary">
        <div className="container mx-auto py-8 px-4 lg:px-0">
          <h4 className="tracking-tight text-lg md:text-2xl text-white">
            About us
          </h4>
          <p className="text-sm text-white">
            We are a simple e-commerce company.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
