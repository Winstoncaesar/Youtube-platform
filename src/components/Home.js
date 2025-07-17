import React from 'react'
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
const Home = () => {
  return (
    <div className={"Home-side"}>
   <div>
    <button className="homeIcons" type="button">
    <MdHome size={30}  />
    <p>Home</p>
    </button>
    </div>
    <div>
    <button className="homeIcons"  type="button">
    <SiYoutubeshorts  size={24}/>
    <p> Shorts</p>
    </button>
    </div>
    <div>
    <button className="homeIcons"  type="button">
     <MdSubscriptions size={24}  />
    <p className="sub">Subscriptions </p>
    </button>
    </div>
    <div>
    <button className="homeIcons" type="button">
    <CgProfile size={24}/>
    <p>You</p>
    </button>
    </div>
    
    </div>
  )
}

export default Home