"use client"
import { NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import fetchData from '../api/index1';

type ServiceItemProps = {
  name: string;
  body: string;
  slika: string;
};

const Onama: NextPage = () => {
  const [data, setData] = useState<ServiceItemProps[]>([]);
  const [filteredData, setFilteredData] = useState<ServiceItemProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        // Fetch raw data
        const rawData = await fetchData('onama');
        // Transform raw data to ServiceItemProps[]
        const transformedData = rawData.map((entry: any) => ({
          name: entry.fields.name,
          body: entry.fields.body,
          slika: entry.fields.slika,
        }));
        setData(transformedData);
        setFilteredData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  useEffect(() => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="mb-8 text-center">
        <p className="text-4xl font-regular text-[#09396d] mb-8">Welcome to CityScape community!</p>
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Pretraži..."
            className="border border-gray-300 rounded-md px-3 py-2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full max-w-screen-lg">
        {filteredData.map((item, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-200 rounded-md mb-4">
            <div className="rounded-full overflow-hidden h-32 w-32 flex items-center justify-center border border-gray-300 mr-4">
              <img src={item.slika} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-gray-800 font-bold uppercase mb-2">{item.name}</p>
              <p className="text-gray-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Onama;

