// pages/index.js
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Appareil à raclette",
      price: 39.5,
      description: "Location appareil à raclette traditionnelle.",
    },
    {
      id: 2,
      name: "Grand couteau/10pc",
      price: 0.35,
      description: "Jewel – grand couteau.",
    },
    // Add more products here...
  ];

  return (
    <div>
      <Header />
      <Hero />
      <ProductList products={products} />
      <Footer />
    </div>
  );
};

export default Home;
