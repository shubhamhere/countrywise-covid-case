import { useEffect, useState } from "react"
import React  from 'react'
import './App.css'
import Loading from "./components/loading"
import Covid from "./components/covid";
const  App=()=> {
  
     const [cases, setcases] = useState([])
     const [loading, setLoading] = useState(true);

  const getcases=async()=>{
  try {
     const response=await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    setLoading(false);
      setcases(await response.json())
    } catch(error){
      setLoading(false)
      console.log(`my error is ${error}`);
      
    }
  }

  useEffect(() => {
    getcases()
  }, [])

  if (loading) {
    return <Loading/>
  }

  return (
   <>
  <Covid cases={cases}/>
   </>
  )
}

export default App
