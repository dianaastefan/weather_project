import React,{createContext, useState, useEffect} from 'react'

export const globalProvider= createContext()

function Context({children}) {

    const [data,setData]=useState([])
    const [inputSearch, setInputSearch]=useState('')
    const [url, setUrl]= useState('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5df86bcda61f026167e87e891ae64b54')

    const fetchData = async() => {
       try{
        const response = await fetch(url)
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