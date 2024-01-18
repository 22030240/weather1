
import Search from "./Search"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weather , setWeather]= useState({
        city:"Janori",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"harz",
    });
    let updateInfo = (newRes) =>{
setWeather(newRes);
    }
    return(
        <div style={{textAlign:"center" }}>
            <h2>Whether App</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weather}/>

        </div>
    )
}