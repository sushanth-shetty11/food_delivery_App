import React from 'react'
import './ExploreMenu.css'
import {menu_list} from "../../assets/assets";
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Explore the Vareity of food that is availble in menu  there are just few clicks away</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div  onClick={()=>setcategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-list-items '>
                     <img  className= {category===item.menu_name?"active":""}src={item.menu_image} alt=''/>
                      <p>{item.menu_name}</p>
                     
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
