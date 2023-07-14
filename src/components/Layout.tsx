import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/catalog?showFeatured=true">Featured</Link>
          </li>
          <li>
            <Link to="/catalog">Browse all</Link>
          </li>
          <li>
            <Link to="#">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <p>About us</p>
        <p>We are a simple e-commerce company.</p>
      </footer>
    </div>
  );
}

export default Layout;
