import { Add, Remove } from "@material-ui/icons";
import Announcement from "./../../components/announcement/Announcement";
import Footer from "./../../components/footer/Footer";
import Navbar from "./../../components/navbar/Navbar";

// import style 
import { 
    Container,
    Wrapper,
    Title,
    Top,
    TopButton,
    TopText,
    TopTexts,
    Bottom,
    Info,
    ProductDetail,
    ProductAmountContainer,
    PriceDetail,
    ProductSize,
    ProductColor,
    ProductId,
    ProductName,
    Details,
    Image,
    Product,
    SummaryItem,
    SummaryTitle,
    Summary,
    ProductPrice,
    ProductAmount,
    Button,
    SummaryItemText,
    SummaryItemPrice
  } from './styleCart';


  // import add to cart 
import { CartContext } from "./../../components/dataContext/DataContext"
import {useContext} from 'react'


const Cart = () => {


      // use context in data context
      const [cart , setCart] = useContext(CartContext)
      const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

      if(cart.length > 0) {
        console.log("yes");
      }else {
        return (
            <Container>
              <Navbar />
              <Announcement />
              <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                  <Info>
        
                <h3 style={{textAlign:"center", marginTop:"120px"}}>The products you bought here will appear</h3>
              
                  </Info>
                  <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                      <SummaryItemText>Estimated Shipping</SummaryItemText>
                      <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>$ 0</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                  </Summary>
                </Bottom>
              </Wrapper>
              <Footer />
            </Container>
        )
      }

      return (
        <Container>
          <Navbar />
          <Announcement />
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>

              {cart.map(item => (
              <Product>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> 93813718293
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> {item.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>1</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ {item.price}</ProductPrice>
                  </PriceDetail>
                </Product> 
            ))}
    
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </Bottom>
          </Wrapper>
          <Footer />
        </Container>
      );


  
};

export default Cart;