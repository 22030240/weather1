// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import "./Search.css";
import { useState } from 'react';
export default function Search({updateInfo}){
    let [city , setCity] = useState("");
    let [error , setError]= useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "647b039c1934c1e9f55e69afc3b1e307";
   
    let getInformationOfWeather = async() =>{
     try{
         let res=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonFormat =  await res.json();
    console.log(jsonFormat);

    let result = {
city:jsonFormat.name,
        temp : jsonFormat.main.temp,
        tempMin : jsonFormat.main.temp_min,
        tempMax : jsonFormat.main.temp_max,
        humidity : jsonFormat.main.humidity,
        feelsLike: jsonFormat.main.feels_like,
        weather : jsonFormat.weather[0].description,


};
console.log(result);
return result;
     } catch(err){
       throw err;
     }
}

    let handlerChanger = (event) =>{
        setCity(event.target.value)
    }
    let handleSubmit = async(event) =>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("")
       let newinfo= await getInformationOfWeather();
       updateInfo(newinfo);
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="Search">
       <h3>search for weather</h3>
       <form action="" onSubmit={handleSubmit}>
       <TextField id="city" label="Search City"  variant="outlined"  required  onChange={handlerChanger} value={city}/><br /><br />
       <Button variant="contained"  type="submit" >Send</Button>
       
       </form>
       {error && <p style={{color:"red"} }>No Such Place Exist!</p>}
        </div>
        
    )
}