import React from 'react';
import { ButtonContainer, QuantityDisplay } from './styles/buttonQuantityStyle';
import useCartContext from '@/context/useCartContext';
import { CartContextType } from '../types/Product';

const ButtonQuantity = ({ quantity, productId }: { quantity: number, productId: number }) => {
  const { cart, updateCartItemQuantity }: any = useCartContext() as CartContextType;

  const handleMinus = () => {
    if (quantity > 1) {
      updateCartItemQuantity(productId, quantity - 1);
    }
  };

  const handlePlus = () => {
    updateCartItemQuantity(productId, quantity + 1);
  };

  return (
    <ButtonContainer>
      <button onClick={handleMinus}>-</button>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <button onClick={handlePlus}>+</button>
    </ButtonContainer>
  );
};

export default ButtonQuantity;
