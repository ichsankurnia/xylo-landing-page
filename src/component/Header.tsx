import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import AppIcon from './AppIcon';

type Props = {
    showSearchModal: (state: boolean) => any
};

const Header: React.FC<Props> = ({ showSearchModal }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    return (
        <>
            <header className="hidden bg-[#171717EB] py-2 px-4 border-b-2 border-[#1c1c1c] md:flex justify-between items-center sticky top-0 z-20">
                <button className="w-8 h-8 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm" onClick={() => showSearchModal(true)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <AppIcon />
                <button className="px-4 py-1 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm">Subscribe</button>
            </header>

            <nav className="hidden md:block bg-[#121212] border-b-2 border-[#1c1c1c] font-sohnekraftig z-10 sticky">
                <div className="max-w-7xl mx-auto">
                    <ul className="flex justify-around items-center py-4">
                        <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Podcast</li>
                        <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Newsletter</li>
                        <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Topics & Tags</li>
                        <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300 relative" onFocus={() => console.log('FOKUS')} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                            More
                            <Transition show={dropdownOpen}
                                enter="transition ease-out duration-500"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-100"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                className="origin-top-right z-10 absolute top-full -left-20 mt-1 text-white bg-[#121212] border-b border-[#1c1c1c] rounded-xl w-52"
                            >
                                <div >
                                    <ul className='flex flex-col items-center'>
                                        <li className='cursor-pointer hover:text-orange transition-all ease-in-out duration-300 py-2.5 border-b border-stone-800 w-full text-center'>About</li>
                                        <li className='cursor-pointer hover:text-orange transition-all ease-in-out duration-300 py-2.5 border-b border-stone-800 w-full text-center'>News Room</li>
                                        <li className='cursor-pointer hover:text-orange transition-all ease-in-out duration-300 py-2.5'>Contact</li>
                                    </ul>
                                </div>
                            </Transition>
                        </li>

                    </ul>
                </div>
            </nav>

            {/* MOBILE HEADER */}
            <header className="md:hidden bg-[#171717EB] py-2 px-4 border-b-2 border-[#1c1c1c] flex justify-between items-center sticky top-0 z-20">
                <button className="font-sohnekraftig hover:opacity-70 rounded-lg flex item-center ease-in-out duration-500" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <i className='fa-solid fa-xmark text-lg'></i> : <i className='fa-solid fa-bars text-base'></i>
                    }
                </button>
                <AppIcon />
                <button className="w-8 h-8 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm" onClick={() => showSearchModal(true)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </header>

            <nav className={`fixed bg-[#121212] w-full p-5 z-10 text-sm transform transition-all duration-700 ease-in-out ${mobileMenu ? 'translate-y-10' : '-translate-y-96'}`}>
                <ul className='flex flex-col items-center space-y-5 mt-3 font-semibold'>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>Podcast</li>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>Newsletter</li>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>Topics & Tags</li>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>About</li>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>News Room</li>
                    <li className='hover:text-orange ease-in-out duration-300 cursor-pointer' onClick={()=>setMobileMenu(false)}>Contact</li>
                </ul>
                <button className='mt-5 w-full bg-[#e0e0e014] border border-stone-800 py-3 rounded-lg text-xs hover:opacity-75 ease-in-out duration-300 font-medium'>Subscribe</button>
            </nav>
            {/* END MOBILE HEADER */}
        </>
    );
}

export default Header;