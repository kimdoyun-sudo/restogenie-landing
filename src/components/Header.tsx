'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Sticky header on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <Container>
                <nav className="mx-auto flex justify-between items-center py-3 md:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={siteDetails.siteLogo}
                            alt={siteDetails.siteName}
                            width={120}
                            height={40}
                            className="h-8 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-6">
                        {menuItems
                            .filter((item) => pathname === '/hidden' || item.url !== '#pricing')
                            .map((item) => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-slate-900 text-2xl focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <nav className="flex flex-col p-4 space-y-3">
                        {menuItems
                            .filter((item) => pathname === '/hidden' || item.url !== '#pricing')
                            .map((item) => (
                                <Link
                                    key={item.text}
                                    href={item.url}
                                    className="block py-2 px-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            ))}
                    </nav>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
