import { Outlet } from 'react-router-dom';
// to show navbar on every pages
import Navbar from '../components/Navbar';
// npm i react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      < ToastContainer />
    </>
  )
}

export default MainLayout
