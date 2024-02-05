import { Hotel, HotelChain } from '../types';

const HOTELS_KEY = 'hotels';
const CHAINS_KEY = 'chains';

export const getHotels = (): Hotel[] => {
  const hotelsData = localStorage.getItem(HOTELS_KEY);
  return hotelsData ? JSON.parse(hotelsData) : [];
};

export const getHotel = (id: string): Hotel | undefined => {
  const hotels = getHotels();
  return hotels.find((hotel) => hotel.id === id);
};

export const saveHotel = (id: string, hotel: Hotel): void => {
  const hotels = getHotels();
  const updatedHotels = id
    ? hotels.map((h) => (h.id === id ? { ...h, ...hotel } : h))
    : [...hotels, { ...hotel, id: new Date().toISOString() }];
  localStorage.setItem(HOTELS_KEY, JSON.stringify(updatedHotels));
};

export const getHotelChains = (): HotelChain[] => {
  const chainsData = localStorage.getItem(CHAINS_KEY);
  return chainsData ? JSON.parse(chainsData) : [];
};

export const getHotelChain = (id: string): HotelChain | undefined => {
  const chains = getHotelChains();
  return chains.find((chain) => chain.id === id);
};

export const saveHotelChain = (id: string, chain: HotelChain): void => {
  const chains = getHotelChains();
  const updatedChains = id
    ? chains.map((c) => (c.id === id ? { ...c, ...chain } : c))
    : [...chains, { ...chain, id: new Date().toISOString() }];
  localStorage.setItem(CHAINS_KEY, JSON.stringify(updatedChains));
};
