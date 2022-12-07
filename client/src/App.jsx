import { useState } from 'react'
import Landing from './pages/Landing'
import styled from 'styled-components'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       
        <Landing /> 
      </div>
      )
}

export default App
