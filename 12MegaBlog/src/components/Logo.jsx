import React from "react";
 
function Logo({width ='25%' , ...props}){
    return (
        <img width={width} 
        
    className={` ${props.className}`}
    src="http://www.carlogos.org/logo/BMW-logo-black-2048x2048.png">
        </img>
    )
}
export default Logo;