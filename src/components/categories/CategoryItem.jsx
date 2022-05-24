// import style in style categories
import { Container, Image, Info, Title, Button } from "./styleCategories";

// import link 
import {Link} from 'react-router-dom'
const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Link to="/products">
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Link>
    </Container>
  );
}

export default CategoriesItem;
