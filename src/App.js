import PC from './Components/PC';
import Moblie from './Components/Moblie';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import StaticPage from './Components/PC/StaticPage/StaticPage';
import ProductList from './Components/PC/ProductList/ProductList';
import Product from './Components/PC/Product/Product';

const App = ()=> {


  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    
    handlerResize();
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };

  }, []);

  
  function handlerResize() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setScreenWidth(width);
  }

  // console.log(menuData)
  if (screenWidth > 768){

    return (

      <Routes>
        <Route path="/" element={<PC />} />
        <Route path="/:type" element={<StaticPage />} />
        <Route path="cg/:categories/:page" element={<ProductList />} />
        <Route path="product/:name/pd/:id" element={<Product />} />
      </Routes>
      
    )


  }else{
    return (
      <Routes>
        <Route path="/" element={<Moblie />} />
        
      </Routes>
      
    )
  }
  
  
  
   
  
  
}
export default App