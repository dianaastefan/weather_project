
import React,{useState, useEffect} from 'react'
import styles from '../styles/Weather.module.css'


const Weather = () => {
    const [data,setData]=useState([])
    const [inputSearch, setInputSearch]=useState('')

    const fetchData = async() => {
       try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&APPID=5df86bcda61f026167e87e891ae64b54`)
        console.log(response)
        if(!response.ok){
            throw new Error(`HRTTP error! status ${response.status}`)     
        }
        const result = await response.json()
        
        setData(result.main)
        console.log(result)

       }catch (error){
        console.error(error)
       }
     
    }
  

console.log(data)
  return (
    <div className={styles.container}> 
       <div>
        <input type='text' value={inputSearch} onChange={ e => setInputSearch(e.target.value)}/>
        <button onClick={()=>fetchData()}>Get the weather</button>
       </div>
       <div>
       <p>{data.temp}</p>
       </div>
    
    </div>
  )
}

export default Weather