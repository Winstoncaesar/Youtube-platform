import React from 'react'
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { HiMicrophone } from "react-icons/hi2";

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="head">
    <div className='header1'>
    <button  className="iconButton"type= "button" size="icon">
      <CiMenuBurger  size={20}  className='homeBar'/>
  </button>
    <div className="logo">
     <img src='./logo.png' alt="youtube logo" style={{ width: '100px', height: '70px' }}  />
    </div>
    </div>
    <div className="searchInput">
    <input type="search"
     placeholder="Search"
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}
    />
    <CiSearch  size={20}  />
    <button  className="iconButton" type= "button" size="icon">
    <HiMicrophone size={20} />
    </button>
    </div>
     

     <div className="headerIcon">
     <div>
    <button className="iconButton" type= "button" size="icon">
    + Create
    </button>
      </div>
      <div>
    <button  className="iconButton" type= "button" size="icon">
      <IoIosNotifications/>
    </button>
      </div>
      <div>
    <button  className="iconButton" type= "button" size="icon">
      <CgProfile size={24}/>
    </button>
    </div>
    </div>
    </div>
  )
}

export default Header