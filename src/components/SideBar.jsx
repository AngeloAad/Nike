import React from 'react';
import { Link } from 'react-router-dom';
import { headerLogo } from '../nike_landing_assets/assets/images';
import { navLinks } from '../constants';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const SideBar = ({ toggleMenu }) => {
  return (
    <aside className="fixed top-0 right-0 h-screen w-64 bg-white 
    border-l-[3px] shadow-3xl z-30 transform transition-transform duration-300 
    ease-in-out">
        <nav className="h-full flex flex-col bg-white">
            <div className="p-4 flex justify-between items-center border-b">
                <Link to="/" onClick={toggleMenu}>
                    <img 
                        src={headerLogo} 
                        alt="logo"
                        width={100}
                        height={15} 
                        className="flex justify-end"
                    />
                </Link>
                <button onClick={toggleMenu}>
                    <CloseSharpIcon />
                </button>
            </div>

            <ul className="flex flex-col px-4 gap-4 py-10 space-y-4
            font-montserrat font-bold leading-normal justify-center
            items-center">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link 
                            to={item.href} 
                            className="fonts-montserat leading-normal text-lg text-black"
                            onClick={toggleMenu}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </aside>
  );
};

export default SideBar;