
import React,{useContext, useState, useEffect} from 'react'
import { globalProvider } from './context/Context'
import styles from '../styles/Weather.module.css'


const Weather = () => {
  const {currentData, inputData} = useContext(globalProvider)
  const [data, setData] = currentData
  const[inputSearch, setInputSearch]= inputData

console.log(data)
  return (
    <div className={styles.container}> 
        
       
       {/* {data.map((city, index) => {
          return (
            // <div key={index}>
            //   {city}
            // </div>
          )

       })} */}

       <div>
        <input type='text' value={inputSearch} onChange={ e => setInputSearch(e.target.value)}/>
        <button>Get the weather</button>
       </div>
       <div>
       <p>{data.temp}</p>
       </div>
    
    </div>
  )
}

export default Weather