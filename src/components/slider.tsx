import { useState, useEffect } from "react";

export default function Slider() {
  // Array de imágenes de ejemplo - reemplaza con tus propias imágenes
  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="relative w-full max-w-7xl h-80">
        {/* Contenedor del slider */}
        <div className="relative w-full h-full flex items-center">
          {/* Track del slider */}
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              transform: `translateX(calc(20% - ${currentIndex * 80}%))`,
              width: `${images.length * 80}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="≈-0 h-full px-2"
                style={{ width: "80%" }}
              >
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
