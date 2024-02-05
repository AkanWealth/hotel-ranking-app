export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  chain: string;
  location: number[];
}

export interface HotelChain {
  id: string;
  name: string;
}
