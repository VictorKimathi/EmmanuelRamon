import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, DownloadIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Experience',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-black">Emmanuel Ramon</span>
          <span className="text-blue-600">.</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-8">
              {navItems.map(item => <li key={item.name}>
                  <Link to={item.path} className={`text-sm font-medium transition duration-150 ease-in-out hover:text-blue-600 ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-800'}`}>
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </nav>
          <a href="emmanuel-resume.docx" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-150 ease-in-out">
            <DownloadIcon size={16} className="mr-2" />
            Resume
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-b border-gray-100">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map(item => <li key={item.name}>
                  <Link to={item.path} className={`block text-sm font-medium transition duration-150 ease-in-out hover:text-blue-600 ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-800'}`} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>)}
              <li>
                <a href="https://example.com/emmanuel-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-150 ease-in-out" onClick={() => setIsMenuOpen(false)}>
                  <DownloadIcon size={16} className="mr-2" />
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>}
    </header>;
};
export default Header;