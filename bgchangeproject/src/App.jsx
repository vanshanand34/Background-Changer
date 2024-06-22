import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <div className='w-full h-screen duration-200'   
    style={{backgroundColor:color}}
    >
      <div className='fixed flex justify-center bottom-12 flex-wrap inset-x-0 px-2' >
        <div className='flex justify-center gap-3 bg-white flex-wrap rounded-lg inset-x-2 py-2 px-3 sadow-3xl'>
          <button 
          onClick={()=> setColor("red")}
          className='rounded-full text-white shadow-3xl outline-none px-4 py-1' 
          style={{backgroundColor:'red',color:'white'}}>Red</button>
          <button 
          onClick={()=> setColor("violet")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'violet',color:'white'}}>Violet</button>
          <button 
          onClick={()=> setColor("blue")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'blue',color:'white'}}>Blue</button>
          <button 
          onClick={()=> setColor("yellow")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'yellow',color:'black'}}>Yellow</button>
          <button 
          onClick={()=> setColor("black")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'black',color:'white'}}>Black</button>
          <button 
          onClick={()=> setColor("olive")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'olive',color:'white'}}>Olive</button>
          <button 
          onClick={()=> setColor("green")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'green',color:'white'}}>Green</button>
          <button 
          onClick={()=> setColor("brown")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'brown',color:'white'}}>Brown</button>
          <button 
          onClick={()=> setColor("gray")}
          className='rounded-full text-white shadow-3xl outline-none px-4' 
          style={{backgroundColor:'gray',color:'white'}}>Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
