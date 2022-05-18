import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ListingPage from './pages/ListingPage/ListingPage';
import './App.css';
import Footer from './footer/Footer';
import ListACarPage from './pages/ListACarPage/ListACarPage';
import TripsPage from './pages/TripsPage/TripsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AccountSettings from './pages/ProfilePage/AccountSettingsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/:listingId' element={<CarDetailPage />} /> */}
        {/* <Route path='/chat' element={<ChatPage />} /> */}
        <Route path='/listing' element={<ListingPage />} />
        <Route path='/trips' element={<TripsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/list-a-car' element={<ListACarPage />} />
        <Route path='/account-settings' element={<AccountSettings />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
