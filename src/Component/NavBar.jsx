import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenu = () => setMenuClicked(prev => !prev);

  return (
    <nav className='w-full b text-white fixed top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
        {/* Logo */}
        <h1 className='text-4xl font-bold dancing ml-3 mt-4'>Uddeshya</h1>

        {/* Desktop Menu */}
        <div className='hidden sm:flex gap-10 text-3xl font-semibold dancing mr-5 mt-4'>
          <a href="#" className='hover:text-teal-400 transition'>Home</a>
          <a href="#" className='hover:text-teal-400 transition'>About Me</a>
          <a href="#" className='hover:text-teal-400 transition'>Projects</a>
          <a href="#" className='hover:text-teal-400 transition'>Contact</a>
        </div>

        {/* Mobile Toggle Button */}
        <button className='sm:hidden text-2xl mr-3' onClick={toggleMenu}>
          {menuClicked ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuClicked && (
        <div className='sm:hidden flex flex-col items-center  backdrop-blur-2xl py-6 text-xl font-semibold dancing p-2 mr-5'>
          <a href="#" className='py-2'>Home</a>
          <a href="#" className='py-2'>About Me</a>
          <a href="#" className='py-2'>Projects</a>
          <a href="#" className='py-2'>Contact</a>
        </div>
      )}
    </nav>
  );
}
