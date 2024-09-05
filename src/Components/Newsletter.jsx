import React from 'react';
import { IoSend } from 'react-icons/io5';

const Newsletter = () => {
  return (
    <section>
      <div className="h-[40vh] bg-blue-500/10 flex text-center items-center justify-center flex-col">
        <h1 className="text-[2rem] md:text-[4rem] my-2">NewsLetter</h1>
        <p className="text-[1.5rem] mb-10 font-[200]">
          Get timely updates from your favourite products.
        </p>
        <div className="w-[30%] h-[40px] bg-white flex justify-center">
          <input
            type="text"
            placeholder="Your E-mail"
            className="flex-[8] pl-5"
          />
          <button className="flex px-4 text-xl bg-teal-500 text-white justify-center items-center">
            <IoSend />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
