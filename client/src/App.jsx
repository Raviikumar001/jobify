import { useState } from 'react'

import styled from 'styled-components'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Dashboard, Register, Landing, Error } from './pages'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/landing' element={ <Landing/>}/>
    <Route path='/*' element={<Error/>}/>
   
    </Routes>
    </BrowserRouter>
   
      )
}

export default App
