"use client";

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DogPage: React.FC = () => {
    const router = useRouter();
    const [dog, setDog] = useState<{ id: number; name: string; price: number; image: string; breed: string; age: number; weight: number; } | null>(null);

    const products = [
        { id: 1, name: 'Obama', price: 229.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywnd-5xCC5i5qcrjysaqZPk0LLUEC7XBpOQ&s', breed: 'Labrador', age: 3, weight: 12 },
        { id: 2, name: 'Joe Biden', price: 439.99, image: 'https://qph.cf2.quoracdn.net/main-qimg-97023c5672777c4b3076e012526e4a0f-lq', breed: 'Golden Retriever', age: 5, weight: 7 },
        { id: 3, name: 'Kamala', price: 129.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-d5eR4n30tcy46E7cefDB430dyLYqDbDLNA&s', breed: 'Beagle', age: 2, weight: 9 },
    ];

    const { id: dogId } = useParams();

    useEffect(() => {
        if (dogId) {
            const selectedDog = products.find((d) => d.id === Number(dogId));
            if (selectedDog) {
                setDog(selectedDog);
            }
        }
    }, [dogId]);

    if (!dog) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#F5F5DC' }}>
            <button 
                onClick={() => router.push('/catalog')} 
                style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#8B4513', color: 'white', border: 'none', borderRadius: '5px' }}>
                Back to Catalog
            </button>
            <div style={{ 
                border: '1px solid #8B4513', 
                borderRadius: '10px', 
                padding: '20px', 
                maxWidth: '600px', 
                margin: '0 auto', 
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
                backgroundColor: '#FFF5EE' 
            }}>
                <img src={dog.image} alt={dog.name} style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
                <h1 style={{ color: '#8B4513' }}>{dog.name}</h1>
                <p style={{ color: '#A0522D', fontSize: '1.2em', fontWeight: 'bold' }}>Price: ${dog.price.toFixed(2)}</p>
                <p style={{ color: '#A0522D' }}>Breed: {dog.breed}</p>
                <p style={{ color: '#A0522D' }}>Age: {dog.age} years</p>
                <p style={{ color: '#A0522D' }}>Weight: {dog.weight} lbs</p>
            </div>
        </div>
    );
};

export default DogPage;