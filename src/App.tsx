
import './App.css'
import Header from './components/Header/Header'
import CategoryGrid from './components/Category/CategoryGrid'
import FeaturedPostsSection from './components/Featured Post/FeaturedPostsSection'
import Footer from './components/Footer/Footer'
import CTASection from './components/CTA Section/CTASection'
import Testimonial from './components/Testimonial/Testimonial'
import BestServices from './components/Best Service/BestServices'
import ProductGrid from './components/Product Grid/ProductGrid'

function App() {

  return (
    <div>
      <Header/>
      <CategoryGrid/>
      <ProductGrid/>
      <BestServices/>
      <FeaturedPostsSection/>
      <Testimonial/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App
