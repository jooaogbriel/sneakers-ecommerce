// contexts/CartContext.js
import { createContext} from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const helloWorld = 'oi'

  return  (
    <CartContext.Provider value={{helloWorld}}>
      {children}
    </CartContext.Provider>
  )
}
