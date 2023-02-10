import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Left from './Left/Left';
import classes from './Slider.module.css';
// import { useGetRightSideQuery } from '../../../store/indexApi';
import { useGetProductTypeListQuery } from '../../../store/indexApi';

export default function Slider() {

  // const {data, isSuccess} = useGetRightSideQuery();
  const {data, isSuccess } = useGetProductTypeListQuery({'type':'right-side', 'url': 'main/slider'});
  
  if(isSuccess){
    //  console.log(data)
    return (
      <div className={classes.Slider}>
        <Container >
          <Row>
            <Col xs={12} md={9}>
             
                <Left />
            </Col>
            <Col xs={12} md={3}>
              {
                data.map(item => {
                  return (
                    <img className={classes.Img} src={item.image} alt="" key={item.url}/>
                  )
                })
              }
              {/* <img className={classes.Img} src={top} alt=""/>
              <img className={classes.Img} src={bottom} alt=""/> */}
            </Col>
          </Row>
        </Container>
      </div>
    )

  }
  
    

  
  
}
