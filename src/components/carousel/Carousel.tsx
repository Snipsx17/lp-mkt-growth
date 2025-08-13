import { useEffect, useState } from "react";

export default function Carousel() {
    const [currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 4000)

        return () => clearInterval(interval);
    }, [])
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center h-[500px] w-[240%] justify-center transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(calc(50vw - 40vw - ${currentIndex} * 80vw))`,
          width: "240vw", // 3 × 80vw
        }}
      >
        <div className="w-[70vw] h-full flex items-center relative mx-[5vw]">
          <img
            className="w-full"
            src="https://go.pardot.com/l/876061/2025-08-11/qqd1g/876061/1754952027cwvMdF9L/img_1.webp"
            alt="slide-1"
          />
        </div>
        <div className="w-[70vw] h-full flex items-center relative mx-[5vw]">
          <img
            className="w-full"
            src="https://go.pardot.com/l/876061/2025-08-11/qqd1k/876061/1754952027GUau0MsJ/img_2.webp"
            alt="slide-2"
          />
        </div>
        <div className="w-[70vw] h-full flex items-center relative mx-[5vw]">
          <img
            className="w-full"
            src="https://go.pardot.com/l/876061/2025-08-11/qqd1r/876061/1754952027EtruwHfa/img_3.webp"
            alt="slide-3"
          />
        </div>
      </div>
    </div>
  );
}
