import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greetings2 from './Greetings2.jsx'
import Login from './Login.jsx'
import Calculator from './Calculator.jsx'
import Grid from './grid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <Greetings2/>
    {/* <Login/>  */}
    {/* <Grid/> */}
    {/* <Calculator/> */}
  </StrictMode>,
)
