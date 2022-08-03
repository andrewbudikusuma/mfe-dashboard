import React from 'react';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <div>
      <h1 className='text-2xl text-blue-300 font-sans'>Hi There Forgot in!</h1>
      <Link to="/">
        <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>go to sign in</button>
      </Link>
    </div>
  )
}