import { useEffect, useState } from 'react'
import './App.css'
import { country, CountryService, ApiError } from './services';

function App() {
//Hook useState
const [dataCountry,setDataCountry] = useState<country[]>([]);
const [error, setError] = useState<ApiError>();
//Hook useEffect (ejecutarlo cuando inicia por primera ves esta app)

useEffect(()=>{
  CountryService.getApiCountry()
    .then((data)=> setDataCountry(data))
    .catch((error)=>setError(error));
},[])

  return (
    <>
    <h1>Country</h1>
    <ul>
      {dataCountry.map((data)=>{
        return(
          <li key={data.id}>{data.country_name}</li>
        )
      })}
    </ul>
    </>
  )
}

export default App
