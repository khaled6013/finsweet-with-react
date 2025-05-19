import { Outlet } from "react-router-dom"
import Manu from "../manu/Manu"
import Footer from "../footer/Footer"


const Layout = () => {
  return (
   <>
   <Manu></Manu>
    <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default Layout