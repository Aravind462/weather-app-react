import { useState, useEffect, useRef } from 'react';
import Weather from './Weather';
import './App.css'

function App() {
  const [cityName,setCityName] = useState('')
  const [inputValue,setInputValue] = useState('')
  const inputRef = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setCityName(inputValue.trim())
    setInputValue('')
    inputRef.current.blur();
  }
  
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <>
      <div className='bg d-flex flex-column align-items-center'>
        <nav className='container py-3 d-flex justify-content-between align-items-center'>
          <h2 className='fw-bold'>Weather App</h2>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" style={{width:'200px',paddingLeft:'30px',opacity:'0.8'}} className='form-control rounded-5' placeholder='Search'/>
            <i id="icon" className='fa-solid fa-search text-secondary'></i>
          </form>
        </nav>
        <Weather city={cityName}/>
      </div>
    </>
  )
}

export default App
