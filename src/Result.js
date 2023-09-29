import './result.css'

import React from 'react';

  function Result({temp,desc,icon,setTemp})
  {
 return(

  <div>
   <div className="box"> 
   
         
   <h1 className="bgc" >Temp: {temp}</h1><br></br>
    <p className="pp">{desc}</p><br></br>
    <img className="bgc" src={icon} alt="logo"></img><br></br>
    <button className="btn2"  onClick={()=>{setTemp("")}} >back</button><br></br>
    

  </div> 

<p className="des">Designed by karthik</p>
  </div>


  );

}

export default Result;
