import React, { useState } from 'react';
import classes from './Menu.module.css';
import { useGetMenuQuery } from '../../../store/indexApi';



function Menu() {

  const {data, isSuccess} = useGetMenuQuery();

  const [showSubMenuOther, setShowSubMenuOther] = useState(false);

  const toggleSubMenuOther = () => {
    
    setShowSubMenuOther(preState => !preState)
  }

  
  if (isSuccess){
    return (
    
      <div className={classes.MenuBox}>
        {data.map(item => {
          // console.log(item.children.length)
          if (item.children.length === 0){
            
            return (<div key={item.title} className={classes.MenuItem}>{item.title}</div>)
          }else{
            
            return (
  
               
                  <div key={item.title}>
  
                    
                      <div  className={classes.MenuItem} >  
                        <span onClick={()=>toggleSubMenuOther()}>{item.title}</span>
                      </div>
                          {
                          showSubMenuOther && 
                          <div key={Math.round(0,100)} className={classes.SubMenuItem}>{item.title}</div>}
                     
                        {item.children.map(item => {   
                          
                          return (
                            showSubMenuOther && 
                            <div key={item.title} className={classes.SubMenuItem}>{item.title}</div>
                          )
                          
                         })}
                      
                </div>
                
              )
            
              
                
              
            
          }
        })}
        {/* <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}></div>      
        <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}>
          <div className={classes.SubMenu}>
  
          </div>
        </div>
        <div className={classes.MenuItem}></div>
        <div className={classes.MenuItem}></div> */}
      </div>
    );

  }
  
  
}

export default Menu;