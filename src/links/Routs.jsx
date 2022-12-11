import { Route, Routes } from 'react-router-dom'
import Dashboard from '../componenet/screens/Dashboard'
import Login from '../componenet/screens/Login'
import Navbar from '../componenet/screens/Navbar'
import Signup from '../componenet/screens/Signup'
const Routs = () => {
  return (
    <>
    <Navbar/>

<Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
</Routes>


    </>
  )
}
export default Routs