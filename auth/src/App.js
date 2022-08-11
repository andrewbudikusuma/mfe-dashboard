import React from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";

import Signin from './components/Signin';
import Forgot from './components/Forgot';

export default ({ history }) => {
  return <div className="h-full">
    <HistoryRouter history={history}>
      <Routes>
        <Route exact path="/forgot" element={<Forgot />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </HistoryRouter>
  </div>
}