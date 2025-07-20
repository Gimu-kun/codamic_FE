import Header from '../ui/privatePage/Header'
import Footer from '../ui/privatePage/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}
