import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 1px solid #000;
  border-radius: 5px;

  button { 
  position: static;
  width: 15px;
  height: 15px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
`

const QuantityDisplay = styled.div`
  width: 30px;
  text-align: center;
`
export {
  ButtonContainer,QuantityDisplay
}