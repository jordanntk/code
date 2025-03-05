import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { useAutoAnimate } from '@formkit/auto-animate/react'


const Header = () => {
  const [animationParent] = useAutoAnimate()

  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);

  const toggleSideMenu = () => {
    if (!isSideMenuOpen) {
      setSideMenu(true);
      // Slight delay before showing backdrop for smoother animation
      setTimeout(() => setBackdropVisible(true), 10);
    } else {
      setBackdropVisible(false);
      // Wait for fade-out animation to complete before removing from DOM
      setTimeout(() => setSideMenu(false), 300);
    }
  }

  return (
    <div>
       <header className="fixed top-0 left-0 w-full flex justify-between items-center text-black bg-white py-6 px-6 md:px-10 drop-shadow-md z-40">
        <nav>
        <Link to="/" className="text-xl flex items-center">
  <img 
    src={logo} 
    alt="logo" 
    className="h-14 md:h-16 -my-2" 
  />
</Link>
        </nav>

        <i className='bx bx-menu block bx-md cursor-pointer' onClick={toggleSideMenu}></i>
       </header>
       
       {isSideMenuOpen && (
         <SideBar visible={backdropVisible} closeMenu={toggleSideMenu} />
       )}
    </div>
  )
}

function SideBar({ visible, closeMenu }) {
  return (
    <div 
      className={`fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 z-50 backdrop-blur-sm transition-all duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`h-full w-[280px] bg-white px-6 py-4 shadow-xl transform transition-all duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <section className='flex justify-end mb-6'>
          <IoIosClose className='cursor-pointer text-6xl hover:text-blue-600 hover:rotate-90 transition-all duration-300' onClick={closeMenu}/>
        </section>
        
        {/* sidebar navigation links */}
        <nav className="flex flex-col space-y-3 mt-10">
        <Link 
    to="/" 
    className="flex items-center py-3 px-4 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
    onClick={closeMenu}
  >
    <i className='bx bx-home-alt mr-3 text-xl group-hover:translate-x-1 transition-transform'></i>
    <div className="flex flex-col">
      <span>Home</span>
      <span className="text-sm font-normal">홈</span>
    </div>
  </Link>
          
          <Link 
            to="/store" 
            className="flex items-center py-3 px-4 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            onClick={closeMenu}
          >
            <i className='bx bx-store-alt mr-3 text-xl group-hover:translate-x-1 transition-transform'></i>
            <div className="flex flex-col">
              <span>Store Page</span>
              <span className="text-sm font-normal">스토어 페이지</span>
            </div>
          </Link>
          
          <Link 
            to="/about" 
            className="flex items-center py-3 px-4 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            onClick={closeMenu}
          >
            <i className='bx bx-info-circle mr-3 text-xl group-hover:translate-x-1 transition-transform'></i>
            <div className="flex flex-col">
              <span>About</span>
              <span className="text-sm font-normal">소개</span>
            </div>
          </Link>
          
          <Link 
            to="/faq" 
            className="flex items-center py-3 px-4 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            onClick={closeMenu}
          >
            <i className='bx bx-question-mark mr-3 text-xl group-hover:translate-x-1 transition-transform'></i>
            <div className="flex flex-col">
              <span>FAQ</span>
              <span className="text-sm font-normal">자주 묻는 질문</span>
            </div>
          </Link>
          
          <Link 
            to="/contact" 
            className="flex items-center py-3 px-4 text-lg font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
            onClick={closeMenu}
          >
            <i className='bx bx-envelope mr-3 text-xl group-hover:translate-x-1 transition-transform'></i>
            <div className="flex flex-col">
              <span>Contact Us</span>
              <span className="text-sm font-normal">문의하기</span>
            </div>
          </Link>
        </nav>
        
        <div className="absolute bottom-8 left-6 right-6">
          <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg">
            <p className="text-sm text-gray-700 font-medium">Need help with your mental health?</p>
            <p className="text-xs text-gray-500">정신 건강에 도움이 필요하신가요?</p>
            <p className="text-xs text-gray-600 mt-2 mb-2">Get personalized solutions based on your assessment results.</p>
            <p className="text-xs text-gray-500 mb-3">평가 결과를 기반으로 맞춤형 솔루션을 받아보세요.</p>
            <Link 
              to="/" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
              onClick={closeMenu}
            >
              <div className="flex flex-col">
                <span className="flex items-center">
                  Take an assessment
                  <i className='bx bx-right-arrow-alt ml-1'></i>
                </span>
                <span className="text-xs">평가 시작하기</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;