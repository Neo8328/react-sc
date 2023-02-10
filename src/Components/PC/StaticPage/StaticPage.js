import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { useGetStaticPageQuery } from '../../../store/indexApi';
import classes from './StaticPage.module.css';

export default function StaticPage() {

  const {type} = useParams();
  // console.log(type)

  const {data, isSuccess } = useGetStaticPageQuery(type);

  // console.log(data)
  if(isSuccess){
    return (
      <div>
        <Header />
          <div dangerouslySetInnerHTML={{__html: data.post_content}} className={classes.StaticPage} />
        <Footer />
      </div>
    )

  }
  
}
