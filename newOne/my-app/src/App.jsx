import { useState } from 'react'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  function display() {
    toast.success("hello world")
  }

  return (
    <>
      <button onClick={display}>test</button>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
