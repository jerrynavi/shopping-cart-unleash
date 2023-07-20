import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { getProductById } from './useGetProducts';

export type CartItem = {
  id: number;
  quantity: number;
  price: number;
};

export const CartContext = createContext<{
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}>({
  cartItems: [],
  setCartItems: () => {
    console.info('no-op');
  },
});

export default function useCart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (id: number) => {
    const indexOf = cartItems.findIndex((c) => c.id === id);
    setCartItems((prev) => {
      return indexOf === -1
        ? [
            ...prev,
            {
              id,
              quantity: 1,
              price: parseFloat(getProductById(id)!.price.slice(1)),
            },
          ]
        : [
            ...prev.filter((c) => c.id !== id),
            { ...prev[indexOf], quantity: prev[indexOf].quantity + 1 },
          ];
    });
  };

  const numberOfItems =
    cartItems.length > 0
      ? cartItems.map(({ quantity }) => quantity).reduce((a, b) => a + b)
      : 0;

  const totalValue =
    cartItems.length > 0
      ? cartItems.map(({ price }) => price).reduce((a, b) => a + b)
      : 0;

  return {
    cartItems,
    addToCart,
    numberOfItems,
    totalValue,
  };
}
