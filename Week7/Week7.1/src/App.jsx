import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Appbar } from './Appbar'
import { lazy, Suspense } from 'react'
const Dashboard = lazy(()=>import('./Components/Dashboard'))
const Landing = lazy(()=>import('./Components/Landing'))
function App() {
  return (
    <>
    <BrowserRouter>
      <Appbar />
      <Navbar  />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback="Loading..."> <Dashboard/></Suspense>} />
        <Route path='/' element={<Suspense fallback="Loading..."> <Landing/></Suspense>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
