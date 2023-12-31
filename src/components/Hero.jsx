import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div id='hero' className='text-white'>
      <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Gestiona tus cultivos.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Monitoreo efectivo de
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["Temperatura", "Humedad", "Desvíos"]}
            typeSpeed={250}
            backSpeed={300}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          AgroSense, tu aliado en el cuidado de cada planta
        </p>
        <a href='#analytics'>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
            Monitorear
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
