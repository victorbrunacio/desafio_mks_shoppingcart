"use client"
import CartIcon from '@/public/CartIcon';
import { useState } from 'react';
import CartModal from './CartModal';
import styled from "styled-components";
import { CartContextType } from '../types/Product';
import useCartContext from '@/context/useCartContext';
import TotalProductsCart from '../utils/totalProductsCart';

const StyledCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: black;
    font-weight: 700;
    height: 45px;
    font-size: 18px;
    width: 90px;
    height: 45px;
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
`
const CartButton = () => {
  const { cart, total }: any = useCartContext() as CartContextType;
  const [isModalOpen, setIsModalOpen] = useState(false);
 console.log(cart)
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const cartTotal = cart.reduce((acc: number, item: any) => {
    return acc + item.quantity
  }, 0)
  
  return (
    <>
      <StyledCartContainer onClick={handleToggleModal} >
        <CartIcon />
        <TotalProductsCart />
      </StyledCartContainer>
      {isModalOpen && <CartModal handleToggleModal={handleToggleModal} cart={cart} total= {total}/>}
    </>

  )
}

export default CartButton