import React, { useState } from 'react';
import PrimaryButton from '../shared/Button';

interface HotelChainFormProps {
  addChain: (newChain: string) => void;
}

const HotelChainForm: React.FC<HotelChainFormProps> = ({ addChain }) => {
  const [newChain, setNewChain] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewChain(e.target.value);
  };

  const handleAddChain = () => {
    addChain(newChain);
    setNewChain('');
  };

  return (
    <div className="hotel-chain-form container mx-auto">
      <h2 className="text-center text-3xl p-5">Add Hotel Chain</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="newChain"
            value={newChain}
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
            text="Add Chain"
            onClick={handleAddChain}
          />
        </div>
      </form>
    </div>
  );
};

export default HotelChainForm;
