// contexts/CartContext.js
import { useState, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  
  function handleAddItemToCart(title, price, img) {
    // Verifica se o produto já está no carrinho com base no título
  const isProductInCart = cart.some(item => item.title === title);

  // Se o produto não estiver no carrinho, adicione-o
  if (!isProductInCart) {
    const itemObject = { title, price, img };
    setCart([...cart, itemObject]);
  }
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
    <CartContext.Provider value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}
