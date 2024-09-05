import React from 'react';
import { categories } from '../data';

const Categories = () => {
  return (
    <section>
      <h1 className="mt-10 text-center font-semibold text-3xl">CATEGORIES</h1>

      <div className="flex flex-col p-5 justify-between relative md:flex-row md:space-x-7">
        {categories.map((item) => (
          <div key={item.id} className="flex-1 m-1 h-[30vh] relative mx-auto">
            <img
              src={item.img}
              alt=""
              className="object-cover h-[15rem] w-[30rem] mx-auto"
            />
            <div className="absolute my-[5rem] top-0 left-0 w-full h-full">
              <h1 className="text-white flex justify-center mb-5 text-xl drop-shadow-[0_1px_10px_rgba(0,0,0,1)] font-bold">
                {item.title}
              </h1>
              <button className="p-2 bg-white flex mx-auto hover:bg-gray-200 text-gray-500 text-sm font-[400]">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
