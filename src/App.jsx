import React,{ useEffect, useState , useRef } from 'react'

let firstLoadCheck=1;
export default function App() {
const [name, setName] = useState("");
const renderNum= useRef(1);
const inputRef= useRef();
const prevName= useRef("");

const inputRefFunction = ()=>{
  inputRef.current.focus();
}
  
  useEffect(() =>{
    firstLoadCheck++;
    console.log(firstLoadCheck);
    if(firstLoadCheck==3){
      console.log("firstLoadCheck Reached")
      renderNum.current=1;
    }
    prevName.current= name;
    renderNum.current= renderNum.current + 1;
  })


  return (
    <>
    <div className='bg-gray-500 w-1/5 mx-auto text-center'>
    <input className='text-black justify-center' ref={inputRef} type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br/>
   <div>My name is {name}</div>
    <div>This Element was rendered {renderNum.current} Times.</div>
    <button className='text-black outline-2 outline-red-600 border-solid border-2 border-slate-800' onClick={inputRefFunction}>Focus</button>
   <div>{prevName.current}</div>
    </div>
    </>
  )
}


