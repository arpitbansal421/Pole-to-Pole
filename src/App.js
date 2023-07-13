import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import axios from 'axios'

import {useEffect, useState} from "react"

function App() {



  const [data,setData]=useState();
  const [inputCity,setInputCity]=useState("Delhi")
  const getWeatherDetails=(cityname)=>{
    if(!cityname){
      return;
    }
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8175a55b40205f221b9ee7da357d3115`

    axios.get(apiurl).then((res)=>{
      console.log(res.data);
      setData(res.data)


    }).catch((Error)=>{

      console.log("error",Error)

    })
    

  }

  useEffect(()=>{
    getWeatherDetails(inputCity)

  },[])

  const handlechangeinput=(e)=>{
    setInputCity(e.target.value)

  }

  const handleSearch=()=>{



    getWeatherDetails(inputCity)
  }
  return (
    <div className="col-md-12">
      <div className="whetherbg">
        <h1 className='heading'>Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">


        <input type="text"  className='form-control' onChange={handlechangeinput} value={inputCity}/>
        <button className="btn btn-primary" type='button' onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded whetherResultBox">
          <img className='weatherIcon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />

          <h5 className='weatherCity'>
            {data?.name}

          </h5>
          <h6 className="weatherTemp">
            {((data?.main?.temp)-273.15).toFixed(2)}°C

          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
