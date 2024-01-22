import img from '@/images/image-product-1-thumbnail.jpg'
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import { product } from '@/app/constants';

const Cart = () => {
  const { cart, handleRemoveItemFromCart, clearCart} = useContext(CartContext);

  return (
    <div className='right-0 bg-white p-4 shadow-md '>
      {cart.length === 0 ? (
        <div className='flex flex-col items-start p-3 mb-4'>
          <h1 className=''>Cart</h1>
          <p>Seu carrinho está vazio.</p>
        </div>
      ) : (
        <div>
          {/* Renderize os itens do carrinho aqui */}
          {cart.map((item, index) => (
            // Renderize os detalhes do item do carrinho aqui
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <Image alt='' src={img}></Image>
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

