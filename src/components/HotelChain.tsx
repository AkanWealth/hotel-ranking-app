import React from 'react';

interface HotelChainProps {
  name: string;
}

const HotelChain: React.FC<HotelChainProps> = ({ name }) => {
  return (
    <div className="hotel-chain">
      <h3>{name}</h3>
    </div>
  );
};

export default HotelChain;
