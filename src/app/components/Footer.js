import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-white-900 text-black py-8">
         <div className="container mx-auto px-4">
         <div className="grid grid-cols-5 md:grid-cols-5 gap-8">
       <div className="text-center">
          <img
            src="/scc.png" // Path to the image inside the public folder
            alt="Company Logo"
            width={110} // Adjust the width as needed
            height={40} // Adjust the height as needed
          />
        </div>
          {/* Column 1 - Legal Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">INFOS PRATIQUES</h3>
            <ul className="space-y-2">
              <li><a href="/mentions-legales" className="text-gray-500 hover:text-black">A propos</a></li>
              <li><a href="/confidentialite" className="text-gray-500 hover:text-black">Livaisons & Reprises</a></li>
              <li><a href="/faq" className="text-gray-500 hover:text-black">Mode d'emploi</a></li>
              <li><a href="/cgv" className="text-gray-500 hover:text-black">F.A.Q</a></li>
            </ul>
          </div>

          {/* Column 2 - Account Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="/facebook" className="text-gray-500 hover:text-black">Mentions legales</a></li>
              <li><a href="/CGU" className="text-gray-500 hover:text-black">CGU</a></li>
              <li><a href="/CGV" className="text-gray-500 hover:text-black">CGV</a></li>
              <li><a href="/Polotique" className="text-gray-500 hover:text-black">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Column 3 - Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">MON COMPTE</h3>
            <ul className="space-y-2">
              <li><a href="/compte" className="text-gray-500 hover:text-black">Accéder à mon compte</a></li>
              <li><a href="/create-account" className="text-gray-500 hover:text-blue">Créer un compte</a></li>
              <li><a href="/wishlist" className="text-gray-500 hover:text-black">Ma liste d’envie</a></li>
              <li><a href="/forgot-password" className="text-gray-500 hover:text-black">Mot de passe oublié</a></li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-lg font-bold  mb-4">NOUS SUIVE</h3>
            <ul className="space-y-2">
              <li><a href="/twitter" className="text-gray-500  hover:text-black"><FaTwitter /></a></li>
              <li><a href="/instagram" className="text-gray-500  hover:text-black"><FaInstagram /></a></li>
              <li><a href="/Linkedin" className="text-gray-500 hover:text-black">  <FaLinkedin /> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
