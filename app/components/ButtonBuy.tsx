import BagIcon from "@/public/BagIcon";
import styled from "styled-components";



const StyledBuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    color: white;
    position: relative;
    top: 0px;
    height: 31.91px;
    width: 100%;
    background-color: #0F52BA;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

const ButtonBuy = ({addFunction}: any) => {

    return (
        <>
            <StyledBuyButton onClick={addFunction}>
                <BagIcon />
                COMPRAR
            </StyledBuyButton>
        </>
    )
}

export default ButtonBuy
