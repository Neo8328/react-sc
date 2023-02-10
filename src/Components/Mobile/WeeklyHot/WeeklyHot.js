import React from 'react';
import CarouselOuter from '../../PC/UI/Carousel/CarouselOuter';
import classes from './WeeklyHot.module.css';
import { useGetProductTypeListQuery } from '../../../store/indexApi';
// import { useGetWeeklyQuery } from '../../../store/indexApi';

export default function WeeklyHot() {

  const {data, isSuccess } = useGetProductTypeListQuery({'type':'weektopsell', 'url': 'week/topsell'});
  // const {data, isSuccess} = useGetWeeklyQuery();

  if(isSuccess){
    return (
    <div className={classes.Recommend}>
      <CarouselOuter title="本周熱賣HOT!" Product_data={data} show={3}>
      
      </CarouselOuter>
    </div>
    
    )
  }
}
