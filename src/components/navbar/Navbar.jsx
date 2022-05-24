// import Link 
import {Link} from 'react-router-dom';

// import style Navbar
import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, Menuitem } from './styleNavbar';
// import icons
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

// import add to cart 
import { CartContext } from "./../dataContext/DataContext"
import {useContext} from 'react'

const Navbar = () => {

    // use context in data context
    const [cart , setCart] = useContext(CartContext)

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                    <SearchContainer>
                        <Input /> 
                        <Search style={{color:'gray', fontSize:16}}/>
                    </SearchContainer>
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
            <Right>
                <Link to="/register" style={{textDecoration:'none', color:'black'}}>
                    <Menuitem>REGISTER</Menuitem> 
                </Link>

                <Link to="/login" style={{textDecoration:'none', color:'black'}}>
                 <Menuitem>SIGN IN</Menuitem> 
                </Link>
                    <Menuitem>
                        <Link to="cart" style={{color:'black'}}>
                            <Badge badgeContent={cart.length} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Link>
                    </Menuitem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

