import styled from "styled-components";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2 ;
`;

const StyledModalContentContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0; 
  display: flex;
  flex-direction: column;
  background-color: #0F52BA;
  height: 100%;
  width: 486px; 
  padding: 30px;
  box-shadow: -5px 0px 6px 0px #00000021;
  z-index: 10;
  overflow: auto;
  h1{
    font-weight: 700;
    font-size: 27px;
    color: white;
    width: 180px;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;

const StyledTotalPrice = styled.h3`
background-color: black;
padding: 20px;
border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 50px;
  position: relative;
    bottom: 0;
    font-weight: 700;
    font-size: 20px;
    color: white;
    p{
      display: flex;
      width: 100%;
    }
    span{
      font-weight: 600;
    }
`

const StyledContainerItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
`

export {
  StyledModalOverlay,
  StyledModalContentContainer,
  StyledContainerItems,
  StyledTotalPrice
}