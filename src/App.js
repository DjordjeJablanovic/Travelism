import React from "react";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import PopularPackages from "./components/PopularPackages";
import Activities from "./components/Activities";
import Subscribe from './components/Subscribe.jsx'
import RecommendedDest from "./components/RecommendedDest";
import TopReviews from "./components/TopReviews";
import Blog from "./components/Blog";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <Explore/>
      <PopularPackages/>
      <Activities/>
     <Subscribe/>
     <RecommendedDest/>
     <TopReviews/>
     <Blog/>
     <ChooseUs/>
     <Footer/>
    </div>
  );
}

export default App;
