import React from 'react';

type Props = {};

const Subscribe: React.FC<Props> = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-col space-y-5 my-14 px-5 md:px-0'>
                <h2 className='text-xl md:text-2xl font-bold uppercase'>GET THE WEEKLY SUMMARY</h2>
                <p className='md:w-3/4 xl:w-2/5 text-sm md:text-base text-center'>Join 7,500+ including Fortune 500 CEOs, championship coaches, and bestselling authors who get my free weekly summary.</p>
                <form className='hidden md:flex justify-center'>
                    <input type='email' required placeholder='Enter your email' className='w-80 bg-transparent outline-none placeholder:text-white border border-r-0 border-white rounded-l-lg px-5 h-14' />
                    <button type='submit' className='bg-white rounded-l-none rounded-r-lg text-black h-14 px-5 font-semibold hover:opacity-75 ease-in-out duration-300'>Try It</button>
                </form>
                <form className='md:hidden flex flex-col w-full'>
                    <input type='email' required placeholder='Enter your email' className='text-center w-full bg-transparent outline-none placeholder:text-white border border-b-0 border-white rounded-t-lg px-5 h-14' />
                    <button type='submit' className='bg-white rounded-l-none rounded-b-lg text-black h-[55px] w-full font-bold hover:opacity-75 ease-in-out duration-300'>Try It</button>
                </form>
                <span className='text-stone-500 text-xs md:text-sm text-center'>By subscribing, you agree to our <span className='underline hover:text-white ease-in-out duration-300 cursor-pointer'>privacy policy</span></span>
            </div>
        </>
    );
}

export default Subscribe;