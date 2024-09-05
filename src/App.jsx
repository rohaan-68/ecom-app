import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const App = () => {
  const [isActive, setIsActive] = useState('false');

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <section className={`section ${isActive ? 'bg-bgColor text-content' : ''}`}>
      <Navbar onToggleClick={handleToggleClick} />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default App;
