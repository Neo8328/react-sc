import React from "react";
import Carousel from "./Carousel";
import classes from './CarouselOuter.module.css';


export default function CarouselOuter (props) {
  
  // console.log(props)
    return (
        
          <>
            <h1 className={classes.Title}>{props.title}</h1>
            <Carousel
                show={props.show}
            >
              {props.Product_data.map(item => {
                // console.log(item.name)
                // if (item.name === undefined)
                // {
                //   console.log(item.title)
                // }
                return (
                <div key={item.name !== undefined ? item.name : item.title}>
                  <div style={{padding: 8}} >
                      <img className={classes.Img} src={item.image} alt="" />
                  </div>
                  <div>
                    <h1 className={classes.ImgText}>{item.name !== undefined ? item.name : item.title}</h1>
                  </div>
                  {/* <div>
                    <h1 className={classes.ImgText}></h1>
                  </div> */}
              </div>)
              })}
                
            </Carousel>
          </>
            
        
    )
}
