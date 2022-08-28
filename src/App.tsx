import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Header from './component/Header';
import SearchModal from './component/SearchModal';
import SliderSection from './component/SliderSection';
import Subscribe from './component/Subscribe';


function App() {
  const [searchModal, showSearchModal] = useState(false)

  return (
    <>
      <main className="font-poppins bg-[#0D0D0D] text-white overflow-x-hidden overflow-y-auto h-screen flex flex-col">

        <Header showSearchModal={()=>showSearchModal(true)} />

        <section className="z-0">

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

          <SliderSection />

          <div className='border border-[#1c1c1c] my-10' />

          <Gallery />

          <Subscribe />

        </section>

        <Footer />

      </main>

      {searchModal && <SearchModal onClose={() => showSearchModal(false)} />}
    </>
  );
}

export default App;
