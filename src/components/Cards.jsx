import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import LoadingSpinner from "../assets/svg/loading-spinner.svg";

const Cards = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (token, deviceId, variableId) => {
    try {
      const response = await axios.get(
        `https://industrial.api.ubidots.com/api/v1.6/devices/${deviceId}/${variableId}/lv`,
        {
          headers: {
            "X-Auth-Token": token,
            "Content-Type": "application/json",
          },
        }
      );
      return { [variableId]: response.data };
    } catch (error) {
      throw error;
    }
  };

  const fetchDataForDevices = async () => {
    try {
      const token = process.env.REACT_APP_UBIDOTS_API_TOKEN;
      const devices = ["agrosense1", "agrosense2"];
      const variables = [
        "temperatura",
        "humedad",
        "desviotemperatura",
        "desviohumedad",
      ];

      const newData = {};

      for (const deviceId of devices) {
        const deviceData = {};

        for (const variableId of variables) {
          const result = await fetchData(token, deviceId, variableId);
          Object.assign(deviceData, result);
        }

        newData[deviceId] = deviceData;
      }

      setData(newData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataForDevices();
  }, []);

  const handleRefreshClick = () => {
    setLoading(true);
    fetchDataForDevices();
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center w-full py-[4rem] px-4 bg-white'>
        <img src={LoadingSpinner} alt='loading-spinner' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex-col items-center justify-center w-full py-[4rem] px-4 bg-white'>
        <div className='text-center block font-bold text-2xl md:flex items-center justify-center'>
          <p className='mr-1 text-[#00df9a]'>Ups!</p>
          <p>Parece que hubo un error al traer la información</p>
        </div>
        <button
          className='flex items-center justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
          onClick={handleRefreshClick}
        >
          Refrescar
        </button>
      </div>
    );
  }

  return (
    <div className='w-full py-[4rem] px-4 bg-white'>
      <div className='max-w-[800px] mx-auto grid md:grid-cols-2 gap-8'>
        {Object.keys(data).map((deviceId, deviceIndex) => (
          <Card
            key={deviceId}
            deviceNumber={deviceIndex + 1}
            positionData={data[deviceId]}
          />
        ))}
      </div>
      <button
        className='flex items-center justify-center bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
        onClick={handleRefreshClick}
      >
        Refrescar
      </button>
    </div>
  );
};

export default Cards;
