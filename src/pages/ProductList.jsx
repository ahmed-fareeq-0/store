// import components
import Navbar from './../components/navbar/Navbar'
import Announcement from './../components/announcement/Announcement'
import Filter from './../components/filter/Filter'
import Product from './../components/products/Products'
import Footer from './../components/footer/Footer'
import NewsLetter from './../components/news/NewsLetter'

const ProductList = () => {
  return (
    <div>
        <Announcement />
        <Navbar /> 
        <Filter />
        <Product />
        <NewsLetter />
        <Footer />
   </div>
  );
}

export default ProductList;
