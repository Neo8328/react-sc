import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './PC/Footer/Footer';
import Header from './PC/Header/Header';
// import MyNavBar from './PC/Menu/Menu';
import Slider from './PC/Silder/Slider';
import Recommend from './PC/Recommend/Recommend';
import Hots from './PC/Hots/Hots';
import WeeklyHot from './PC/WeeklyHot/WeeklyHot';
import NewProducts from './PC/NewProducts/NewProducts';
// import Navbar from './PC/Navbar/Navbar';
// import AutoScroll from './PC/UI/AutoScroll/AutoScroll';


export default function PC() {
  return (
    <div>
      <Header/>
      {/* <MyNavBar /> */}
      {/* <Navbar /> */}
      <Slider/>
      <Recommend />
      <Hots/>
      <WeeklyHot />
      <NewProducts />
      
      <Footer/>
      
    </div>
  )
}
