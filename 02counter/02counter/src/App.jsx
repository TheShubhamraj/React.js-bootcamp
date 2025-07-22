import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter,setCounter] = useState(15);

  const addValue = () =>{
    if (Counter<20) {
       setCounter(Counter+1)
    }
   
  }
  
// if(Counter >=0){
  const dec = ()=>{
    if(Counter >0){
    setCounter(Counter-1)
    }
  }
// }
  

 

  return (
    <>
     
      <h1>chai aur react with shubham raj {Counter}</h1>
      <h2>Counter Value:{Counter}</h2>
      <button onClick={addValue}>add Counter {Counter}</button>

      <br />
      <br />
     
        <button onClick={dec}>remove Counter  {Counter}</button>
      

    </>
  )
}

export default App
