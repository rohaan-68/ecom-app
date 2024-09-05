import React from 'react';
import { popularProducts } from '../data';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';

const Products = () => {
  return (
    <section>
      <h1 className="mt-10 text-center font-semibold text-3xl">PRODUCTS</h1>

      <div className="mt-5 p-5 flex flex-wrap justify-between overflow-hidden">
        {popularProducts.map((item) => (
          <div
            key={item.id}
            className="flex-1 m-2 min-w-[300px] h-[300px] flex items-center justify-center bg-blue-500/10 relative"
          >
            <img src={item.img} alt="" className="w-[75%] h-[75%] z-10" />
            <div className="opacity-0 hover:opacity-[1] w-full h-full absolute top-0 left-0 bg-black/5 z-[13] flex items-center justify-center transition ease-in cursor-pointer">
              <div className="text-black w-10 h-10 text-xl rounded-full bg-white flex items-center justify-center m-2 transition">
                <CiShoppingCart />
              </div>
              <div className="text-black w-10 h-10 text-xl rounded-full bg-white flex items-center justify-center m-2 transition">
                <CiSearch />
              </div>
              <div className="text-black w-10 h-10 text-xl rounded-full bg-white flex items-center justify-center m-2 transition">
                <CiHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
