import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Header = () => {
  const [animationParent] = useAutoAnimate()

  const [isSideMenuOpen, setSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setSideMenu(!isSideMenuOpen);
  }

  return (
    <div>
       <header className="fixed top-0 left-0 w-full flex justify-between items-center text-black bg-white py-6 px-6 md:px-10 drop-shadow-md">
        <nav>
          <Link to="/" className="text-xl">
            <img src={logo} alt="logo" className="h-12" />
          </Link>
        </nav>

        <i className='bx bx-menu block bx-md cursor-pointer' onClick={toggleSideMenu}></i>

       </header>
       <div ref={animationParent}>
            {isSideMenuOpen && <SideBar closeMenu={toggleSideMenu}/>}
          </div>
    </div>
  )
}

function SideBar({ closeMenu}){
  return(
    <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60'>
      <div className='h-full w-90 bg-white px-4 py-4' >
        <section className='flex justify-end'>
          <IoIosClose className='cursor-pointer text-6xl' onClick={closeMenu}/>
        </section>
        {/* sidebar content here */}
        
      </div>
    </div>
  );
}

export default Header;