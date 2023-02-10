import React, { useState } from 'react';
import Footer from './Mobile/Footer/Footer';
import Header from './Mobile/Header/Header';
import Hots from './Mobile/Hots.js/Hots';
import Recommend from './Mobile/Recommend/Recommend';
import SideNav from './Mobile/SideNav/SideNav';
import Slider from './Mobile/Slider/Slider';
import WeeklyHot from './Mobile/WeeklyHot/WeeklyHot';
import NewProductAuto from './Mobile/NewProduct/NewProductAuto';

export default function Moblie(props) {

  const [showNavBar, setShowNavBar] = useState(false)

  const showNavBarHandler = () => {
    setShowNavBar(true)
  }

  const hideNavBarHandler = (e) => {
    
    // e.stopPropagation();
    setShowNavBar(false);
  }

  return (
    <div>
      <Header onShow={showNavBarHandler}/>
      <Slider />
      <Recommend />
      {/* <Hots /> */}
      <WeeklyHot />
      {/* <NewProducts /> */}
      <NewProductAuto/>
      <Footer />
      {(showNavBar && !props.error && !props.loading) && <SideNav onHide={hideNavBarHandler}/>}
      
      
      
    </div>
  )
}
