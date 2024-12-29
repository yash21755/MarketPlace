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
import MyUploads from "./pages/MyUploads.jsx";
import NewItemPage from "./pages/NewItemPage.jsx";

const App = () => {
  
  return (
    <>
      <nav className='relative flex items-center justify-between bg-emerald-900 h-36 w-full'>
        <Title/>
        <Profile />
        <OptionsNav />
      </nav>
        <Routes>
          <Route path="/" element={<MarketPlace/>}/>
          <Route path="/lostandfound" element={<LostAndFound/>}/>
          <Route path='/donation' element={<Donation/>}/>
          <Route path='/myuploads' element={<MyUploads/>}/>
          <Route path='/myuploads/upload+new+item' element={<NewItemPage />}/>
        </Routes>
    </>
  );
}
 
export default App;