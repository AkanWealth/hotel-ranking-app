import React from 'react';
import Hotel from './Hotel';

export interface HotelProps {
  name: string;
  city: string;
  country: string;
  address: string;
  chain: string;
  latitude: number;
  longitude: number;
}

interface HotelListProps {
  hotels: HotelProps[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-5">
      {hotels.map((hotel, index) => (
        <div key={index} className="bg-white p-4 shadow-md rounded-md">
          <Hotel {...hotel} />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
