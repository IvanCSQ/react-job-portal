import { Outlet } from 'react-router-dom'
// to show navbar on every pages
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
