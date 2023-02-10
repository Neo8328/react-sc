import React from 'react';
import CarouselOuter from '../../PC/UI/Carousel/CarouselOuter';
import classes from './Recommend.module.css';
import { useGetProductTypeListQuery } from '../../../store/indexApi';

export default function Recommend() {

  const {data, isSuccess } = useGetProductTypeListQuery({'type':'featured', 'url': 'recommend'});

  if (isSuccess){
    // console.log(data)
    return (
      <div className={classes.Recommend}>
        <CarouselOuter title="人氣推介" Product_data={data} show={3}>
        
        </CarouselOuter>
      </div>
      
    )
  }
}
