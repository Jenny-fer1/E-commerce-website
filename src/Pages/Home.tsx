

import Header from '../components/Header/Header'
import CategoryGrid from '../components/Category/CategoryGrid'
import FeaturedPostCardSection from '../components/Featured Post/FeaturedPostsSection'
import Footer from '../components/Footer/Footer'
import CTASection from '../components/CTA Section/CTASection'
import Testimonial from '../components/Testimonial/Testimonial'
import BestServices from '../components/Best Service/BestServices'
import ProductGrid from '../components/Product Grid/ProductGrid'

function Home() {

  return (
    <div>
      <Header/>
      <CategoryGrid/>
      <ProductGrid/>
      <BestServices/>
      <FeaturedPostCardSection/>
      <Testimonial/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home;
