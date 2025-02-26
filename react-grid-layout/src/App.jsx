import { useState } from 'react'
import './App.css'
import MyFirstGrid from './MyFirstGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyFirstGrid></MyFirstGrid> 
    </>
  )
}

export default App
