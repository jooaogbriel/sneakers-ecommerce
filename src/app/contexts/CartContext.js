// contexts/CartContext.js
import { useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  function handleAddItemToCart(title, price, img) {
    const itemObject = { title, price, img };
    setCart([...cart, itemObject])
  }

  function handleRemoveItemFromCart(clickedItemIndex){
    const filteredCart = cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
      );
      setCart(filteredCart)
  }

  function clearCart() {
    setCart([]);
  }
  

  return  (
    <CartContext.Provider value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
