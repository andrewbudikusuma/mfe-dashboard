import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mount } from 'auth/AuthApp';
import './app.css';

console.log(mount)

export default () => {
  return <h1 className='text-2xl text-red-700'>hi There</h1>
};