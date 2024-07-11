import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { headerLogo } from '../nike_landing_assets/assets/images';
import { hamburger } from '../nike_landing_assets/assets/icons';
import SideBar from './SideBar';
import { navLinks } from '../constants';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // Prevent negative scroll values
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <header className={`padding-x py-8 fixed w-full z-10 transition-all duration-300 ${isVisible ? 'top-0' : '-top-20'}`}>
            <nav className="flex justify-between items-center max-container">
                <Link to="/">
                    <img 
                        src={headerLogo} 
                        alt="logo"
                        width={130}
                        height={29}
                    />
                </Link>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link 
                                to={item.href} 
                                className="fonts-montserat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul> 

                <div className="hidden max-lg:block">
                    <button onClick={toggleMenu}>
                        <img 
                            src={hamburger} 
                            alt="hamburger" 
                            width={25}
                            height={25}
                            className="cursor-pointer"
                        />
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <SideBar toggleMenu={toggleMenu} />
            )}
        </header>
    );
};

export default Nav;
