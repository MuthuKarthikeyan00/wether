import React from 'react';
import './input.css';
import logo from './logo.svg';


 const Input =({input,setinput,fW}) =>{

const valuechange = (event)=>{
  setinput(event.target.value);
 };

console.log(input);

const btnfn=(event)=>{
  event.preventDefault();
  fW(); 
};
 
  return (   
    <div className="container">
      <div className="frame">
         <div className="mk">
           <h1>My weather report</h1><br></br>
           <p>powered by </p>
           <div className="mk2">
           <img  className="app-logo" src={logo} alt="logo"></img>
           </div>

           <form>
           <input placeholder="Enter chity name" onChange={valuechange} ></input><br></br><br></br>
           <button className="btn1" type='submit' onClick={btnfn} >search</button>
           </form>
         </div>
    </div>
    <p className="des">Designed by karthik</p>
    </div>
  );
}

export default Input;
