
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import AllBooks from './users/pages/AllBooks'
import ViewBook from './users/pages/ViewBook'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'
import PageNotFound from './pages/PageNotFound'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'

function App() {

  const [isLoading, setIsLoding] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(true)
    }, 4000)
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <Home /> : <Preloader />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />

        <Route path='/allBooks' element={<AllBooks />} />
        <Route path='/viewBook/:id' element={<ViewBook />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-career' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

        
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
