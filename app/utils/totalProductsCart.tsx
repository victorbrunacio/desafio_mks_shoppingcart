import { CartContextType } from '../types/Product';
import useCartContext from '@/context/useCartContext';

const TotalProductsCart = () => {
  const { cart }: any = useCartContext() as CartContextType;

  const cartTotal = cart.reduce((acc: number, item: any) => {
    return acc + item.quantity
  }, 0)
  return (
    <span>
      {cartTotal}
    </span>
  )
}

export default TotalProductsCart