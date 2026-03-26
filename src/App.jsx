
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componnent/Home/Home'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='checkout' element={<div>test</div>}></Route>
    </Routes>
    
    </>
  )
}

export default App
