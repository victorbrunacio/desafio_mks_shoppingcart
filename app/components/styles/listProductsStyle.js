import styled from "styled-components";

const StyledContainerProducts = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 5rem;
    max-width: 1200px;
    gap: 50px;
`
const StyledEachProductContainer = styled.div`
  width: 217.56px;
    height: 285px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #2C2C2C;
    background-color: white;
    box-shadow: 0px 2px 8px 0px #00000022;
    border-radius: 8px;
  
    p{
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        max-height: 25px;
    }
`
const SyledTitlePriceContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
h1{

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    max-width: 124px;
}
`
const StyledGapMarginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    padding: 10px;
`

export {
    StyledContainerProducts,
    StyledEachProductContainer,
    SyledTitlePriceContainer,
    StyledGapMarginContainer
}