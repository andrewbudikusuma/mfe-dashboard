import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Signin from './components/Signin';
import Forgot from './components/Forgot';

export default () => {
  return <div className="h-full">
    <BrowserRouter>
      <Routes>
        <Route exact path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </div>
}