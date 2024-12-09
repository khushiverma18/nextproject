import Header from './components/Header';
import Hero from './components/Hero';
import SimilarProductsSection from './components/ProductCard';
import Footer from './components/Footer';
import ProductsSection from './components/ProductList';
import ServiceSection from './components/last';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductsSection/>
      <SimilarProductsSection/>
      <ServiceSection/>
      <Footer />
    </div>
  );
}
