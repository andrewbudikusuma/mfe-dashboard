import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthApp from './components/AuthApp';
import './app.css';

export default () => {
  return <div>
    <h1 className='text-2xl text-red-700'>hi There Container</h1>
    <hr />
    <AuthApp />
  </div>
};