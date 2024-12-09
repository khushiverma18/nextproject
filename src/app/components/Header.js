"use client"; 
import { useState } from 'react';
import { GiInspiration } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-white shadow-md sticky sm:cols-2 md:cols-3 lg:cols-5 top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/scc.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="ml-2 font-bold text-xl text-sky-300	">WeRentTech</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un produit"
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative">
          <GiInspiration />
          </button>
          <button className="relative">
          <FaRegHeart />
          </button>
          <button>
          <MdAddShoppingCart />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-gray-100 py-2">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <ul className="flex space-x-6">
            <li className="hover:text-blue-600 cursor-pointer text-sky-500">ART DE LA TABLE</li>
            <li className="hover:text-blue-600 cursor-pointer">MOBILIER</li>
            <li className="hover:text-blue-600 cursor-pointer">NAPPEAGE</li>
            <li className="hover:text-blue-600 cursor-pointer">MATÉRIEL DE SALLE</li>
            <li className="hover:text-blue-600 cursor-pointer">CUISINE</li>
            <li className="hover:text-blue-600 cursor-pointer">BARBECUE</li>
            <li className="hover:text-blue-600 cursor-pointer">TENTE</li>
            <li className="hover:text-blue-600 cursor-pointer">SON ET LUMIÈRE</li>
          </ul>
          <span className="text-gray-600">FR</span>
        </div>
      </nav>
    </header>
  );
}
