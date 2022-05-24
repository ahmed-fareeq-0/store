// import context
import {createContext, useState} from 'react';

// create context
export const CartContext = createContext();

// create provider
export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);

    return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}