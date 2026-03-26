
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Componnent/Home/Home'
import CheckoutPage from './Componnent/CheckoutPage/CheckoutPage'
import OrserPage from './Componnent/Order/OrserPage'
import TrackingPage from './Componnent/TrackingPage/TrackingPage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='checkout' element={<CheckoutPage></CheckoutPage>}></Route>
      <Route path='orders' element={<OrserPage></OrserPage>}></Route>
      <Route path='tracking' element={<TrackingPage></TrackingPage>}></Route>
    </Routes>
    
    </>
  )
}

export default App
