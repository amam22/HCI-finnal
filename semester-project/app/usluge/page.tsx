// pages/usluge.tsx
"use client"
import { NextPage } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faInfo, faClipboardList, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import fetchData from '../api/index';

type ServiceItemProps = {
  title: string;
  icon: import("@fortawesome/fontawesome-svg-core").IconDefinition;
  href: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ title, icon, href }) => (
  <Link href={href}>
    <div className="flex items-center p-4 bg-gray-200 rounded-md cursor-pointer">
      <FontAwesomeIcon icon={icon} className="text-red-500 mr-2" />
      <span className="text-gray-800 uppercase font-bold">{title}</span>
    </div>
  </Link>
);

const Usluge: NextPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData('usluge1');
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  const handleFilter = (type: string) => {
    let filtered: any[] = [];
  
    if (filterType === type) {
      setFilterType('');
      setFilteredData(data);
    } else {
      setFilterType(type);
      if (type === 'znamenitosti') {
        filtered = data.filter((item: any) => item.fields.name === 'Stadion Poljud' || item.fields.name === 'Hrvatsko narodno kazalište Split' || item.fields.name === 'Galerija umjetnina Split' || item.fields.name === 'Dioklecijanova palača');
      } else if (type === 'aktivnosti') {
        filtered = data.filter((item: any) => item.fields.name === 'Karting arena' || item.fields.name === 'Park šuma Marjan');
      }
      setFilteredData(filtered);
    }
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="mb-4">
        <button onClick={() => handleFilter('znamenitosti')} className={`mr-2 border border-gray-700 rounded-md p-2 ${filterType === 'znamenitosti' ? 'bg-gray-700 text-white' : ''}`}>Znamenitosti</button>
        <button onClick={() => handleFilter('aktivnosti')} className={`border border-gray-700 rounded-md p-2 ${filterType === 'aktivnosti' ? 'bg-gray-700 text-white' : ''}`}>Aktivnosti</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <div key={index} className="p-4 bg-gray-200 rounded-md relative">
            <p className="text-gray-700 font-bold uppercase text-2xl mb-2">{item.fields.name}</p>
            <img src={item.fields.img} alt={item.fields.name} className="w-full h-40 object-cover mb-2" />
            <p className="text-black text-sm">{item.fields.body}</p>
            <Link href={`/details/${index}`}>
              <div className="absolute bottom-2 right-2 text-gray-700 uppercase font-bold cursor-pointer">Pročitaj više</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Usluge;

