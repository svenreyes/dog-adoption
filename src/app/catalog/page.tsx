"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CatalogPage: React.FC = () => {
    const products = [
        { id: 1, name: 'Obama', price: 229.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywnd-5xCC5i5qcrjysaqZPk0LLUEC7XBpOQ&s', breed: 'Labrador', age: 3, weight: 12 },
        { id: 2, name: 'Joe Biden', price: 439.99, image: 'https://qph.cf2.quoracdn.net/main-qimg-97023c5672777c4b3076e012526e4a0f-lq', breed: 'Golden Retriever', age: 5, weight: 7 },
        { id: 3, name: 'Kamala', price: 129.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d5eR4n30tcy46E7cefDB430dyLYqDbDLNA&s', breed: 'Beagle', age: 2, weight: 9 },
    ];

    const router = useRouter();

    const handleDogClick = (dog: any) => {
        router.push(`/catalog/${dog.id}`);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5DC' }}>
            <h1 style={{ color: '#8B4513' }}>Adoptable Dogs</h1>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px', 
                marginTop: '20px' 
            }}>
                {products.map(product => (
                    <div 
                        key={product.id} 
                        onClick={() => handleDogClick(product)}
                        style={{ 
                            border: '1px solid #8B4513', 
                            borderRadius: '10px', 
                            padding: '20px', 
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                            backgroundColor: '#FFF5EE',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <img src={product.image} alt={product.name} style={{ 
                            width: '100%', 
                            borderRadius: '8px',
                            marginBottom: '10px' 
                        }} />
                        <h2 style={{ color: '#8B4513' }}>{product.name}</h2>
                        <p style={{ color: '#A0522D' }}>Price: ${product.price.toFixed(2)}</p>
                        <p style={{ color: '#A0522D' }}>Breed: {product.breed}</p>
                        <p style={{ color: '#A0522D' }}>Age: {product.age} years</p>
                        <p style={{ color: '#A0522D' }}>Weight: {product.weight} lbs</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;