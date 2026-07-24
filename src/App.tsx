import { Routes, Route } from 'react-router'
import SiteHeader from './components/site-header'
import SiteFooter from './components/site-footer'
import FloatingContact from './components/floating-contact'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:slug" element={<ProductCategory />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}
