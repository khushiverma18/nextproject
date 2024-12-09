"use client"; 
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Left Column: Product Image */}
          <div className="flex justify-center">
            <img 
              src="/pic.png" // Add the product image in the public folder
              alt="Appareil à raclette"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Right Column: Product Information */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cheese - Appareil a raclette 1/2 roue</h1>
            <p className="text-lg text-gray-700 mb-4">Réglable en hauteur | Appareil à raclette professionnel</p>

            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xl font-semibold text-gray-900">39,50€</span>
              <span className="text-sm text-gray-600">/pièce</span>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              <strong>Référence: </strong> VABGN5
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Dimensions: 20cm x 50cm
            </p>

            <p className="text-sm text-gray-500 mb-4">
              220V | 900W
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="quantity" className="text-gray-700">Quantité:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <button className="bg-blue-600 text-white px-6 py-2  rounded-md hover:bg-blue-700">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Left Column: Product Image */}
          <div className="text-gray-700">
              <h3 className="font-semibold">Description produit</h3>
              <p className="text-sm text-gray-500">
                Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver toute une série d'autres produits à louer de ce type dans la catégorie "Art de la Table".
              </p>
            </div>

          {/* Right Column: Product Information */}
          <div>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700">Livraisons</h3>
              <p className="text-sm text-gray-500">
                Livraison rapide disponible. Contactez-nous pour plus de détails.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700">Questions</h3>
              <p className="text-sm text-gray-500">
                Vous avez des questions? N'hésitez pas à nous contacter pour plus d'informations.
              </p>
            </div>
            </div>
          </div>
        </div>
    </section>
  )}