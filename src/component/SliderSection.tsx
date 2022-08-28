import React from 'react';
import Slider from 'react-slick';
import { dataSlider, smallCard } from '../dummyData';

type Props = {};

const SliderSection: React.FC<Props> = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: "button__bar",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='xl:max-w-7xl xl:mx-auto mt-5 text-black'>
                <Slider {...settings}>
                    {dataSlider.map((item, key) =>
                        <div className='relative bg-white rounded-2xl cursor-pointer hover:underline' key={key}>
                            <img alt='' src={item.img} className='w-full h-52 rounded-t-xl object-cover' />
                            <div className='absolute inset-0 h-52 flex flex-col items-center justify-between text-white py-3'>
                                <span className='bg-black bg-opacity-50 rounded-md text-[10px] font-semibold px-2.5 py-1'>NEW EPISODE</span>
                                <span className='bg-black bg-opacity-50 rounded-full text-xs px-3 py-2 font-semibold'>
                                    <i className="fa-solid fa-volume-high mr-2"></i>
                                    <span>Listen Now</span>
                                </span>
                            </div>
                            <div className='p-6'>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <p className='font-medium my-4 no-underline'>{item.desc}</p>
                                <span className='font-semibold text-orange flex items-center mt-auto no-underline'>
                                    <p>Show notes</p>
                                    <i className="fa-solid fa-angle-right ml-2"></i>
                                </span>
                            </div>
                        </div>
                    )}
                </Slider>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 mt-2'>
                    {smallCard.map((item, key) =>
                        <div className='bg-white rounded-2xl flex justify-center items-center flex-col space-y-3 px-10 md:px-16 py-5 cursor-pointer hover:text-orange transition-all transform ease-in-out duration-300' key={key}>
                            <i className={item.icon + ' bg-black text-white rounded-full w-10 h-10 flex justify-center items-center text-xl'}></i>
                            <h2 className='font-bold uppercase'>{item.title}</h2>
                            <p className='font-medium text-center'>{item.desc}</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}

export default SliderSection;