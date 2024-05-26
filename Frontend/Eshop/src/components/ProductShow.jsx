import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-xl mx-auto mt-16">
            <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
            
            <div className="px-4 py-2 bg-white bg-opacity-75 text-white flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-black">{name}</h2>
                    <p className="text-sm text-black">{price}</p>
                </div>
                <Link to={`/product/${id}`} className="text-black flex items-center">
                    <FaEye className="mr-2" />
                    
                </Link>
            </div>
        </div>
    );
};

const ProductList = () => {
    const products = [
        { id: 1, name: 'iphone-14', price: '$20.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716719768/png-transparent-iphone-14_saecun.png' },
        { id: 2, name: 'Bose QuietComfort 35 II', price: '$30.49', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716700669/sony_cgkjmx.png' },
        { id: 3, name: 'Razer DeathAdder V2', price: '$25.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716720639/mouse-removebg-preview_lwmzyc.png' },
        { id: 4, name: 'boAt stone', price: '$15.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716720775/Bluetooth-Speaker-PNG-Image-removebg-preview_zkns2d.png' },
        { id: 5, name: 'Apple MacBook Pro 13-inch', price: '$40.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716701396/apple-macbook-pro-13-inch-removebg-preview_2_qhyrck.png' },
        { id: 6, name: 'SoundDrum 1', price: '$43.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716721259/Portronics-removebg-preview_zt7ayz.png' },
        { id: 1, name: 'iphone-14', price: '$20.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716719768/png-transparent-iphone-14_saecun.png' },
        { id: 8, name: 'OnePlus Nord Wired Earphones', price: '$40.99', imageUrl: 'https://res.cloudinary.com/dsqsfves6/image/upload/v1716721786/1-m00-removebg-preview_d4xks8.png' },

    ];  

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-14">
        <h2 className="text-3xl font-bold mb-4 uppercase text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(product => (
                <div key={product.id} className="mb-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    </div>
    );
};

export default ProductList;
