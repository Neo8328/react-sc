import React from 'react';
import CarouselOuter from '../../PC/UI/Carousel/CarouselOuter';
import classes from './Hots.module.css';
import { useGetFeaturedQuery } from '../../../store/indexApi';

export default function Hots() {

  const {data, isSuccess} = useGetFeaturedQuery();
    
  if(isSuccess){
    return (
      <div className={classes.Recommend}>
        <CarouselOuter title="熱門瀏覽" Product_data={data} show={3}>
        </CarouselOuter> 
      </div>
     
    )
  }
  
}
