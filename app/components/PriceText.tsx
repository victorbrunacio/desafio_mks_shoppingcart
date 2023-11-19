import styled from "styled-components";

const StyledPriceText = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 31px;
    width: 69px;
    border-radius: 5px;
    background-color: #373737;
    font-weight: 700;
    font-size: 15px;
    color: white;
`

type PriceTextProps = {
    price: string;
};

const PriceText = ({ price }: PriceTextProps) => {
    const formattedPrice = Math.floor(Number(price));
    return <StyledPriceText>{`R$ ${formattedPrice}`}</StyledPriceText>;
};

export default PriceText;