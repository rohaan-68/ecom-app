import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { sliderItems } from '../data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(
        (prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length
      );
    } else {
      setSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }
  };

  return (
    <section>
      <div className="w-full flex relative overflow-hidden">
        <button
          onClick={() => handleClick('left')}
          className="flex w-12 h-12 bg-gray-500 rounded-full items-center justify-center absolute top-0 bottom-0 left-2 m-auto cursor-pointer opacity-[0.5] z-2"
        >
          <FaArrowLeft />
        </button>
        <div className="h-full flex">
          <div className="w-[100vw] flex-1 items-center justify-center ">
            {sliderItems.map((item, index) => (
              <div
                className={`flex flex-col md:flex-row ${
                  index === slideIndex ? 'visible' : 'hidden'
                }`}
                key={item.id}
              >
                <img src={item.img} alt="" className="h-[550px] md:w-[50%]" />

                <div className="flex-1 p-12 text-center md:mt-20">
                  <h1 className="text-3xl md:text-[40px] font-bold">
                    {item.title}
                  </h1>
                  <p className="m-[30px_0px] md:m-[50px_0px] md:text-2xl font-[400] tracking-wider">
                    {item.desc}
                  </p>
                  <button className="p-2 md:text-xl bg-transparent border border-gray-400 rounded-xl">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleClick('right')}
            className="flex w-12 h-12 bg-gray-500 rounded-full items-center justify-center absolute top-0 bottom-0 right-2 m-auto cursor-pointer opacity-[0.5] z-2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
