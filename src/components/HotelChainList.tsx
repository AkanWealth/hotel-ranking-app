// import React, { useState } from 'react';
// import HotelChain from './HotelChain';
// import Map, { Marker } from 'react-map-gl';
// import { HotelProps } from './HotelList';

// interface HotelChainListProps {
//   allChains: string[];
//   hotels: HotelProps[];
// }

// const HotelChainList: React.FC<HotelChainListProps> = ({ allChains, hotels }) => {
//   const [selectedChains, setSelectedChains] = useState<string[]>([]);
//   const [viewport, setViewport] = useState({
//     latitude: 0,
//     longitude: 0,
//     zoom: 1,
//     width: '80%',
//     height: '100vh',
//   });

//   const handleFilterByChain = (chain: string) => {
//     const updatedChains = [...selectedChains];
//     if (updatedChains.includes(chain)) {
//       // Remove the chain if already selected
//       const index = updatedChains.indexOf(chain);
//       updatedChains.splice(index, 1);
//     } else {
//       updatedChains.push(chain);
//     }
//     setSelectedChains(updatedChains);
//   };

//   const filteredHotels =
//   hotels && selectedChains ? hotels.filter((hotel) => selectedChains.includes(hotel.chain)) : [];

//   const handleMarkerClick = (latitude: number, longitude: number) => {
//     setViewport({
//       ...viewport,
//       latitude,
//       longitude,
//       zoom: 12,
//     });
//   };

//   return (
//     <div>
//       <div className="flex flex-wrap items-center justify-center mb-5">
//         {allChains?.map((chain, index) => (
//           <button
//             key={index}
//             className={`m-2 px-4 py-2 bg-blue-500 text-white rounded-full ${
//               selectedChains.includes(chain) ? 'bg-blue-700' : ''
//             }`}
//             onClick={() => handleFilterByChain(chain)}
//           >
//             {chain}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-5">
//         {filteredHotels.map((hotel, index) => (
//           <div key={index} className="bg-white p-4 shadow-md rounded-md text-black">
//             <HotelChain name={hotel.chain} />
//             <p>{hotel.name}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <Map
//           mapLib={import('mapbox-gl')}
//           initialViewState={{
//             longitude: viewport.longitude,
//             latitude: viewport.latitude,
//             zoom: viewport.zoom,
//           }}
//           style={{ width: '100%', height: '400px' }}
//           // mapStyle="mapbox://styles/mapbox/streets-v9"
//           mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=c5qHK1vDrsXU7NAcrLLC"
//         >
//           {filteredHotels?.map((hotel, index) => (
//             <Marker
//               key={index}
//               latitude={hotel.latitude}
//               longitude={hotel.longitude}
//             >
//               <div
//                 onClick={() => handleMarkerClick(hotel.latitude, hotel.longitude)}
//                 className="text-red-600 cursor-pointer"
//               >
//                 🏨
//               </div>
//             </Marker>
//           ))}
//         </Map>
//       </div>
//     </div>
//   );
// };

// export default HotelChainList;

// import React, { useRef, useEffect, useState } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// // import './HotelChainList.css';
// interface HotelProps {
//   name: string;
//   city: string;
//   country: string;
//   address: string;
//   chain: string;
//   latitude: number;
//   longitude: number;
// }

// interface HotelChainListProps {
//   allChains: string[];
//   hotels: HotelProps[];
// }

// const HotelChainList: React.FC<HotelChainListProps> = ({ allChains, hotels }) => {
//   const mapContainer = useRef<HTMLDivElement | null>(null);
//   const map = useRef<maptilersdk.Map | null>(null);
//   const [selectedChains, setSelectedChains] = useState<string[]>([]);
//   // const apiKey = 'YOUR_MAPTILER_API_KEY_HERE';

//   useEffect(() => {
//     initializeMap();
//   }, [selectedChains]);

//   const initializeMap = () => {
//     if (mapContainer.current) {
//       if (map.current) {
//         map.current.remove();
//       }

//       map.current = new maptilersdk.Map({
//         container: mapContainer.current,
//         style: maptilersdk.MapStyle.STREETS,
//         center: [0, 0],
//         zoom: 1,
//       });

//       selectedChains.forEach((chain) => {
//         hotels
//           .filter((hotel) => hotel.chain === chain)
//           .forEach((hotel) => {
//             new maptilersdk.Marker({ color: '#FF0000' })
//               .setLngLat([hotel.longitude, hotel.latitude])
//               .addTo(map.current!);
//           });
//       });
//     }
//   };

//   const handleChainFilterChange = (chain: string) => {
//     if (selectedChains.includes(chain)) {
//       setSelectedChains((prevSelectedChains) =>
//         prevSelectedChains.filter((selectedChain) => selectedChain !== chain)
//       );
//     } else {
//       setSelectedChains((prevSelectedChains) => [...prevSelectedChains, chain]);
//     }
//   };

//   return (
//     <div className="hotel-chain-list">
//       <div className="chain-filter">
//         <strong>Filter by Chains:</strong>
//         {allChains?.map((chain) => (
//           <label key={chain} className="ml-2">
//             <input
//               type="checkbox"
//               value={chain}
//               checked={selectedChains.includes(chain)}
//               onChange={() => handleChainFilterChange(chain)}
//               className="mr-1"
//             />
//             {chain}
//           </label>
//         ))}
//       </div>

//       <div className="map-wrap mt-4">
//         <div ref={mapContainer} className="map h-96" /> {/* Adjust the height as needed */}
//       </div>
//     </div>
//   );
// };

// export default HotelChainList;

import React, { useState } from 'react';
import InteractiveMap, { Marker } from 'react-map-gl';
import { HotelProps } from './HotelList';

interface HotelChainListProps {
  allChains: string[];
  hotels: HotelProps[];
}

const HotelChainList: React.FC<HotelChainListProps> = ({
  allChains,
  hotels,
}) => {
  const [selectedChains, setSelectedChains] = useState<string[]>([]);
  const apiKey = 'c5qHK1vDrsXU7NAcrLLC';


  const filteredHotels =
  hotels && selectedChains ? hotels.filter((hotel) => selectedChains.includes(hotel.chain)) : [];

  const handleChainFilterChange = (chain: string) => {
    if (selectedChains.includes(chain)) {
      setSelectedChains((prevSelectedChains) =>
        prevSelectedChains.filter((selectedChain) => selectedChain !== chain)
      );
    } else {
      setSelectedChains((prevSelectedChains) => [...prevSelectedChains, chain]);
    }
  };

  return (
    <div className="hotel-chain-list">
      <div className="chain-filter">
        <strong>Filter by Chains:</strong>
        {allChains?.map((chain) => (
          <label key={chain} className="ml-2">
            <input
              type="checkbox"
              value={chain}
              checked={selectedChains.includes(chain)}
              onChange={() => handleChainFilterChange(chain)}
              className="mr-1"
            />
            {chain}
          </label>
        ))}
      </div>

      <div className="map-wrap mt-4">
        <InteractiveMap
          mapboxAccessToken={apiKey}
          latitude={0} // Set initial latitude
          longitude={0} // Set initial longitude
          zoom={1} // Set initial zoom
        >
          {filteredHotels?.map((hotel, index) => (
            <Marker
              key={index}
              latitude={hotel.latitude}
              longitude={hotel.longitude}
            >
              <div
                onClick={() => console.log('Marker clicked', hotel)}
                className="text-red-600 cursor-pointer"
              >
                🏨
              </div>
            </Marker>
          ))}
        </InteractiveMap>
      </div>
    </div>
  );
};

export default HotelChainList;
