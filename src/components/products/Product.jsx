// import icons 
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";

// import style product
import { Container, Circle, Image, Info, Icon } from "./styleProducts";



// import add to cart 
import { CartContext } from "./../dataContext/DataContext";
import {useContext} from 'react';

const Product = ({item}) => {

      // use context in data context
      const [cart , setCart] = useContext(CartContext)

      // function Add number to cart
      const AddToCart = () => {
        const product = {id: item.id, name: item.name, price: item.price, img: item.img, size:item.size,}
        console.log(product);
        setCart(currentCart => [...currentCart, product])
      }

    return (
      
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
              <Icon>
                <ShoppingCartOutlined onClick={AddToCart} />
              </Icon>
              <Icon>
                <SearchOutlined />
              </Icon>
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Info>
        </Container>
     
      );
}

export default Product;

