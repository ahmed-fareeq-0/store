// import cpmponents
import Product from './pages/pageProduct/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Cart from './pages/cart/Cart.jsx';
import Home from './pages/Home.jsx';

// import eact ruoter dom 
import { BrowserRouter as Router ,  Switch,  Route,  } from "react-router-dom";

// import cart provider 
import {  CartProvider } from "./components/dataContext/DataContext";

const App = () => {
  return (
    
    <CartProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
    </CartProvider>
  );
}

export default App;
