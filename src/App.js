import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ListingPage from './pages/ListingPage/ListingPage';
import './App.css';
import Footer from './footer/Footer';
import ListACarPage from './pages/ListACarPage/ListACarPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/:listingId' element={<CarDetailPage />} /> */}
        {/* <Route path='/chat' element={<ChatPage />} /> */}
        <Route path='/listing' element={<ListingPage />}/>
        {/* <Route path='/trips' element={<TripsPage/>}/> */}
        {/* <Route path='/profile' element={<ProfilePage/>}/> */}
        <Route path='/list-a-car' element={<ListACarPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
