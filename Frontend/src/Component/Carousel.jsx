import { useRef, useEffect } from "react";
import clg1 from "../assets/clg.JPG";
import clg2 from "../assets/clg2.JPG";
import clg3 from "../assets/clg3.JPG";

const baseImages = [
  { img: clg1, title: "Campus Life" },
  { img: clg2, title: "Life at College" },
  { img: clg3, title: "Alumni" },
];

const images = [...baseImages, ...baseImages]; 

const Carousel = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollBy({
        left: 1, 
        behavior: "auto",
      });

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 bg-gray-100">

      <h1 className="text-3xl font-bold px-16">Campus</h1>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto px-16 no-scrollbar"
      >
        {images.map((item, index) => (
          <div
            key={index}
            className={`min-w-[280px] h-[400px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 transition-all duration-500
            ${index % 2 === 0 
              ? 'mt-16 rotate-[-5deg]' 
              : 'mb-16 rotate-[5deg]'}

            hover:rotate-0 hover:scale-110`}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-lg font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;