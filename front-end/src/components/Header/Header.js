import React from 'react';
import './Header.css';
import { useContext } from "react"; //using context api
import { MyContext } from "./../../context/MyContext";
import img from './../../assets/Vector.png'

function Header() {
    const { isLogIn, setLogin } = useContext(MyContext);
    return (
    
    
     isLogIn? <div className='navlog'> <img src={img} /> <><i className="ri-logout-box-r-line"  onClick={()=>{setLogin(false)}}>Logout</i> </>  </div>:<div className='navbar'> <img src={img} />  </div> 
    )
}

export default Header
