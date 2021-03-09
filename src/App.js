import { useEffect, useState } from "react"
import React from 'react'
import './App.css'
import Loading from "./components/loading"
import Covid from "./components/covid";
import axios from "axios";
const App = () => {

  const [cases, setcases] = useState([])
  const [loading, setLoading] = useState(true);
  const [countries, setcountries] = useState('')
  const [covidSummary, setcovidSummary] = useState({})
  const getcases = async () => {
    try {
      setLoading(true);
     axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
   
     .then(res=>{
       setcases(res.data)
       setcountries(res.data)
       setcovidSummary(res.data)
       setLoading(false)
     })
    } catch (error) {
      setLoading(false)
      console.log(`my error is ${error}`);

    }
  }

  useEffect(() => {
    getcases()
  }, [])

  if (loading) {
    return <Loading />
  }
  const countryHandler = (e) => {
    
    setcountries(e.target.value);
  }

 
  return (
    <>
      <div className="select">
      <select value={countries} onChange={countryHandler} >
                    <option value="">Select Country</option>
                    {
                         covidSummary.map(c=>
                            <option key={c.countryInfo._id} value={c.country}>{c.country}</option>)
                    }
                </select>
      </div> 
      
      <Covid cases={cases} />

    </>
  )
}

export default App
