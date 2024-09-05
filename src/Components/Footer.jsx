import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="md:px-[5rem] xl:px-[10rem] text-center lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
        <div className="flex justify-center">
          <FaInstagram className="mr-2 text-2xl cursor-pointer hover:scale-[1.1] transition" />
          <FaFacebook className="mr-2 text-2xl cursor-pointer hover:scale-[1.1] transition" />
          <FaTwitter className="mr-2 text-2xl cursor-pointer hover:scale-[1.1] transition" />
          <FaGithub className="mr-2 text-2xl cursor-pointer hover:scale-[1.1] transition" />
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              PC ZONE
            </h6>
            <p>
              There are many variations of Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium dolor necessitatibus
              dolores iure facilis voluptas quas ad perspiciatis vitae sunt
              aliquid incidunt maiores quos tempora, ut tenetur deserunt est
              aut!
            </p>
          </div>

          <div className="md:ml-20">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-2 cursor-pointer">
              <a>Home</a>
            </p>
            <p className="mb-2 cursor-pointer">
              <a>SmartWatches</a>
            </p>
            <p className="mb-2 cursor-pointer">
              <a>Mobile Accessories</a>
            </p>
            <p className="mb-2 cursor-pointer">
              <a>Order Tracking</a>
            </p>
            <p className="mb-2 cursor-pointer">
              <a>Contact Us</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Reach Us
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <IoMdMail className="mr-3" />
              support@pczone.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-3" />
              +92 3364529416
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-6 text-center">
        <a className="font-semibold">© 2024 PC ZONE. All rights reserved.</a>
      </div>
    </footer>
  );
};

export default Footer;
