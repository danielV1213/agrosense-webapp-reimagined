import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
          AGROSENSE🍃
        </h1>
        <p className='py-4'>
          Cultivo inteligente, cosechas prósperas: AgroSense, tu aliado en el
          cuidado de cada planta.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <a
            href='https://github.com/danielV1213'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Soluciones</h6>
          <ul>
            <li className='py-2 text-sm'>Analísis</li>
            <li className='py-2 text-sm'>Equipos</li>
            <li className='py-2 text-sm'>Datos</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Soporte</h6>
          <ul>
            <li className='py-2 text-sm'>Precios</li>
            <li className='py-2 text-sm'>Documentación</li>
            <li className='py-2 text-sm'>Guías</li>
            <li className='py-2 text-sm'>API</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Companía</h6>
          <ul>
            <li className='py-2 text-sm'>Acerca de</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Empleos</li>
            <li className='py-2 text-sm'>Carreras</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Reclamos</li>
            <li className='py-2 text-sm'>Políticas</li>
            <li className='py-2 text-sm'>Términos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
