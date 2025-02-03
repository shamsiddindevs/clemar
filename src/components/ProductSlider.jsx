import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="relative h-[500px] w-full">
        <img
          src={images?.[currentImageIndex]}
          alt={`Product ${currentImageIndex + 1}`}
          className="w-full h-full object-contain"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 mt-4">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-20 h-20 border-2 ${
              index === currentImageIndex ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;