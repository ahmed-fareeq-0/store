
// import components
import Announcement from '../components/announcement/Announcement'
import Categories from '../components/categories/Categories'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'
import Products from '../components/products/Products'
import NewsLetter from '../components/news/NewsLetter'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products/>
        <NewsLetter/>
        <Footer />
    </div>
  )
}

export default Home