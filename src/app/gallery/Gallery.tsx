"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Category = "all" | "bathrooms" | "livingrooms" | "bedrooms" | "exteriors";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const images: GalleryImage[] = [
  // Bathrooms
  ...[50, 51, 53, 54, 55, 56].map((n) => ({
    src: `/fotos/photo_${n}.jpeg`,
    alt: `Bathroom renovation project ${n}`,
    category: "bathrooms" as Category,
  })),
  // Living rooms
  ...[25, 26, 27, 28, 29, 30, 31, 32, 33, 34].map((n) => ({
    src: `/fotos/photo_${n}.jpeg`,
    alt: `Living room remodel project ${n}`,
    category: "livingrooms" as Category,
  })),
  // Bedrooms
  ...[35, 36, 37, 38, 39, 40, 41, 42].map((n) => ({
    src: `/fotos/photo_${n}.jpeg`,
    alt: `Bedroom renovation project ${n}`,
    category: "bedrooms" as Category,
  })),
  // Exteriors
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((n) => ({
    src: `/fotos/photo_${n}.jpeg`,
    alt: `Exterior construction project ${n}`,
    category: "exteriors" as Category,
  })),
  // Remaining as exteriors
  ...[43, 44, 45, 46, 47, 48, 49, 52, 57, 58, 59, 60].map((n) => ({
    src: `/fotos/photo_${n}.jpeg`,
    alt: `Construction project ${n}`,
    category: "exteriors" as Category,
  })),
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "bathrooms", label: "Bathrooms" },
  { key: "livingrooms", label: "Living Rooms" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "exteriors", label: "Exteriors" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? images
        : images.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="headings text-gray-800">Our Work</h1>
        <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-10">
          Custom designs for all needs. We are specialists in urban areas and
          beach areas.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === key
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="block w-full overflow-hidden rounded-xl group cursor-pointer break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={filtered.map((img) => ({ src: img.src, alt: img.alt }))}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </section>
  );
}
