// File: app/breeds/[breed]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const breeds = ["boxer", "chihuahua", "husky"];

  return breeds.map((breed) => ({
    breed,
  }));
}

export default async function BreedPage({ params }: { params: { breed: string } }) {
  const { breed } = params;

  try {
    const res = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const data = await res.json();

    if (!data.message) {
      notFound();
    }

    const images: string[] = data.message;

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ color: "#8B4513" }}>
          {breed.charAt(0).toUpperCase() + breed.slice(1)} Images
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#FFF5EE",
              }}
            >
              <Image
                src={img}
                alt={`${breed} image`}
                width={300}
                height={300}
                style={{ borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching breed images:", error);
    notFound();
  }
}