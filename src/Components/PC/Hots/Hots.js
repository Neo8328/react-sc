import React from 'react';
import CarouselOuter from '../UI/Carousel/CarouselOuter';
import classes from './Hots.module.css';
import { useGetProductHotQuery } from '../../../store/indexApi';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

export default function Hots() {

  //  const {data, isSuccess} = useGetFeaturedQuery();
   const {data, isSuccess } = useGetProductHotQuery();

  //  console.log(data, isSuccess)

  if (isSuccess)  {
    // console.log(data)
   
    return (
      <div className={classes.Recommend}>
        <CarouselOuter title="熱門瀏覽" Product_data={data} show={4}>
        </CarouselOuter> 
      </div>
     
    )

  }
  
}
