import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Pagination.module.css';

export default function Pagination(props) {

  const {totalPage, categories, page} = props.config;

  // console.log(props.config)
  const [pageFocus, setPageFocus] = useState(+page);
  // console.log(pageFocus)
  const clickHandler = (e) => {
    // console.log(e.target.innerText)
    // console.log(e)
    setPageFocus(+e.target.innerText)
  }

  const goPrev = () => {
    if (pageFocus > 1)
    {
      // console.log(pageFocus)
      setPageFocus(pageFocus-1)
    }else{
      return
    }
    
  }

  const goNext = () => {
    if (pageFocus < totalPage)
    {
      // console.log(pageFocus)
      setPageFocus(pageFocus+1)
    }else{
      return
    }
  }
 

  // console.log("i" + pageFocus)

  let pages = [];

  pages.push(<Link key={0} to={`/cg/${categories}/${pageFocus-1}`} ><li  onClick={goPrev} className={pageFocus === 1 ? classes.nomore : ""}>上一页</li></Link>);
  for(let i = 1; i<=totalPage;i++){
    // pages.push(<li key={i} onClick={()=>{(setPageFocus(i))}} className={pageFocus === i ? classes.active : ""}>{i}</li>)
    // console.log(i, pageFocus)
    pages.push(<Link key={i} to={`/cg/${categories}/${i}`}><li  onClick={clickHandler} className={pageFocus === i ? classes.active : ""}>{i}</li></Link>)
  }
  pages.push(<Link key={totalPage+1} to={`/cg/${categories}/${pageFocus+1}`}><li key={totalPage+1} onClick={goNext} className={pageFocus === totalPage ? classes.nomore : ""}>下一页</li></Link>)

  return (
    <div className={classes.main}>
      <ul className = { classes.page }>
          {pages}
      </ul>
  </div>
  )
}
