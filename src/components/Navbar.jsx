import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets'; // Ensure the path to logo is correct

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav style={{ backgroundColor: '#000', padding: '1rem' }} className="w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
          <span style={{ color: '#fff', fontSize: '1.5rem' }}>My Site</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
