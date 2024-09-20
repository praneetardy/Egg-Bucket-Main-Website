
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Orders from './components/Orders'; 
import Profile from './components/Profile';
import Addresses from './components/Address';
import Account from './Pages/Account';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Account/Dashboard with nested routes */}
        <Route path="/account/*" element={<Account />}>
          <Route path="" element={<Navigate to="orders" />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addresses" element={<Addresses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

