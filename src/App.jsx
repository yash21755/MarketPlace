import React from "react";
import Profile from "./components/Profile.jsx";
import Title from "./components/Title.jsx";
import OptionsNav from "./components/OptionsNav.jsx";
// import AddItem from "./components/AddItem.jsx";
// import Cards from "./components/Cards.jsx";
import { Route, Routes } from "react-router-dom";
import Donation from './pages/Donation.jsx';
import MarketPlace from "./pages/MarketPlace.jsx";
import LostAndFound from "./pages/LostAndFound.jsx";

const App = () => {
  
  return (
    <>
      <nav className='relative flex items-center justify-between bg-emerald-900 h-36 w-full'>
        <Title/>
        <Profile />
        <OptionsNav/>
      </nav>
        <Routes>
          <Route path="/" element={<MarketPlace/>}/>
          <Route path="/lostandfound" element={<LostAndFound/>}/>
          <Route path='/donation' element={<Donation/>}/>
        </Routes>
    </>
  );
}
 
export default App;