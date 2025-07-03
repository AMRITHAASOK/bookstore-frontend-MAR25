import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
   <Navbar fluid rounded className='!bg-amber-950 fixed top-0 left-0 w-full'>
      <NavbarBrand href="/">
        <img src="https://static.vecteezy.com/system/resources/previews/028/247/965/original/stack-of-old-book-png.png" className="mr-3 h-6 sm:h-9" alt=" Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold !text-amber-100 dark:text-white">Story Harbor</span>
      </NavbarBrand>
      <div className="flex md:order-2">
<Link to={'/login'}>
        <Button className='p-5 text-xl !bg-amber-100 text-amber-950'>Login <IoMdLogIn className='text-4xl ms-3'/></Button>

</Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <Link to="/allBooks" className=' !text-amber-100 '>Books</Link>
        <Link to="/careers" className=' !text-amber-100 '>Careers</Link>
        <Link to="/contact" className=' !text-amber-100 '>Contact</Link>
      </NavbarCollapse>
    </Navbar>  </div>
  )
}

export default Header
