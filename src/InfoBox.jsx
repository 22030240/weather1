import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
   const Img_url="https://media.istockphoto.com/id/174860450/photo/los-angeles.jpg?s=612x612&w=0&k=20&c=Xobvo1sFYFBFDf7SB4nvLX8adN39kaYRc5piLl6fkdg="
    const Hot_Url="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?b=1&s=170667a&w=0&k=20&c=H7WvPOgOX-iVivqwBE842Wda80r7fAm5ZFalNAO-upk=";
    const Rainy_url="https://media.istockphoto.com/id/1409305530/photo/monsoon-season-india.webp?b=1&s=170667a&w=0&k=20&c=3Jd5JlkTv-P6a5VT3lfdBiOMzGrCEDddvlXyQXvMHjc=";
    const cold_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
    
    
    return(
    
        <div className="InfoBox">
            <br />

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity >80 ? Rainy_url :info.temp >25 ? Hot_Url:cold_url }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} &nbsp;&nbsp;{info.humidity >80 ? <BeachAccessIcon/>:info.temp >25 ? <WbSunnyIcon/>:<AcUnitIcon/> }
       
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature ={info.temp}</p>
         <p>Humidity ={info.humidity}&deg;C</p>
         <p>Min Temperature ={info.tempMin}</p>
         <p>Max Temperature ={info.tempMax}</p>
         <p>The weather can be describe as <b>{info.weather}</b> Feels Like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}