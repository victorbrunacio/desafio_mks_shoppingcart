import useCartContext from "@/context/useCartContext";
import styled from "styled-components"
import { CartContextType } from "../types/Product";
import CloseButton from "./CloseButton";
import ButtonQuantity from "./ButtonQuantity";

const StyledContainerItems = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
background-color: white;
width: 379px;
height: 95px;
box-shadow: -2px 2px 10px 0px #0000000D;
border-radius: 8px;
color: black;
margin-top: 50px;
img{
  width: 46px;
  height: 57px;
}
h2{
  height:33px ;
  width: 113px;
  font-weight: 400;
  font-size: 13px;
}
h3{
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}
 button{
  height: 18px;
  width: 18px;
  position: relative;
  top: -44px;
  right: -5px;
}
`
const SelectedProductCart = () => {
  const { cart, removeProduct }: any = useCartContext() as CartContextType;
 
  return (
    <>
    {
      cart.map((item: CartContextType, index: any) => {
        return (
          <StyledContainerItems key={index}>
              <img src={item.photo} alt={item.name} />
              <h2>{item.name}</h2>
              <ButtonQuantity  quantity={item.quantity} productId={item.id}/>
              <h3>{item.price}</h3>
              <CloseButton closeBtn={() => removeProduct(item.id)}/>
          </StyledContainerItems>
        )
      })
    }
    </>
  )
}

export default SelectedProductCart