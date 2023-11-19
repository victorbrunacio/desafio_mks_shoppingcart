"use client"

import { StyledModalContentContainer, StyledModalOverlay, StyledContainerItems, StyledTotalPrice } from "./styles/cartModalStyle"
import SelectedProductCart from './SelectedProductCart';
import CloseButton from './CloseButton';
import formatarNumeroComSeparadorMilhar from "@/app/utils/formatPrice";
import TotalProductsCart from "../utils/totalProductsCart";

interface CartModalProps {
  handleToggleModal: () => void;
  cart: any[]; // replace any with the actual type of the items in the cart array if available
  total: number;
}

const CartModal = ({handleToggleModal, cart, total }: CartModalProps) => {
    
  return (
    <>
      <StyledModalOverlay>
        <StyledModalContentContainer>
          <div>
            <h1>Carrinho de compras</h1>
            <CloseButton closeBtn={handleToggleModal} />
          </div>
          <StyledContainerItems>
            <SelectedProductCart />
            {cart.length === 0 && (
              <p>Seu carrinho esta vazio</p>
            )}
          </StyledContainerItems>
          <StyledTotalPrice>
            <p>Número de produtos...... <TotalProductsCart/></p>

            <p> Valor Total R$ {formatarNumeroComSeparadorMilhar(total)},00</p>
          </StyledTotalPrice>
        </StyledModalContentContainer>
      </StyledModalOverlay>
    </>
  )
}

export default CartModal