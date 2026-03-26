
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componnent/Home/Home'
import CheckoutPage from './Componnent/CheckoutPage/CheckoutPage'
import OrserPage from './Componnent/Order/OrserPage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='checkout' element={<CheckoutPage></CheckoutPage>}></Route>
      <Route path='orders' element={<OrserPage></OrserPage>}></Route>
    </Routes>
    
    </>
  )
}

export default App
