import './Weather.css'
import {Component} from "react";


class MyWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
            .then(response => response.json())
            .then(data => this.setState(data))
    }
    render() {
        const data = this.state;
        if (!data.name) return null;
        const srcURL = `https://openweathermap.org/img/w/${data.weather[0]['icon']}.png`;
        return (
            <div className='wrapper'>
                <div className='container'>
                    <h1>City: {data.name}</h1>
                    <p>Temperature: {Math.round(data.main.temp)}&deg;C</p>
                    <p>Pressure: {data.main.pressure} hPa</p>
                    <p>Description: {data.weather[0]['description']}</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Speed: {data.wind.speed}m/s</p>
                    <p>Degree: {data.wind.deg}&deg;</p>
                    <img src={srcURL} alt='Weather' title='Weather'/>
                </div>
            </div>

        );
    }
}
export default MyWeather;






// _________________Попытка 3 _________________//
// import React, { useState, useEffect } from 'react';
//
// function InstallWeather(props) {
//     const [weatherData, setWeatherData] = useState(null);
//
//     useEffect(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19`)
//             .then(response => response.json())
//             .then(data => setWeatherData(data))
//             .catch(error => console.error(error));
//     }, [props.city]);
//
//     if (!weatherData) {
//         return <div>Loading...</div>;
//     }
//
//     const { name, main, weather, wind } = weatherData;
//     const { temp, humidity, pressure } = main;
//     const { description, icon } = weather[0];
//     const imgUrl = `https://openweathermap.org/img/w/${icon}.png`;
//     const windSpeed = wind.speed;
//     const windDegree = wind.deg;
//
//     return (
//         <div className="wrapper">
//             <div className="container">
//                 <h1 className="place">City: {name}</h1>
//                 <p>Temperature: {temp}&deg;C</p>
//                 <p>Pressure: {pressure} hPa</p>
//                 <p>Description: {description}</p>
//                 <p>Humidity: {humidity}%</p>
//                 <p>Wind speed: {windSpeed} m/s</p>
//                 <p>Wind degree: {windDegree}&deg;</p>
//                 <img src={imgUrl} alt="Weather" title="Weather"/>
//             </div>
//         </div>
//     );
// }
//
// export default InstallWeather;