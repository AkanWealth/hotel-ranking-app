import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const isActive = (pathname: string): boolean => {
    return location.pathname === pathname;
  };

  const activeLinkStyle: React.CSSProperties = {
    color: 'yellow',
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-2xl">
          <NavLink to="/" style={isActive('/') ? activeLinkStyle : {}}>
            Hotel
          </NavLink>
        </div>
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-gray-300">
            <NavLink to="/" style={isActive('/') ? activeLinkStyle : {}}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-gray-300">
            <NavLink
              to="/hotels"
              style={isActive('/hotels') ? activeLinkStyle : {}}
            >
              Hotels
            </NavLink>
          </li>
          <li className="hover:text-gray-300">
            <NavLink
              to="/chains"
              style={isActive('/chains') ? activeLinkStyle : {}}
            >
              Chains
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
