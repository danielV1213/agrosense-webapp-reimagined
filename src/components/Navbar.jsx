import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-24 flex justify-between items-center max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AGROSENSE🍃</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href='#hero'>Inicio</a>
        </li>
        <li className='p-4'>
          <a href='#analytics'>Monitoreo</a>
        </li>
        <li className='p-4 text-nowrap'>Acerca de</li>
        <li className='p-4'>Contacto</li>
      </ul>
      <div onClick={handleNav} className='fixed right-4 top-7 text-[#00df9a] block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[62%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
          AGROSENSE🍃
        </h1>
        <li className='p-4 border-b border-gray-600'>
          <a href='#hero'>Inicio</a>
        </li>
        <li className='p-4 border-b border-gray-600'>
          <a href='#analytics'>Monitoreo</a>
        </li>
        <li className='p-4 border-b border-gray-600'>Acerca de</li>
        <li className='p-4 border-b border-gray-600'>Contacto</li>
      </ul>
    </div>
  );
};

export default Navbar;
