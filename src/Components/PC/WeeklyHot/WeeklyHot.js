import React from 'react';
import CarouselOuter from '../UI/Carousel/CarouselOuter';
import classes from './WeeklyHot.module.css';
// import { useGetWeeklyQuery } from '../../../store/indexApi';
import { useGetProductTypeListQuery } from '../../../store/indexApi';

export default function WeeklyHot() {

  
  // const {data, isSuccess} = useGetWeeklyQuery();
  const {data, isSuccess } = useGetProductTypeListQuery({'type':'weektopsell', 'url': 'week/topsell'});
  if(isSuccess){
    // console.log(data)
    return (
      <div className={classes.Recommend}>
        <CarouselOuter title="本周熱賣HOT!" Product_data={data} show={4}>
        
        </CarouselOuter>
      </div>
      
    )

  }
  
}
