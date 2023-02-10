import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Left.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import classes from './Left.module.css';
// import { useGetSliderQuery } from '../../../../store/indexApi';
import { useGetProductTypeListQuery } from '../../../../store/indexApi';
import NavLink from 'react-bootstrap/esm/NavLink';

function Left() {
  // const {data, isSuccess} = useGetSliderQuery();
  const {data, isSuccess } = useGetProductTypeListQuery({'type':'home-slider', 'url': 'main/slider'});

  

  if(isSuccess){
    // console.log(data)
    return (
      <Carousel 
        nextIcon = {<FontAwesomeIcon icon={faChevronRight} className={classes.Arrow} />}
        prevIcon = {<FontAwesomeIcon icon={faChevronLeft} className={classes.Arrow} />}
        className={classes.LeftBox}
      >

        {
          data.map(item => {
            return (
              <Carousel.Item key={item.url}>
                <NavLink to={item.url}>
                  <img
                    className={`"d-block w-100" ${classes.CarouselImg}`}
                    src={item.image}
                    alt=""
                  />

                </NavLink>
                
                {/* <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption> */}
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );

  }

  
}

export default Left;