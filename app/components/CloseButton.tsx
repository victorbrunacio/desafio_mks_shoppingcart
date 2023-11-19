import styled from 'styled-components';

const StyledCloseButton = styled.button`
  border-radius: 50%;
  background-color: black;
  color: white;
  cursor: pointer;
  height: 38px;
  width: 38px;
`;
type CloseButtonProps = {
  closeBtn: () => void;
  };
const CloseButton = ({closeBtn}:CloseButtonProps) => {   
  return (
    <StyledCloseButton onClick={closeBtn}>X</StyledCloseButton>
  )
}

export default CloseButton