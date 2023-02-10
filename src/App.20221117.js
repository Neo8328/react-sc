import PC from './Components/PC';
import Moblie from './Components/Moblie';
import React, { useState, useEffect, useCallback } from 'react';
import MenuContext from './store/menu-context';


const App = ()=> {


  const [error, setEoor] = useState(null);
  const [loading, setLoading] = useState(false)
  const [errorRe, setEoorRe] = useState(null);
  const [loadingRe, setLoadingRe] = useState(false)
  const [menuData, setMenuData] = useState([]);
  const [recommendData, setRecommendData] = useState([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    
    handlerResize();
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };

  }, []);

  const MenuPostData = new FormData();
  MenuPostData.append('menu_id', 381);

  
  const fetchData = useCallback( async () => {
    try{
      setEoor(null);
      setLoading(true);
      const res = await fetch('https://api-public-dushibuy.singtao.ca:8443/v1/menu/items', {
        method: 'POST',
      // mode: 'no-cors',
        headers:{
        'authorization': 'Bearer ZnNam4OTQ!1NjEy#b25mOTQ1eWp3ZTg0NQ',
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'keep-alive',
        // 'Accept': '*/*',
        },
      
      body: MenuPostData,
      })

      // console.log(res)
      if (res.ok){
        const data = await res.json();
        // console.log(data)
        // ctx.menuData = data.list
        setMenuData(data.list);
        
        // console.log(menuData)
      }else{
        throw new Error('fetch menu failed!')
      }

    }catch(e){
      setEoor(e.message)
    }finally{
      setLoading(false)
    }
  }, []);

  const RecommendPostData = new FormData();
  RecommendPostData.append("paged", 1);
  RecommendPostData.append("num_per_page", 8);
  RecommendPostData.append('slug','featured');

  const fetchRecommendData = useCallback( async () => {
    try{
      setEoorRe(null);
      setLoadingRe(true);
      const res = await fetch('https://api-public-dushibuy.singtao.ca:8443/v1/product/recommend', {
        method: 'POST',
        headers:{
        'authorization': 'Bearer ZnNam4OTQ!1NjEy#b25mOTQ1eWp3ZTg0NQ',
        'Access-Control-Allow-Origin': '*',
        },
      
      body: RecommendPostData,
      })

      // console.log(res)
      if (res.ok){
        const data = await res.json();
        // console.log(data)
        setRecommendData(data.list);
        
        // console.log(recommendData)
      }else{
        throw new Error('fetch data failed!')
      }

    }catch(e){
      setEoorRe(e.message)
    }finally{
      setLoadingRe(false)
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchRecommendData();
  }, [fetchData, fetchRecommendData])
  
  // useEffect(() => {
  //   // fetch('https://api-public-dushibuy.singtao.ca:8443/v1/menu/items', {
  //   //   method: 'POST',
  //   //   // mode: 'no-cors',
  //   //   headers:{
  //   //     'authorization': 'Bearer ZnNam4OTQ!1NjEy#b25mOTQ1eWp3ZTg0NQ',
  //   //     'Access-Control-Allow-Origin': '*',
  //   //     // 'Content-Type': 'keep-alive',
  //   //     // 'Accept': '*/*',
  //   //     },
      
  //   //   body: JSON.stringify(postData),
  //   // })
  //   // .then(res=> {
      
  //   //   // console.log(res)
  //   //   return res.json();
  //   // })
  //   // .then(data => {
  //   //   ctx.menuData = data.list;
  //   //   // console.log(data.list)
  //   // })
  //   // .catch(() => {})
  //   fetchData();
  // }, [])

  function handlerResize() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setWidth(width);
  }

  // console.log(menuData)
  return <>
  {/* {(!loading && !error) &&  */}
  <MenuContext.Provider value={{menuData, recommendData}}>
   <>{width > 768 ? <PC error={error} loading={loading}/> : <Moblie error={error} loading={loading}/>}</>
  </MenuContext.Provider>
{/* }  */}
</>
}

export default App;