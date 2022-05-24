// import style product
import { Container, Wrapper,ImgContainer,Image, InfoContainer, Title, Desc ,Price, FilterContainer, Filter, Button, Amount, AmountContainer,AddContainer, FilterSizeOption, FilterSize, FilterColor, FilterTitle, } from './styleProduct';

// import components
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import NewsLetter from '../../components/news/NewsLetter';

// import icons
import { Add, Remove } from '@material-ui/icons';



const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
        <Wrapper>
        <ImgContainer><Image src="https://i.ibb.co/S6qMxwr/jean.jpg" /></ImgContainer>

        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>

        </InfoContainer>

        </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Product;
