import React from 'react'

export default function Slide( { image, alt }: { image: string, alt: string }) {
  return (
    <div className="w-[70vw] h-full flex items-center relative mx-[5vw]">
      <img className="w-full" src={image} alt="slide-2" />
    </div>
  );
}
