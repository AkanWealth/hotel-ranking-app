import React, { useState } from 'react';
import PrimaryButton from '../shared/Button';
import { HotelProps } from './HotelList';

interface HotelFormProps {
  addHotel: (newHotel: HotelProps) => void;
}

const HotelForm: React.FC<HotelFormProps> = ({ addHotel }) => {
  const [newHotel, setNewHotel] = useState<HotelProps>({
    name: '',
    city: '',
    country: '',
    address: '',
    chain: '',
    latitude: 0,
    longitude: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHotel((prevHotel) => ({
      ...prevHotel,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddHotel = () => {
    addHotel(newHotel);
    setNewHotel({
      name: '',
      city: '',
      country: '',
      address: '',
      chain: '',
      latitude: 0,
      longitude: 0,
    });
  };

  return (
    <div className="hotel-form container mx-auto">
      <h2 className="text-center text-3xl p-5">Add Hotel</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={newHotel.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full h-12 pl-4 pr-3 rounded-lg border border-inputBorder outline-none mt-5"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={newHotel.city}
            onChange={handleInputChange}
            placeholder="Longitude"
            className="w-full h-12 pl-4 pr-3 rounded-lg border border-inputBorder outline-none mt-5"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            value={newHotel.country}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full h-12 pl-4 pr-3 rounded-lg border border-inputBorder outline-none mt-5"
          />
        </div>
        <div className="mt-8">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={newHotel.address}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full h-12 pl-4 pr-3 rounded-lg border border-inputBorder outline-none mt-5"
          />
        </div>

        <div className="mt-5">
          <PrimaryButton
            bgColor={'bg-green-500'}
            color={'text-white'}
            paddingX="px-4"
            text="Add Hotel"
            onClick={handleAddHotel}
          />
        </div>
      </form>
    </div>
  );
};

export default HotelForm;
