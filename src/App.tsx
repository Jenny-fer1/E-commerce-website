
import './App.css'
import Header from './components/Header/Header'
import CategoryGrid from './components/Category/CategoryGrid'
import FeaturedPostsSection from './components/Featured Post/FeaturedPostsSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <CategoryGrid/>
      <FeaturedPostsSection/>
      <Footer/>
    </div>
  )
}

export default App
