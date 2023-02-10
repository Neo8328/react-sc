import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import classes from './Slider.module.css';
import { useGetProductTypeListQuery } from '../../../store/indexApi';
import NavLink from 'react-bootstrap/esm/NavLink';

function Slider() {


  const {data, isSuccess } = useGetProductTypeListQuery({'type':'home-slider', 'url': 'main/slider'});

  if (isSuccess){
    return (
    
      <Carousel 
        nextIcon = {<FontAwesomeIcon icon={faChevronRight} className={classes.Arrow} />}
        prevIcon = {<FontAwesomeIcon icon={faChevronLeft} className={classes.Arrow} />}
        className={classes.Slider}
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
        {/* <Carousel.Item>
          <img
            className={`"d-block w-100" ${classes.CarouselImg}`}
            src="https://www.dushibuy.com:8443/wp-content/uploads/2020/04/MITU-12222222-600x383.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`"d-block w-100" ${classes.CarouselImg}`}
            src="https://www.dushibuy.com:8443/wp-content/uploads/2020/05/Banners-800-_-450-1-1.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`"d-block w-100" ${classes.CarouselImg}`}
            src="https://www.dushibuy.com:8443/wp-content/uploads/2020/05/soya-100-freature-600x406.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

  
  
);

  }
  
}

export default Slider;