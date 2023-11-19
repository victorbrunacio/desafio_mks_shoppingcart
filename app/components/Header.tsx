import { StyledHeader, StyledContainerText } from "./styles/headerStyle"
import CartButton from "./CartButton"

const Header = () => {
    return (
        <StyledHeader>
            <StyledContainerText>
                <h2>MKS</h2>
                <h3>Sistemas</h3>
            </StyledContainerText>
            <CartButton />
        </StyledHeader>
    )
}

export default Header;