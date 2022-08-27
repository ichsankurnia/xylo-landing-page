import React, { useState } from 'react';

type Props = {
    onClose: (e: React.MouseEvent<HTMLElement>) => any,
};

const SearchModal: React.FC<Props> = ({ onClose }) => {
    const [text, setText] = useState('')

    const handleClearInput = () => {
        setText('')
    }
    
    return (
        <>
            <div className='fixed w-full h-full top-0 left-0 flex items-center justify-center z-50'>
                <div className='absolute w-full h-full bg-black opacity-90' onClick={onClose} />
                <div className='w-full md:w-[30%] 2xl:w-[23%] flex flex-col items-center bg-[#171717EB] text-white border border-stone-800 rounded-2xl p-8 z-50'>
                    <span className='text-center w-3/4'>Quickly find episodes, articles, and pages across the website.</span>
                    <div className='relative w-full my-6'>
                        <input type='text' placeholder='Search...' value={text} onChange={(e: any) => setText(e.target.value)} className='w-full placeholder:text-stone-400 outline-none bg-transparent focus:bg-black border border-stone-800 rounded-full py-4 pl-[52px]' autoFocus />
                        <i className="fa-solid fa-magnifying-glass absolute top-5 left-6"></i>
                        {text &&
                        <span className='absolute top-[19px] right-6 bg-stone-700 w-5 h-5 rounded-full flex justify-center items-center cursor-pointer hover:text-orange ease-in-out duration-300' onClick={handleClearInput}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                        }
                    </div>
                    <button className='w-full py-4 bg-stone-800 border border-stone-700 rounded-full hover:bg-stone-700 ease-in-out duration-300'>Search</button>
                    <div className='border border-stone-800 w-[120%] -mx-8 my-6' />
                    <div className='grid grid-cols-3 gap-x-12 text-sm text-stone-200 justify-center'>
                        <div className='flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer'>
                            <i className='fa-solid fa-fire-flame-curved bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
                            <p>Popular</p>
                        </div>
                        <div className=' flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer'>
                            <i className='fa-solid fa-clock bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
                            <p>Recent</p>
                        </div>
                        <div className='flex flex-col items-center space-y-4 hover:text-orange ease-in-out duration-300 cursor-pointer'>
                            <i className='fa-solid fa-box-archive bg-stone-800 border border-stone-700 text-white rounded-full w-14 h-14 flex justify-center items-center text-2xl'></i>
                            <p>Browse All</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchModal;