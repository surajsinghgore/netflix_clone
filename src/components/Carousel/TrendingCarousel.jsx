import React, { useState, useRef, useEffect } from "react";
import { show1, show2, show3, show4, show5, show6, show7, show8, show9, show10 } from "../../assets";

const TrendingCarousel = () => {
    const allItems = [
        { id: 1, title: "Maran", image: show1 },
        { id: 2, title: "Vicky Vidya Video", image: show2 },
        { id: 3, title: "Race 3", image: show3 },
        { id: 4, title: "Sikandar Ka Muqaddar", image: show4 },
        { id: 5, title: "A...", image: show5 },
        { id: 6, title: "Maran 2", image: show6 },
        { id: 7, title: "Vidya Again", image: show7 },
        { id: 8, title: "Race 4", image: show8 },
        { id: 9, title: "Sikandar Returns", image: show9 },
        { id: 10, title: "A++...", image: show10 },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const containerRef = useRef(null);

    const handleNext = () => {
        setDirection("right");
        const nextStartIndex = (startIndex + 5) % allItems.length;
        setStartIndex(nextStartIndex);
    };

    const handlePrev = () => {
        setDirection("left");
        const prevStartIndex = (startIndex - 5 + allItems.length) % allItems.length; // Move to the previous 5, loop back if necessary
        setStartIndex(prevStartIndex);
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: direction === "right" ? containerRef.current.scrollWidth : 0,
                behavior: "smooth",
            });
        }
    }, [startIndex, direction]);

    const currentItems =
        allItems.slice(startIndex, startIndex + 5).length === 5
            ? allItems.slice(startIndex, startIndex + 5)
            : [...allItems.slice(startIndex), ...allItems.slice(0, 5 - (allItems.length - startIndex))];

    return (
        <div className="relative flex items-center w-full my-10">
            {/* Left Arrow */}
            {startIndex > 0 && (
                <button
                    className="absolute -left-10 z-10 p-2 py-10 bg-[#1a1a1a] bg-opacity-50  text-white rounded-lg hover:bg-opacity-75"
                    onClick={handlePrev}
                >
                    &#x276E;
                </button>
            )}

            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex gap-12 w-full px-6"
            >
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex-shrink-0 w-46 h-64 rounded-lg "
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full rounded-md"
                        />

                        <div
                            className="absolute bottom-2 -left-6 text-black text-[7rem] font-extrabold leading-none drop-shadow-md"
                            style={{
                                WebkitTextStroke: "2px white",
                                WebkitTextFillColor: "black",
                            }}
                        >
                            {item.id}
                        </div>

                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute -right-10 z-10 p-2 py-10 bg-[#1a1a1a] bg-opacity-50 text-white rounded-lg hover:bg-opacity-75"
                onClick={handleNext}
            >
                &#x276F;
            </button>
        </div>
    );
};

export default TrendingCarousel;
