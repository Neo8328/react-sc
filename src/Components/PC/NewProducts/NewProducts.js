import React, {useState} from 'react';
import classes from './NewProducts.module.css';
import { useGetNewQuery } from '../../../store/indexApi';

const imagePerRow = 4;



export default function NewProducts() {

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
      setNext(next + imagePerRow);
    };
  
  const {data, isSuccess} = useGetNewQuery();

  if (isSuccess){

    // console.log(data)
  
    return (
      // <div className={classes.Recommend}>
      //   <CarouselOuter title="最新上架NEW!" Product_data={Product_data} show={4}>

      //   </CarouselOuter>
        
      // </div>
      <>
      <h1 className={classes.Title}>{'最新上架NEW!'}</h1>
        <div className={classes.Recommend}>
          <div className='container'>
            <div className='row'>
              {data?.slice(0, next)?.map((item) => {
                return (
                    <div key={item.name} className="col-3" style={{marginTop: "20rem"}}>
                        <div style={{padding: 8}} >
                            <img className={classes.Img} src={item.image} alt="" />
                        </div>
                        <div>
                          <h1 className={classes.ImgText}>{item.name}</h1>
                        </div>
                        {/* <div>
                          <h1 className={classes.ImgText}></h1>
                        </div> */}
                    </div>
                );
              })}
          </div>
        </div>
        </div>
      <div className={classes.LoadmoreButton}>
        {next < data?.length && (
          <button
            className="mt-4"
            onClick={handleMoreImage}
          >
            Load more
          </button>
        )}
      </div>
        
      </>
      
    )

  }

  
}
