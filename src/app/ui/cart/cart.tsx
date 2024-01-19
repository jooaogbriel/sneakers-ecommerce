import img from '@/images/image-product-1-thumbnail.jpg'
import Image from 'next/image';

const Cart = () => {
  return (
    <div>
      <Image src={img} alt="Product" />
      <div>
      </div>
    </div>
  );
};

export default Cart;

