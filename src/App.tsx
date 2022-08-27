import { Transition } from '@headlessui/react'
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from "react-slick";
import SearchModal from './component/SearchModal';

const dataSlider = [
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62cc70a94fe9f26f25380827_Steve-Vassallo_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62ba0fde11ab0c8233c076a8_Michael-Brandt_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62c49329952d907662673af2_Adrian-Aoun_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62cc70a94fe9f26f25380827_Steve-Vassallo_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62cc70a94fe9f26f25380827_Steve-Vassallo_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62ba0fde11ab0c8233c076a8_Michael-Brandt_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62cc70a94fe9f26f25380827_Steve-Vassallo_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62f155cdacec7e666b9a127e_Saad-Alam_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  },
  {
    img: 'https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62cc70a94fe9f26f25380827_Steve-Vassallo_Thumbnail.jpg',
    title: '#120 Foundation Capital: Reinventing a 27 Year Old Venture Capital Firm | Steve Vassallo, General Partner',
    desc: 'In Episode #120, we explore reinventing a well-established venture capital firm. We’re joined by Steve Vassallo, General Partner at Foundation Capital. We cover Minimum Awesome Product and the prepared mind vs. open mind.'
  }
]

const smallCard = [
  {
    icon: 'fa-solid fa-fire-flame-curved',
    title: 'Trending Now',
    desc: 'Find the interviews and articles that are trending now.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'New Relase',
    desc: 'Catch up on all of the latest interviews and articles.'
  },
  {
    icon: 'fa-solid fa-box-archive',
    title: 'The Archives',
    desc: 'Explore the archives by browsing categories and tags.'
  }
]

const dataGaleryCard = [
  {
    orange_title: 'Listen NOW',
    title: 'Outliers Podcast',
    desc: "Every week, I sit down with someone in the Top 1% of their field to decode what they've mastered and what they've learned along the way.",
    btn_title: 'Explore Episodes',
    img_top_left: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a5cc18d6016eefd60_ds-home-1.jpg',
    img_top_mid: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692c7ce6c8272dcc60f0_ds-home-11.jpg',
    img_top_rigth: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a8d6cd9ff785a195a_ds-home-2.jpg',
    img_bot_left: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a9e216472d88bde4e_ds-home-4.jpg',
    img_bot_mid: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f64cefe0bd5525277bdaac4_ds-home-12.jpg',
    img_bot_rigth: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a00f5c3e885a74391_ds-home-3.jpg',
  },
  {
    orange_title: 'Subscribe NOW',
    title: 'Friday 5 Email',
    desc: "Every Friday, I share five things I've been reading, using, and loving—including articles, biohacks, gadgets, and more.",
    btn_title: 'Subscribe Now',
    img_top_left: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692b192d6f7ff58a3d10_ds-home-5.jpg',
    img_top_mid: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692bcf42ab6842e28978_ds-home-9.jpg',
    img_top_rigth: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a074e08b6b0dbdf6c_ds-home-6.jpg',
    img_bot_left: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692b8fafa4950143f8da_ds-home-8.jpg',
    img_bot_mid: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f64d004dc9fe7d3fdd5c039_ds-home-10.jpg',
    img_bot_rigth: 'https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f57692a081565ab4ae6f56a_ds-home-7.jpg',
  }
]

const dataFooter = [
  {
    title: 'Explore',
    childs: ['Most Popular', 'Most Recent', 'Topics & Tags', 'Friday Five']
  },
  {
    title: 'Outliers',
    childs: ['Episodes', 'Subscribe Now', 'About the Show', 'Sponsors']
  },
  {
    title: 'Articles',
    childs: ['Show Notes', 'Transcripts', 'Essays', 'Snippets']
  },
  {
    title: 'Explore',
    childs: ['About Daniel', 'Business Card', 'Newsroom', 'Contact']
  }
]

const IconApp = () => <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1479.9 180" className="cursor-pointer w-40">
  <title>Daniel Scrivner</title>
  <path className="fill-white hover:fill-orange" d="M1074.9,72.8a13,13,0,0,0,10.9-3.8c4.5-4.4,3-11.3-2.9-13.6a24.4,24.4,0,0,0-6.6-1.5,9.2,9.2,0,0,0-10.3,7.9,1.7,1.7,0,0,0-.1.7C1065.5,67.8,1069.3,72.2,1074.9,72.8Z" transform="translate(0 0)"></path>
  <path className="fill-white hover:fill-orange" d="M537,75.6a12.8,12.8,0,0,0,11.1-3.9,8,8,0,0,0,.3-11.3,7.5,7.5,0,0,0-3-2,27.1,27.1,0,0,0-6.8-1.7,9.2,9.2,0,0,0-10.4,8,1.3,1.3,0,0,0-.1.6,9.6,9.6,0,0,0,8.8,10.3Z" transform="translate(0 0)"></path>
  <path className="fill-white hover:fill-orange" d="M292.4,67.9C291.1,21,244.4.7,205.4.1,147.5-.7,14.2,31.1.8,86.4-10.1,131,97.3,149.6,128.4,160c17.6,5.8,18.6,13.6,20.8,16.4,4.4,5.3,11.4,4.7,14.4-1.5a25.3,25.3,0,0,0,2.2-7.7,237.1,237.1,0,0,1,11.3-44.6c11.2-31.5,13.7-38,14.1-49.5S176.7,57.3,171,68.6c-8,15.9-1.9,21.4-4.3,30-4.5,15.8-9.2,31.6-13.8,47.4-.9,3-2.1,3.2-5.1,1.8C102.2,126.7,9.5,113.2,21.2,86.6,38.9,46.4,158.9,15.8,205.6,17.8s69.7,25.9,69,53.5c-1.1,50.8-69.6,70-85,75.1-8.5,2.8-7.1,18.4,9.6,16.9,6-.5,35.9-12.6,64-34.8C283,113,293.1,92.8,292.4,67.9Z" transform="translate(0 0)"></path>
  <path className="fill-white hover:fill-orange" d="M1470.2,71.3c-6-5.2-15.6.7-13.2,8.7,1.3,4.5,4.6,7.1,6.1,8.7,3,3.1,3.2,5,.6,8.5-11.6,16.2-39.9,31.6-57.4,26.7-5-1.4-7.7-4.4-8.2-9.5-.2-2.5-.2-5-.2-7.5.2-13.3-6.4-22.2-18.3-27.6-14.8-6.8-33.8-8.6-41.4-6.6s-10.4,9.6-6.5,16,12.9,9.4,4.8,19.1-16.3,12.4-27,13.2a41.2,41.2,0,0,1-12.1-1.2c-3.4-.8-3.6-2.8-1.1-5.2s10.8-9,15.1-20.5-10.4-26.3-23.6-16c-10.2,7.9-14.3,18.6-13.7,31.1.2,3.9-.4,5.3-4.3,6.3a42.6,42.6,0,0,1-9.4,1.3,9.4,9.4,0,0,1-9-5,93.7,93.7,0,0,1-4-8.5c-4.8-11.2-14.5-15.5-26.2-11.3-4.2,1.5-18.1,11.2-18.3,11.1s-.9-2.1-1.5-5.5c-1.1-6.6-6-10.8-12.8-10.9s-11.2,3.5-19.9,1.8c-4.9-1-7.9,2.4-10,6.8-9.8,21.1-12.6,24.6-17.6,27.8-6.7,4.2-12.3.1-12.2-4.6.1-6.8,1.3-17,1.1-20a9.6,9.6,0,0,0-6.9-8.7,9.3,9.3,0,0,0-10.4,4c-2.7,4.4-6.9,29-29.4,31.5-5.2.6-8.4-2.4-7.8-7.6s3-11.1,2.6-15.8a8.9,8.9,0,0,0-9.4-8.3,8.7,8.7,0,0,0-6.6,3.5c-4,5.1-4.1,12.5-10.1,19.7s-14.4,11.6-23.4,14.5c-7.2,2.3-9.4-.1-7.9-7.6.2-1,2.5-8.3,3.3-12.4,1.8-10.3-3.2-18-13.6-20.5a55.8,55.8,0,0,0-21.9-1c-9.9,1.3-14,7.7-10.9,16.9,1,3.2.8,6.1-1.4,8.6C964,129,943,140.1,924.9,138.8c-6-.4-9.3-4.9-8.6-10.8,1.1-10.1,9.3-19.1,17.9-24.8,2.7-1.8,4.3-1.3,6.1,1.4s5.8,5.7,10.3,5,7.5-3.7,8.9-8.1c2.3-7.2-2.5-15.6-10.4-18.2-17.2-5.8-46.2,17.3-50.6,39.8A26.2,26.2,0,0,0,918.7,154c25,5.7,73.2-17.5,78.5-41.8a4.2,4.2,0,0,1,4.8-3.5l.8.2c2.8.9,2.3,3.1,1.9,5.1-.7,4-1.8,7.9-2,11.9-.7,11.6,6.6,22.5,21.5,21.4,12.9-.9,24.2-6,34.5-13.4,3.5-2.5,4.5-2.6,7.5.3a21.5,21.5,0,0,0,15.8,6.1,47.5,47.5,0,0,0,28.3-9.7c3.9-2.9,4.9-3.2,7.6.7,6,8.8,11.6,13.9,20.8,11.7,14.2-3.4,18.5-10.5,32.7-32.4,2.2-3.4,3-6.1,7-6.7l2.1-.4c4.2-.8,5.1.2,4.6,4.3-1.5,11.6-1.9,14.9.3,19.5a6.9,6.9,0,0,0,9,3.5l.4-.2c9-4.3,13.8-15,30.7-21.6,3.5-1.4,5.5-.3,7.6,2.8s9.8,19.2,28,17.4a77.7,77.7,0,0,0,15.1-3c3.4-1.1,5.8-.6,8.9,1.1s7.7,3.9,11.8,4.3c26.5,2.6,60.8-14.4,57.5-36.9-.4-2.6.8-3.7,3.3-3.2a117.5,117.5,0,0,1,15.5,4c5.7,1.9,8.5,6.2,9,12.2a56.7,56.7,0,0,0,2.2,12.3c2.2,7.3,7.3,12.1,14.8,14.5,14.8,4.9,49.2-2.3,74.8-30.8,11-11.9,4.9-24.8-3.8-32.4Z" transform="translate(0 0)"></path>
  <path className="fill-white hover:fill-orange" d="M864,60.2c-4.3,6.9,4.5,14.8,12.1,11.4,9.6-4.3,21.1-15.2,34.2-42.7,9-19-2-29.3-19.1-28.9C851,1,769.2,35.7,755.9,79.5c-4.2,14,1.7,26.6,17.9,28.6,20.8,2.6,63.2-8.6,90.8,1.5,4.3,1.6,4.3,7.2,1.8,11-21.3,31.7-77.2,31.7-90.1,43-6.1,5.4-1.4,19.5,9.9,14.6,24.2-10.6,88-23.1,99.5-55.6,3.1-8.6,2.6-17.3-4.4-23.2-24.7-20.7-76.3-6-104.6-8.2-3.6-.3-5-2.3-4-5.7C783.8,47.7,850,17,890,18.4c3.4.1,4.3,1.4,2.8,4.3C879.6,47.3,869.7,51.1,864,60.2Z" transform="translate(0 0)"></path>
  <path className="fill-white hover:fill-orange" d="M740.5,118.4c-26.6,21-59.5,11.8-70.2,6.7-3.4-1.6-3.5-3.1-.9-5.6,11.4-10.7,25.3-22.1,25.9-45.2.4-14.7-12.5-23.1-26.3-17.5-18,7.3-39.6,36.5-26.6,61.2,1.3,2.5.1,4.1-2,5.3-15.9,9.5-32.9,15-51.8,13.6-4.9-.4-9.7-1.4-12.4-5.4s5.7-1.9,14.5-14.4c5-7.1,11.1-19.1,2-25.5-4.8-3.4-12.2-3.1-17.1-.5-12.8,6.8-17.7,15.5-18.7,28.3-.2,2.2-.4,4.5-2.7,5.4-5.5,2.3-11.1,4-17.2,2.9s-8.2-5.1-7.4-10.4c.5-3.2,3.3-10,3.9-13.9a8.6,8.6,0,0,0-14.7-7.3c-5.7,5.5-10.6,21-24.6,31.6-2,1.5-4.1,1.6-5.9-.1-4.9-4.5-5.7-7.8-6.4-17.1-.5-7.3-7.9-11.2-15.3-10.4a29,29,0,0,0-14.6,6c-4.6,3.4-4.9,3.3-6.4-2.1-2.1-7.6-7.5-11.2-15.5-10.3-15.4,1.8-44.4,28.3-56.9,35.4-3.2,1.8-5.1.4-4.6-3.3s.6-5.1,9-23.7c2.1-4.6.4-7.8-4.4-9.2-6.8-1.9-6.9-12.2-23.1-14.4-24.6-3.4-65.2,32.8-61.1,58.5,1.5,9.4,8.6,15.7,18.2,15.5,11.8-.3,13.6-1.3,39.6-16.3,4.2-2.4,4.7-2.5,7,1.8,3.4,6.3,8.7,9.5,16.1,8.7,12-1.3,23-11.1,54.5-31.9,6.4-4.2,7.1-1.5,7.1,4.5s-.6,9.1-.8,13.6,5.5,10.1,11.6,6.2,15.1-15.8,20.6-20.5c2.7-2.3,4.8-1.4,5.6,2,1.9,8.4,7.6,13.8,14.3,18.5,4.7,3.2,9.7,4.1,15.2,1.9s10.2-6,14.6-10.1,4.4-3.5,7.7.3a27.4,27.4,0,0,0,12.9,8.5c8.5,2.6,16.8,1.5,24.9-1.1a7.9,7.9,0,0,1,8.4,1.7c8.6,6.9,21.4,12.7,47.6,8,13.1-2.4,25.1-7.9,36.1-15.1a6.9,6.9,0,0,1,8.1-.3c15.8,8.8,34.4,11.6,52.2,11.4s32.3-4.9,41.9-15.8C758.8,121.3,749.3,111.4,740.5,118.4Zm-391.2-5.8c-9.4,8.1-27.4,21.8-39.8,24.3-3.5.7-5.3-.9-5.6-4.4-.7-10.5,19.2-28,28.4-33.4C355.9,85.2,354.7,107.9,349.3,112.6Zm310.3-3.3c-4.8,2.7-6-.3-6.6-2.5s.1-15.9,17.5-32c4.6-4.3,11.2-4.2,9.5,2.7C675.1,97.6,663,107.4,659.6,109.3Z" transform="translate(0 0)"></path>
</svg>


function App() {
  const [searchModal, showSearchModal] = useState(false)
  const [mobileMenu, showMobileMenu] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
      <div className="font-poppins bg-[#0D0D0D] text-white overflow-x-hidden overflow-y-auto h-screen flex flex-col">

        <header className="hidden bg-[#171717EB] py-2 px-4 border-b-2 border-[#1c1c1c] md:flex justify-between items-center sticky top-0 z-20">
          <button className="w-8 h-8 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm" onClick={() => showSearchModal(true)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <IconApp />
          <button className="px-4 py-1 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm">Subscribe</button>
        </header>

        <nav className="hidden md:block bg-[#121212] border-b-2 border-[#1c1c1c] font-sohnekraftig z-10 sticky">
          <div className="max-w-7xl mx-auto">
            <ul className="flex justify-around items-center py-4">
              <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Podcast</li>
              <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Newsletter</li>
              <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300">Topics & Tags</li>
              <li className="cursor-pointer hover:text-orange transition-all ease-in-out duration-300 relative" onFocus={()=>console.log('FOKUS')} onMouseEnter={()=>setDropdownOpen(true)} onMouseLeave={()=>setDropdownOpen(false)}>
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
          <button className="font-sohnekraftig hover:opacity-70 rounded-lg flex item-center ease-in-out duration-500" onClick={() => showMobileMenu(!mobileMenu)}>
            {mobileMenu ? <i className='fa-solid fa-xmark text-lg'></i> : <i className='fa-solid fa-bars text-base'></i>
            }
          </button>
          <IconApp />
          <button className="w-8 h-8 bg-[#e0e0e014] font-sohnekraftig border border-stone-700 hover:opacity-70 rounded-lg text-sm" onClick={() => showSearchModal(true)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </header>

        <nav className={`fixed bg-[#121212] w-full p-5 z-10 text-sm transform transition-all duration-700 ease-in-out ${mobileMenu ? 'translate-y-10' : '-translate-y-96'}`}>
          <ul className='flex flex-col items-center space-y-5 mt-3 font-semibold'>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>Podcast</li>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>Newsletter</li>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>Topics & Tags</li>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>About</li>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>News Room</li>
            <li className='hover:text-orange ease-in-out duration-300 cursor-pointer'>Contact</li>
          </ul>
          <button className='mt-5 w-full bg-[#e0e0e014] border border-stone-800 py-3 rounded-lg text-xs hover:opacity-75 ease-in-out duration-300 font-medium'>Subscribe</button>
        </nav>
        {/* END MOBILE HEADER */}


        <div className="z-0">

          <div className="bg-[#050505]">
            <div className='max-w-7xl mx-auto px-5 flex md:flex-row flex-col-reverse justify-between items-center'>
              <div className='md:w-[40%] text-center md:text-left'>
                <h2 className='text-xl md:text-3xl mb-5 w-3/4 md:w-full font-bold text-center md:text-left mx-auto'>Timeless insights for business and life.</h2>
                <p className='text-base md:text-lg font-medium'>Every week, I sit down with someone in the Top 1% of their field — from NYT bestselling authors to Oscar winners — to decode what they've mastered. Listen as I uncover the tactics, routines, and habits that will propel you to the top of your field.</p>
                <span className="md:w-10/12 mt-5 p-4 md:p-3 flex flex-col md:flex-row items-center md:text-left bg-[#e0e0e014] border border-stone-700 rounded-xl cursor-pointer hover:bg-stone-800">
                  <LazyLoadImage className='w-28 md:w-[16rem] rounded-lg' effect='blur' alt='' src='https://assets-global.website-files.com/5f4f71d4aeab4787c7926d10/62f155cdacec7e666b9a127e_Saad-Alam_Thumbnail.jpg' />
                  <div className='mt-3 md:mt-0 md:ml-4 text-sm'>
                    <p className='uppercase text-orange'>Latest Episode</p>
                    <p>#126 Saad Alam of Hone: My Favorite Books, Tools, Habits and More | 20 Minute Playbook</p>
                  </div>
                </span>
                <div className='md:w-10/12 flex space-x-3 mt-3 mb-5 md:mb-0'>
                  <button className='bg-[#e0e0e014] border border-stone-800 rounded-lg hover:bg-stone-800 py-2 w-1/3'>Start Here</button>
                  <button className='bg-[#e0e0e014] border border-stone-800 rounded-lg hover:bg-stone-800 py-2 w-2/3'>Listen to the Podcast</button>
                </div>
              </div>
              <div className='md:w-6/12 md:-mt-10 z-0'>
                <LazyLoadImage effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f479acca51c91168e689008_card-portrait-tiny.png' />
              </div>
            </div>
          </div>

          <div className='border-2 border-[#1c1c1c]'>
            <ul className='max-w-7xl mx-auto flex items-center justify-between'>
              <li>
                <LazyLoadImage className='w-10/12' effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938df703cc23c3f591a1_ds-logo-billboard.svg' />
              </li>
              <li>
                <LazyLoadImage className='w-10/12' effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938dac97a14ded1bc1cc_ds-logo-nytimes.svg' />
              </li>
              <li>
                <LazyLoadImage className='w-10/12' effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d45fe451a495bd105_ds-logo-bloomberg.svg' />
              </li>
              <li>
                <LazyLoadImage className='w-10/12' effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d82cc6d271fee4843_ds-logo-washpost.svg' />
              </li>
              <li>
                <LazyLoadImage className='w-10/12' effect='blur' alt='' src='https://assets-global.website-files.com/5f46baf9863467a01b1aaab9/5f47938d0744f5accf1a88a2_ds-logo-espn.svg' />
              </li>
            </ul>
          </div>

          <div className='xl:max-w-7xl xl:mx-auto mt-5 text-black'>
            <Slider {...settings}>
              {dataSlider.map((item, key) =>
                <div className='bg-white rounded-2xl cursor-pointer hover:underline' key={key}>
                  <img alt='' src={item.img} className='w-full h-48 rounded-t-xl object-cover' />
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

          <div className='border border-[#1c1c1c] my-10'></div>

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

        </div>

        <footer className="bg-[#121212] border-t-2 border-[#1c1c1c] pt-3 md:pt-5">
          <div className='xl:max-w-7xl xl:mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
              <div className='flex flex-col items-center md:items-start mt-8 px-5 md:px-0'>
                <span className='text-center md:text-left'>Daniel Scrivner is an entreprenuer and investor focused on building enduring companies and breakthrough products.</span>
                <span className='text-sm text-stone-500 hover:text-orange ease-in-out duration-300 mt-1 cursor-pointer mb-6'>See what he’s working on now <i className="fa-solid fa-angle-right ml-1"></i></span>
                <IconApp />
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

      </div>

      {searchModal && <SearchModal onClose={() => showSearchModal(false)} />}
    </>
  );
}

export default App;
