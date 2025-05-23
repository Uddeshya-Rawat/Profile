import {  useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Navbar({ scrollToAbout, scrollToProjects, scrollToContact ,scrollToHome }) {
  const [menuClicked, setMenuClicked] = useState(false);

  

  const toggleMenu = () => setMenuClicked(prev => !prev);

  return (
    <nav className='w-full b text-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
        {/* Logo */}
        <h1 className='text-4xl font-bold dancing ml-3 sm:ml-0'>Uddeshya</h1>

        {/* Desktop Menu */}
        <div className='hidden sm:flex gap-10 text-3xl font-semibold dancing mr-5 mt-4'>
          <NavLink className='hover:text-teal-700 transition'>Home</NavLink>
          <button className='hover:text-teal-700 transition'  onClick={scrollToAbout}>About Me</button>
          <NavLink className='hover:text-teal-700 transition'>Projects</NavLink>
          <NavLink className='hover:text-teal-700 transition'>Contact</NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button className='sm:hidden text-2xl mr-3' onClick={toggleMenu}>
          {menuClicked ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuClicked && (
        <div className='sm:hidden flex flex-col items-center  backdrop-blur-2xl py-6 text-xl font-semibold dancing p-2 mr-5'>
          <button className='hover:text-teal-700 transition'  onClick={scrollToHome}>Home</button>
          <button className='hover:text-teal-700 transition'  onClick={scrollToAbout}>About Me</button>
          <a href="#" className='py-2'>Projects</a>
          <a href="#" className='py-2'>Contact</a>
        </div>
      )}
    </nav>
  );
}
