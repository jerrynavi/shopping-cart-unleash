import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartContext, CartItem } from './utils/hooks/useCart';
import routes from './utils/routes';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const router = createBrowserRouter(routes);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
