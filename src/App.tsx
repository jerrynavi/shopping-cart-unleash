import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartContext, CartItem } from './utils/hooks/useCart';
import routes from './utils/routes';
import FlagProvider, { IConfig } from '@unleash/proxy-client-react';

const config: IConfig = {
  url: 'http://localhost:4242/api/frontend', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey: 'default:development.unleash-insecure-frontend-api-token', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: 'shopping-cart', // The name of your application. It's only used for identifying your application
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const router = createBrowserRouter(routes);
  return (
    <FlagProvider config={config}>
      <CartContext.Provider
        value={{
          cartItems,
          setCartItems,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </FlagProvider>
  );
}

export default App;
