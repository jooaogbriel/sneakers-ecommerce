import img from '@/images/image-product-1-thumbnail.jpg'
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '@/app/contexts/CartContext';
import lix from '@/images/icon-delete.svg'

const Cart = () => {
  const { cart, handleRemoveItemFromCart, clearCart} = useContext(CartContext);

  return (
    <div className='right-0 bg-white p-4 shadow-md rounded-lg'>
      {cart.length === 0 ? (
        <div className='p-3 mb-4 '>
          <h1 className='font-semibold mb-5 '>Cart</h1>
          <p className=' font-medium text-Darkgrayishblue'>Your cart is empty.</p>
        </div>
      ) : (
        <div className='flex flex-col'>
          <h1 className='font-semibold mb-5' >Cart</h1>
          {/* Renderize os itens do carrinho aqui */}
          {cart.map((item, index) => (
            // Renderize os detalhes do item do carrinho aqui
            <div key={index} className='flex '>
              <Image className='rounded-lg flex h-14 w-14' alt='' src={img}></Image>
              <div className='flex flex-col ml-5'>
                <p className=' font-light text-Darkgrayishblue'>{item.title}</p>
                <p className=' font-semibold '>$ {item.price}</p>
              </div>
              <div className='flex justify-between '>
                <button onClick={() => handleRemoveItemFromCart(index)}>
                  <Image className='w-[23px] h-5 cursor-pointer' alt='' src={lix}></Image>
                </button>
              </div>
            </div>
          ))}
          <button className='w-full mt-5 h-[50px] rounded-lg font-bold bg-primary text-white'>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

