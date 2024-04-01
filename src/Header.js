 import React from "react";
 import Nav from './Nav'

 function Header(){

    return(
        <div>
        <div className="logo">
            <a href="#">
                <img src={url}/>
            </a>
            </div>
        <Nav />
        </div>
    )
 }

 export default Header