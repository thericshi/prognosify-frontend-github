import React from 'react';
// import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 flex items-center justify-between p-2">
    <h1 className="text-white text-2xl font-medium align-middle mt-2 ml-4">Prognosify</h1>
    <ul className="flex text-white">
    <li className="px-4">
    <a href="/" className="text-white hover:text-gray-500">Dashboard</a>
    </li>
    <li className="px-4">
        <a href="/prediction" className="text-white hover:text-gray-500">Prediction</a>
        </li>

        <li className="px-4">
        <a href="/profile" className="text-white hover:text-gray-500">Profile</a>
        </li>

        <li className="px-4">
        <a href="/login" className="text-white hover:text-gray-500 px-3 py-2 rounded-md bg-green-500">Login</a>
        </li>

        <button></button>
  </ul>
</nav>
  );
}

export default NavBar;
