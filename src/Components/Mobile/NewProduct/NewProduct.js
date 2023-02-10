import React, {useState} from 'react';
import classes from './NewProduct.module.css';
import { useGetNewQuery } from '../../../store/indexApi';

  
  
const imagePerRow = 3;



export default function NewProduct() {

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
      setNext(next + imagePerRow);
    };

  const {data, isSuccess} = useGetNewQuery();

  console.log(data)

  if(isSuccess){
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
                    <div key={item.name} className="col-4" style={{marginTop: "20rem"}}>
                        <div style={{padding: 8}} >
                            <img className={classes.Img} src={item.image} alt="" />
                        </div>
                        <div>
                          <h1 className={classes.ImgText}>{item.name}</h1>
                        </div>
                        <div>
                          <h1 className={classes.ImgText}></h1>
                        </div>
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
