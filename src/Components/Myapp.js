import React, { useState } from 'react';
import cloud from "../images/Clouds.png"
import rain from "../images/Rain.png"
import clear from "../images/Clear.png"
import mist from "../images/mist.png"
import haze from "../images/haze.png"
import err from "../images/error.png"
const Myapp=()=>
{
    const API_KEY ="6d83156e4e40ca97d0c6924b832fe00c"
     const API = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
   const [search,setSearch]=useState("");
   const [data,setData]=useState();
   const [error,setError]=useState();
    const handleInput=(event)=>
    {
        setSearch(event.target.value)
        console.log(event.target.value);
    }
    const myFun=async()=>
    {
        const get=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
        const jsonData=await get.json()
        console.log(jsonData);
        setData(jsonData);
        if(search==="")
        {
            setError("Please Enter name");
        }
        else if(jsonData.cod==='404')
        {
            setError("Please enter valid name");
        }
        else{
            setError("")
        }
        setSearch("")
    }
    return(
        <>
            <div className='.container'>
                <div className='inputs'>
                    <input placeholder='Enter location' value={search} onChange={handleInput}/> 
                    <button onClick={myFun}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            
            {
                error ?
                <div className='errorPage'>
                    <p>{error}</p>
                    <image src={err}/>
                </div>: ""
            }
            {
                data && data.weather ?
                <div className='weaters'>
                    <h2 className='cityName'>{data.name}</h2>
                     {data.weather[0].main === "Clouds" ? <img src={cloud}/> :"" }
                               {data.weather[0].main === "Clear" ? <img src={clear}/> :"" }
                               {data.weather[0].main === "Rain" ? <img src={rain}/> : ""}
                               {data.weather[0].main === "Mist" ? <img src={mist}/> : ""}
                               {data.weather[0].main === "Haze" ? <img src={mist}/> : ""}
                    <h2 className='temprature'>{Math.trunc(data.main.temp)}°C</h2>
                        <p className='climate'>{data.weather[0].description}</p>

                </div>:""
            }
            </div>
        </>
    )
}
export default Myapp;