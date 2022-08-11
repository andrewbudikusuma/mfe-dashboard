import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import AuthApp from './components/AuthApp';
import './app.css';

console.log('here there')
export default () => {
  return (
    <BrowserRouter>
      <Header />
      <AuthApp />
    </BrowserRouter>
  )
};