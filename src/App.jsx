
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componnent/Home/Home'
import CheckoutPage from './Componnent/CheckoutPage/CheckoutPage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='checkout' element={<CheckoutPage></CheckoutPage>}></Route>
    </Routes>
    
    </>
  )
}

export default App
