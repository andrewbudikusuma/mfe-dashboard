import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AuthApp from './components/AuthApp';
import './app.css';

export default () => {
  return (
    <div>
      <Header />
      <AuthApp />
    </div>
  )
};