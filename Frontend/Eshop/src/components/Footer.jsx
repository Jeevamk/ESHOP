import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-8 sm:mb-0">
            <h1 className="text-lg font-bold mb-4">Eshop</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">Products</h2>
            <ul>
              <li>Headphones</li>
              <li>Laptops</li>
              <li>Mice</li>
              <li>Keyboards</li>
            </ul>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>123 Street, City, Country</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
