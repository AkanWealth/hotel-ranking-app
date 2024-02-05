import React from 'react';

interface HotelProps {
  name: string;
  city: string;
  country: string;
  address: string;
}

const Hotel: React.FC<HotelProps> = ({ name, city, country, address }) => {
  return (
    <div className="hotel">
      <h3>{name}</h3>
      <p>{`${city}, ${country}`}</p>
      <p>{address}</p>
    </div>
  );
};

export default Hotel;
