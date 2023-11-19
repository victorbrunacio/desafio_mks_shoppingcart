import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0F52BA;
    width: 100%;
    height: 101px;
    color: white;
    padding: 0 65px;
    h2{
        font-weight: 600;
    font-size: 40px;
    }
    h3{
        font-weight: 300;
    font-size: 20px;
    }
`;

const StyledContainerText = styled.div`
display: flex;
align-items: baseline;
gap: 5px;
`



export { StyledHeader, StyledContainerText }