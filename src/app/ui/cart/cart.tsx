import img from '@/images/image-product-1-thumbnail.jpg'
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import { product } from '@/app/constants/index'

const Cart = () => {
  const { cart, handleRemoveItemFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {/* Renderize os itens do carrinho aqui */}
          {cart.map((item, index) => (
            // Renderize os detalhes do item do carrinho aqui
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button onClick={() => handleRemoveItemFromCart(index)}>Remover</button>
            </div>
          ))}
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

