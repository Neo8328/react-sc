import React, { useState, useEffect, useRef } from 'react';
import { useGetProductDetailQuery } from '../../../store/indexApi';
import { Link, useParams  } from 'react-router-dom';
import classes from './Details.module.css';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProductColor = ['red', 'green', 'black', 'blue'];
const ProductInfoList = [
  {'title': '詳細介紹',
  'content':' '
  }, 
  {'title': '商品規格', 
  'content': ''
  },
  {'title': '商家條款',
  'content': ''
  }, 
  {'title': '送貨和退貨',
  'content': ''
  }];


export default function Details() {

  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);
  const [selectedColor, setSelectedColor] = useState(ProductColor[0]);
  const [selectedInfo, setSelectedInfo] = useState(ProductInfoList[0]);
  const [productCount, setProductCount] = useState(1);

  const slideRef = useRef();

  

  const {id} = useParams();

  const {data, isSuccess} = useGetProductDetailQuery(id);

  useEffect(() => {
    if(!isSuccess) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = Math.round(scrollWidth / childrenElementCount);
    setWidth(width);
  }, [isSuccess])

  
  function dragStart(e) {
    // console.log({start: e})
    setStart(e.clientX);
  }

  function dragOver(e) {
    let touch = e.clientX;
    // console.log(start-touch);
    setChange(start - touch);
  }

  function dragEnd(e) {
    /* 
    drag left change > 0
    drag right change < 0
    */
    // console.log(change);
    if (change > 0) {
      
      slideRef.current.scrollLeft += width;
    }else{
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if(width === 0 || !isSuccess) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    // console.log(slideRef.current.offsetWidth, width, slideIndex,numOfThumb);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0
  }, [width, slideIndex, isSuccess])

  function plusSlide(n) {
    setSlideIndex(prev => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n) {
    if (n > data.gallery_images.length) {setSlideIndex(1)};
    if (n < 1) {setSlideIndex(data.gallery_images.length)};
  }

  function handleInfo(info) {
    setSelectedInfo(info)
  }

  const addHandler = (e) => {
    
      setProductCount(prev => prev + +1);
    
  }

  const removeHandler = (e) => {
    if (productCount > 0)
    {
      setProductCount(prev => prev - +1);
    }
  }

  if (isSuccess){
    console.log(data)

    const ProductInfoList = [
      {'title': '詳細介紹',
      'content':data.content
      }, 
      {'title': '商品規格', 
      'content': data.width + data.weight
      },
      {'title': '商家條款',
      'content': data.terms
      }, 
      {'title': '送貨和退貨',
      'content': data.warranty
      }];
    

    return (
      <div className={classes.OuterBox}>
        <section className={classes.ProductDetails}>
          <div className={classes.ProductPageImg}>
            {
              data.gallery_images.map((image, index) => (
                <div 
                  className={classes.MySlides} 
                  key={image.attachment_id} 
                  style={{display: (index + 1) === slideIndex ? "block" : "none"}}
                >
                  <div className={classes.NumberNext}>
                    {index + 1} / {data.gallery_images.length}
                  </div>
                  <img src={image.url} alt="" />
                </div>
                
              ))

            }
            <Link to="#!" className={classes.prev} onClick={()=>plusSlide(-1)}>&#10094;</Link>
            <Link to="#!" className={classes.next} onClick={()=>plusSlide(1)}>&#10095;</Link>

            <div className={classes.SliderImg} draggable={true} ref={slideRef}
            onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
              {
                data.gallery_images.map((image, index) => (
                  <div className={`${classes.SliderBox} ${(index + 1) === slideIndex ? classes.active : ''} `} key={image.attachment_id} 
                  onClick={()=>setSlideIndex(index + 1)}>
                    <img src={image.url} alt="" />
                  </div>
                ))
              }
            </div>
          </div>
           <div className={classes.ProductPageDetails}>
            <strong>{data.name}</strong>
          {/*  <div className={classes.ProductCategory}>
              {data.categories.map((item, index) => (
                <div  key={index}>
                  {item.name}
                </div>
              ))}
            </div> */}

              
              <div className={classes.ProductVendor}>
                By: <Link to={data.vendor_url}>{data.vendor}</Link>
              </div> 

            <p className={classes.ProductPrice}>
                ${+data.price} <del>{data.regular_price}$</del>
            </p>
            <div className={classes.ProductPageOffer}>
                <FontAwesomeIcon style={{marginRight: '5rem'}} icon={faTag} /> {Math.round(((+data.regular_price - data.price) / +data.regular_price) * 100)}% Discount

            </div>
            

            <div className={classes.ProductCountBox}>
              <strong>數量：</strong>
              <button className={classes.ProductAdd} onClick={removeHandler}>-</button>
              <div className={classes.ProductCount} > {productCount}</div>
              <button className={classes.ProductAdd} onClick={addHandler}>+</button>
            </div>

            <div className={classes.CartBtns}>
                <Link to={'#!'} className={classes.AddCart}>Add To Cart</Link>
                <Link to={'#!'} className={classes.BuyNow}>Buy Now</Link>
                
            </div>

            <div className={classes.SmallDesc}>{data.description}</div>

            {/* <div className={classes.ProductOptions}>
              <span>Colors:</span>
                {
                  ProductColor.map((item)=> (
                    <div key={item} >
                      <button style={{background: item}} 
                      className={item === selectedColor ? classes.active : '' }
                      onClick={()=>setSelectedColor(item)}/>
                    </div>
                  ))
                }
            </div> */}

            

            <div className={classes.PickupLocatoin}>
            <strong>取貨地址：</strong>
                {
                  data.pickup_locations.map((item)=> (
                    <div key={item}>
                      <p>{item}</p>
                    </div>
                  ))
                }
            </div>

            <div className={classes.PickupLocatoin}>
            <strong>電話：</strong>
                {data.vendor_phone}
            </div>

            <div className={classes.PickupLocatoin}>
              <strong>取貨時間：</strong>
              <div>
                {
                  data.pickup_hours.split("\r\n").map((item, index) => (
                    <div key={index}>{item}</div>
                  ))

                }
              </div>
                
            </div>

            

            

            {/* <div className={classes.ProductSold}>
              <img src="https://media.istockphoto.com/id/1287753832/vector/sold-out-banner.jpg?s=1024x1024&w=is&k=20&c=4kJCOZyT73y-S-vSbSi3ohI98cI2O_7k3BadQH1Jg7s=" alt="sold" />
              <strong>{data.total_sales} <span>Products Sold.</span> </strong>
            </div> */}

            
          </div>

        </section>
        <section className={classes.ProductAllInfo}>
          <ul className={classes.ProductInfoMenu}>
            {
              ProductInfoList.map((item) => (
                <li key={item.title}
                className={`${classes.ProductInfoList} ${item.title === selectedInfo.title ? classes.active : ''}` }
                onClick={()=>handleInfo(item)}>{item.title}</li>
              ))
            }
          </ul>
          {
            ProductInfoList.map(item => (
              <div 
                key={item.title} 
                className={`${classes.InfoContainer} ${item.title === selectedInfo.title ? classes.active : ''}`}
              >
                <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                
              </div>
            ))
          }
         
        </section>

        <section className={classes.RelateProductList}>
          <div className={classes.RelateTitle}><strong>相關產品</strong></div>
          <ul className={classes.RelateProduct}>


          </ul>
        

        </section>
      </div>
    )

  }
  
}
