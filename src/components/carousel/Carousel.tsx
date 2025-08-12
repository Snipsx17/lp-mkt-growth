import { useEffect, useState, type ReactNode } from "react";

export default function Carousel({ children }: { children: ReactNode}) {
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
        {children}
      </div>
    </div>
  );
}
