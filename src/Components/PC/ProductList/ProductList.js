import React from 'react';
import { useParams  } from 'react-router-dom';
import { useGetProductListQuery } from '../../../store/indexApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Title from './Ttitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import classess from './ProductList.module.css';
import Pagination from '../UI/Pagination/Pagination';

export default function ProductList() {

  const {categories, page} = useParams();

  const {data, isSuccess} = useGetProductListQuery({categories,page});

  // console.log(data)
  

  if (isSuccess){

    const {list, num_per_page, total_count} = data
    return (
      <div>
        <Header />
        <Title categorie={categories}/>
        <Container className={classess.Container}>
          <Row >
            {list.map(item => {
              return (
                <Col xs={6} md={3} key={item.product_id}>
                  <div  className={classess.ImgBox}>
                    <Link to={`/product${item.url}`} ><img src={item.image} alt="" className={classess.image}/></Link>
                  </div>
                  
                </Col>
              )
              
            })}
            </Row>
            
        </Container>
        <Pagination config={{
                          totalPage: Math.ceil(total_count / num_per_page),
                          page: page,
                          categories: categories
                          
                          }}/>
        <Footer />
      </div>
    )

  }
  
}
