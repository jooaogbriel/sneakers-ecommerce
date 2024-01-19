// contexts/CartContext.js
import { createContext} from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  function handleAddItemToCart(name, price, img) {
    const itemObject = { name, price, img };
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
