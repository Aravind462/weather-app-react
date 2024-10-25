import React from 'react'
import useFetch from './useFetch'

const Weather = ({city}) => {
    const { data, loading, error } = useFetch(city?`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`:null)

    if(loading)return <h2>Loading...</h2>
    if(error)return <h2>Error: {error}</h2>
    if(!data)return null;

    return (
        <div className='p-5 main rounded shadow fw-bolder mt-lg-5 d-flex flex-column align-items-center' style={{backdropFilter:'blur(4px)'}}>
            <p className='fs-1'>{data.name} Weather</p>
            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width='100px' alt="img" />
            <p style={{margin:'0px',padding:'0px'}} className='fs-3'>{data.main.temp}°C</p>
            <p style={{margin:'0px',padding:'0px'}} className='fs-5'>(Feels like {data.main.feels_like}°C)</p>
            <p className='fw-normal'>{data.weather[0].description}</p>
            <div className='d-lg-flex justify-content-even py-2 text-center'>
            <p className='px-2 fs-5'>Humidity<br/><span>{data.main.humidity}%</span></p>
            <p className='px-2 fs-5'>Wind Speed<br/><span>{data.wind.speed}m/s</span></p>
            <p className='px-2 fs-5'>Visibility<br/><span>{data.visibility}m</span></p>
            <p className='px-2 fs-5'>Pressure<br/><span>{data.main.pressure}hPa</span></p>
            </div>
        </div>
    )
}

export default Weather