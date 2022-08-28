import React from 'react';
import { dataFooter } from '../dummyData';
import AppIcon from './AppIcon';

type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <>
            <footer className="bg-[#121212] border-t-2 border-[#1c1c1c] pt-3 md:pt-5">
                <div className='xl:max-w-7xl xl:mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        <div className='flex flex-col items-center md:items-start mt-8 px-5 md:px-0'>
                            <span className='text-center md:text-left'>Daniel Scrivner is an entreprenuer and investor focused on building enduring companies and breakthrough products.</span>
                            <span className='text-sm text-stone-500 hover:text-orange ease-in-out duration-300 mt-1 cursor-pointer mb-6'>See what he’s working on now <i className="fa-solid fa-angle-right ml-1"></i></span>
                            <AppIcon />
                        </div>
                        <div className='xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                            {dataFooter.map(({ title, childs }, key) =>
                                <div className='flex flex-col items-center md:items-start space-y-4 mt-8' key={key}>
                                    <h4 className='text-white'>{title}</h4>
                                    <ul className='flex flex-col items-center md:items-start space-y-4 text-sm'>
                                        {childs.map((item, index) =>
                                            <li className='text-stone-500 ease-in-out duration-500 hover:text-white cursor-pointer' key={index}>{item}</li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className='border-t border-[#1c1c1c] mt-10'>
                    <div className='xl:max-w-7xl xl:mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-stone-500 text-xs py-5 space-y-3 md:space-y-0'>
                        <span className='w-7/12 md:w-max text-center'>Copyright © 2020 Daniel Scrivner. All rights reserved.</span>
                        <ul className='flex space-x-5'>
                            <li className='ease-in-out duration-500 hover:text-white cursor-pointer'>Privacy & Terms</li>
                            <li className='ease-in-out duration-500 hover:text-white cursor-pointer'>Disclosures</li>
                            <li className='ease-in-out duration-500 hover:text-white cursor-pointer'>Sitemap</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;