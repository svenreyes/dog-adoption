"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGoToCatalog = () => {
    router.push('/catalog');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#F5F5DC',
      color: '#8B4513',
      textAlign: 'center',
      padding: '20px'
    }}>
      <Image
        src="/dog_logo.png"
        alt="Dog Finder Logo"
        width={100} 
        height={100}
        style={{ marginBottom: '20px' }}
      />
      <h1>Welcome to Dog Finder!</h1>
      <button 
        onClick={handleGoToCatalog} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#8B4513', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontSize: '1em',
          fontWeight: 'bold'
        }}
      >
        Go to Catalog
      </button>
    </div>
  );
}