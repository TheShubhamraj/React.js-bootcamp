import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import Card from './Components/Card'

function App() {
  //   const [username] = useState("Alice Johnson");
  //  const [btnText] = useState("View Profile");

  return (
    <>
    
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>Tailwind Test </h1>
      <Card username = "shubham raj"/>
      <Card />
       
      
    </>
  )
}

export default App
