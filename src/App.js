import React,{useState} from 'react';
import './App.css';

import Input from './Input';
import axios from "axios";
import Result from './Result'

function App() {
  const [input,setinput] =useState("");
  
  const [temp,setTemp]=useState('');
  const [description,setDescription]=useState("");
  const [icon,setIcon]=useState("");

  const fW= async()=>{
    const apikey="ef447e1b751454af5a8c8832804b3e36";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid="+apikey+"&units="+unit;
    const response=await axios.get(url);
     
  const temp=await response.data.main.temp;
    const description= await response.data.weather[0].description;
    const icon= await response.data.weather[0].icon;
    const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    console.log(response);
    console.log(temp,description,icon,imageURL);


    setTemp(temp);
    setDescription(description);
    setIcon(icon);
    

   }
  
  return (
<div>
   
 {(temp==="") ?(
<Input input={input} setinput={setinput} fW={fW}/>
 ) :(

<Result temp={temp} desc={description} icon={icon} setTemp={setTemp}/>
)}
   
</div>
    
  );
}

export default App;
