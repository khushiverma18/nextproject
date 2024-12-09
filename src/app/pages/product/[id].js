// pages/product/[id].js
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock data for demonstration; replace with real API data
  const products = [
    {
      id: "1",
      name: "Cheese – appareil à raclette 1/2 roue",
      price: 39.5,
      reference: "VABGN5",
      dimensions: "20cm x 50cm",
      power: "220V, 900W",
      description: `Location appareil à raclette - Raclette traditionnelle 1/2 roue.
                    Réglable en hauteur, Appareil à raclette professionnel avec boîtier de chauffe horizontal.`,
    },
    {
      id: "2",
      name: "Jewel – grand couteau/10pc",
      price: 0.35,
      reference: "VAJGC",
      dimensions: "10 pieces",
      description: `Jewel – grand couteau sélectionné rigoureusement pour vos événements comme mariages, fêtes, ou anniversaires.`,
    },
  ];

  // Find the product that matches the `id` from the URL
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold">Produit introuvable</h1>
        <p>Le produit que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600">Référence : {product.reference}</p>
      <p className="text-gray-600">Dimensions : {product.dimensions}</p>
      <p className="text-gray-600">Puissance : {product.power}</p>
      <p className="text-gray-600 mb-4">Prix : {product.price}€ / pièce</p>
      <p className="text-gray-700 mb-8">{product.description}</p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductPage;
