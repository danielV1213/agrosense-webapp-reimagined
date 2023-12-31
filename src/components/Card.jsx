import React from "react";
import Plant from "../assets/plant.png";
import {
  FaTemperatureHigh,
  FaHandHoldingWater,
  FaExclamation,
} from "react-icons/fa";

const Card = ({ positionData, deviceNumber }) => {
  return (
    <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-18 mx-auto mt-[-2.5rem] bg-white' src={Plant} alt='/' />
      <p className='text-center text-4xl font-bold pt-8 mb-4'>
        Agrosense {deviceNumber}
      </p>
      <div className='text-center font-medium'>
        <div className='py-2 border-b mx-8 mt-4 flex items-center justify-center'>
          <FaTemperatureHigh size={20} />
          <p className='mx-2'>Temperatura:</p>
          <p>{positionData.temperatura}°C</p>
        </div>
        <div className='py-2 border-b mx-8 mt-4 flex items-center justify-center'>
          <FaHandHoldingWater size={20} />
          <p className='mx-2'>Humedad:</p>
          <p>{positionData.humedad}%</p>
        </div>
        <div className='py-2 border-b mx-8 mt-4 flex items-center justify-center'>
          <FaTemperatureHigh size={20} />
          <FaExclamation size={20} />
          <p className='mx-2'>Desvío Temperatura:</p>
          <p>{positionData.desviohumedad === 1 ? "Si" : "No"}</p>
        </div>
        <div className='py-2 border-b mx-8 mt-4 flex items-center justify-center'>
          <FaHandHoldingWater size={20} />
          <FaExclamation size={20} />
          <p className='mx-2'>Desvío Humedad:</p>
          <p>{positionData.desviotemperatura === 1 ? "Si" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
