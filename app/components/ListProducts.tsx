
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import getProducts from '../utils/getProducts';
import Image from 'next/image';
import { StyledContainerProducts, StyledEachProductContainer, SyledTitlePriceContainer, StyledGapMarginContainer } from './styles/listProductsStyle';
import PriceText from './PriceText';
import { useQuery } from '@tanstack/react-query';
import { CartContextType } from '../types/Product';
import { Product } from '../types/Product';
import useCartContext from '@/context/useCartContext';
import ButtonBuy from './ButtonBuy';


const ListProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const { addProduct, cart }: any = useCartContext() as CartContextType;
 
  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', maxWidth: '1200px', marginTop: '100px' }}>
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
        <Skeleton height={285} width={217.56} baseColor="#d4d4d4" highlightColor="#707070" />
      </div>
    )
  }

  return (
    <StyledContainerProducts>
      {data.products.map((product: Product, index: number) => (
        <StyledEachProductContainer key={index}>
          <StyledGapMarginContainer>
            <Image src={product.photo} alt={product.name} width={111} height={138} />
            <div>
              <SyledTitlePriceContainer>
                <h1>{product.name}</h1>
                <PriceText price={product.price} />
              </SyledTitlePriceContainer>
              <p>{product.description}</p>
            </div>
          </StyledGapMarginContainer>
          <ButtonBuy addFunction={()=>addProduct({id: product.id, name: product.name, price: product.price, photo: product.photo, quantity: 1 })}  />

        </StyledEachProductContainer>
        
      ))}
    </StyledContainerProducts>
  );
};

export default ListProducts;
