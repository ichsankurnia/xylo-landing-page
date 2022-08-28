import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { dataGaleryCard } from '../dummyData';

type Props = {};

const Gallery: React.FC<Props> = () => {
    return (
        <>
            <div className='xl:max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0'>
                {dataGaleryCard.map((item, key) =>
                    <div className='bg-[#171717EB] rounded-2xl text-white border border-stone-800' key={key}>
                        <div className='flex flex-col space-y-5 items-center justify-center h-[19rem] md:h-72'>
                            <p className='text-orange uppercase text-sm font-semibold'>{item.orange_title}</p>
                            <h2 className='font-bold text-xl md:text-3xl'>{item.title}</h2>
                            <p className='font-medium text-center w-3/4 text-base md:text-lg'>{item.desc}</p>
                            <button className='px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:opacity-75 ease-in-out duration-300'>{item.btn_title}</button>
                        </div>
                        <div className='relative overflow-hidden flex justify-between items-stretch'>
                            <div className='img-array-wrp-1'>
                                <LazyLoadImage alt='' effect='blur' className='array-img-1 img' src={item.img_top_left} />
                                <LazyLoadImage alt='' effect='blur' className='array-img-2 img' src={item.img_bot_left} />
                            </div>
                            <div className='img-array-wrp-2'>
                                <LazyLoadImage alt='' effect='blur' className='array-img-3 img' src={item.img_top_mid} />
                                <LazyLoadImage alt='' effect='blur' className='array-img-4 img' src={item.img_bot_mid} />
                            </div>
                            <div className='img-array-wrp-1'>
                                <LazyLoadImage alt='' effect='blur' className='array-img-5 img' src={item.img_top_rigth} />
                                <LazyLoadImage alt='' effect='blur' className='array-img-6 img' src={item.img_bot_rigth} />
                            </div>
                        </div>
                        {/* <div className='grid grid-cols-3 gap-4 mt-5 items-end'>
                <LazyLoadImage alt='' effect='blur' className='rounded-tr-2xl rounded-br-2xl col-span-1' src={item.img_top_left} />
                <LazyLoadImage alt='' effect='blur' className='rounded-2xl col-span-2' src={item.img_top_mid} />
                <LazyLoadImage alt='' effect='blur' className='rounded-tl-2xl rounded-bl-2xl col-span-1' src={item.img_top_rigth} />
                <LazyLoadImage alt='' effect='blur' className='rounded-tr-2xl rounded-bl-2xl' src={item.img_bot_left} />
                <LazyLoadImage alt='' effect='blur' className='rounded-t-2xl' src={item.img_bot_mid} />
                <LazyLoadImage alt='' effect='blur' className='rounded-tl-2xl rounded-br-2xl' src={item.img_bot_rigth} />
              </div> */}
                    </div>
                )}
            </div>
        </>
    );
}

export default Gallery;