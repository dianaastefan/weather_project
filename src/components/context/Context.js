import React,{createContext, useState, useEffect} from 'react'

export const globalProvider= createContext()

function Context({children}) {

    const [data,setData]=useState([])
    const [inputSearch, setInputSearch]=useState('')

    const fetchData = async() => {
        // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={5df86bcda61f026167e87e891ae64b54}") 
       const response = await fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5df86bcda61f026167e87e891ae64b54")
        const result = await response.json()
        setData(result.data)
    }

    useEffect(()=>{
        fetchData()
    }, [])

  return (
   <globalProvider.Provider value={{
      currentData :[data, setData],
      inputData: [inputSearch, setInputSearch]
   }}>
    {children}

   </globalProvider.Provider>
  )
}


export default Context