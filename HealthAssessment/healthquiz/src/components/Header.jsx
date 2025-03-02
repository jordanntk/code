import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav>
      <Link to="/" className="text-xl">Home</Link>
    </nav>
  </header>
);

export default Header;