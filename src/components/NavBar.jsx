import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 flex items-center justify-between p-2">
      <h1 className="text-white text-2xl font-medium align-middle ml-3 mt-2">Prognosify</h1>
      <div className="flex text-white">
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:text-white px-4 py-2 rounded-lg bg-gray-700`}
        >
          <li className="px-4 py-2">
            <a href="#/" className="text-white hover:text-gray-500">
              Dashboard
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="#/prediction" className="text-white hover:text-gray-500">
              Prediction
            </a>
          </li>
          <li className="px-4 py-2">
            <a href="#/profile" className="text-white hover:text-gray-500">
              Profile
            </a>
          </li>
          <li className="px-4 py-2">
            <a
              href="#/login"
              className="text-white hover:text-gray-500 px-3 py-2 rounded-md bg-green-500"
            >
              Login
            </a>
          </li>
        </ul>
        <button
          className={`${
            isMenuOpen ? 'hidden' : 'block'
          } md:hidden p-2 text-white`}
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </button>
<button
className={`${ isMenuOpen ? 'block' : 'hidden' } md:hidden p-2 text-white text-3xl`}
onClick={() => setIsMenuOpen(false)}>

×
</button>
      </div>
    </nav>
  );
}

export default NavBar;
