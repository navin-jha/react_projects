import { useState } from 'react'
import Header from "./Components/header.jsx";
import Footer from "./Components/footer.jsx";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main className='bg-slate-50 text-ellipsis m-8 shadow-md h-screen'>
        <Outlet />
      </main>
    </>
  )
}
export default App
