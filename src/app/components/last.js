'use client';
import { useState } from 'react';

export default function ServiceSection() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">On s’occupe de tout</h2>
        <p className="text-lg text-gray-700 mb-8">
          Office ipsum you must be muted. It meeting commitment busy pain.
          Livraison & Reprise, Nettoyage, Commande Illimitée, Transport & Enlèvement,
          Selon vos besoins, Tout est possible.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Livraison & Reprise</h3>
            <p className="text-gray-600">Selon vos besoins</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Nettoyage</h3>
            <p className="text-gray-600">Selon vos besoins</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Commande Illimitée</h3>
            <p className="text-gray-600">Selon vos besoins</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Transport & Enlèvement</h3>
            <p className="text-gray-600">Selon vos besoins</p>
          </div>
        </div>
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
             {/* Left Column: Product Image */}
          <div className="flex justify-center">
            <img 
              src="/last.png" // Add the product image in the public folder
              alt="Appareil à raclette"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">S’inscrire & économiser 10%</h3>
        <p className="text-lg text-gray-700 mb-8">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn’t. Yet busy any meeting shark light marginalized 4-blocker message. Productize corporate nail caught synergy highlights lunch.
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="john@doe.com"
            value={email}
            onChange={handleEmailChange}
            className="p-3 w-1/3 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            S’inscrire
          </button>
        </form>
        </div>
        </div>
</div>      </div>
    </section>
  );
}
