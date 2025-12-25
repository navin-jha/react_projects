import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState(1)
  // const [number, setNumber] = useState(1)
 let number=value*5
 const multiplidValue=(()=>{
    
    setvalue(value+1)
  })

  return (
    <>
     <h1>mail value: {value}</h1>
     <button onClick={multiplidValue}
     >multiple by five 5</button>
     <h1>multiple value: {number}</h1>
    </>
  )
}

export default App
