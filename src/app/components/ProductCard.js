'use client'; // This will mark the component as a client-side component

import { useState } from 'react';
import Image from 'next/image';

export default function SimilarProductsSection() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const products = [
    { title: 'Art de la table', price: '0,35€', ref: 'VABGN5', pieces: 20, imgSrc: '/table.png' },
    { title: 'Art de la table', price: '0,35€', ref: 'VABGN5', pieces: 20, imgSrc: '/table.png' },
    { title: 'Art de la table', price: '0,35€', ref: 'VABGN5', pieces: 20, imgSrc: '/table.png' },
    { title: 'Art de la table', price: '0,35€', ref: 'VABGN5', pieces: 20, imgSrc: '/table.png' },
    { title: 'Art de la table', price: '0,35€', ref: 'VABGN5', pieces: 20, imgSrc: '/table.png' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Ces produits pourraient vous intéresser</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <Image
                  src={product.imgSrc} // Add the product images inside the public folder
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-xl text-gray-800 mb-2">{product.price} / Pièce</p>
              <p className="text-sm text-gray-600 mb-4">Réf: {product.ref} | {product.pieces} pièces</p>

              <div className="flex items-center space-x-4 mb-4">
                <label htmlFor={`quantity-${index}`} className="text-gray-700">Quantité:</label>
                <input
                  type="number"
                  id={`quantity-${index}`}
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-2 border border-gray-300 rounded"
                />
              </div>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Ajouter
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-600 hover:underline">Voir toute la collection</a>
        </div>
      </div>
    </section>
  );
}
