import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelList from './components/HotelList';
import HotelChainList from './components/HotelChainList';
import HotelForm from './components/HotelForm';
import HotelChainForm from './components/HotelChainForm';
import Home from './components/Home';
import NavBar from './components/Navbar';
// import './styles.css';

interface HotelProps {
  name: string;
  city: string;
  country: string;
  address: string;
}

const App: React.FC = () => {
  const [hotels, setHotels] = useState<HotelProps[]>([]);
  const [chains, setChains] = useState<string[]>([]);

  useEffect(() => {
    const storedHotels = JSON.parse(localStorage.getItem('hotels') || '[]');
    const storedChains = JSON.parse(localStorage.getItem('chains') || '[]');
    setHotels(storedHotels);
    setChains(storedChains);
  }, []);

  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotels));
    localStorage.setItem('chains', JSON.stringify(chains));
  }, [hotels, chains]);

  const addHotel = (newHotel: HotelProps) => {
    setHotels((prevHotels) => [...prevHotels, newHotel]);
  };

  const addChain = (newChain: string) => {
    setChains((prevChains) => [...prevChains, newChain]);
  };

  return (
    <Router>
      <div className="app">
        <NavBar/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/hotels"
                element={
                  <>
                    <HotelForm addHotel={addHotel} />
                    <HotelList hotels={hotels} />
                  </>
                }
              />
              <Route
                path="/chains"
                element={
                  <>
                    <HotelChainForm addChain={addChain} />
                    <HotelChainList chains={chains} />
                  </>
                }
              />
            </Routes>
          </Suspense>
      </div>
    </Router>
  );
};

export default App;
