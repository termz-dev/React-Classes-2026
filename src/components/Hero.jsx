import React from 'react'
import { FaCheck, FaChevronLeft, FaMarker } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className="bg-[#030002] pt-30">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-[#341F2A] dark:text-white rounded-full" role="alert">
                <span className="text-xs bg-[#D30565] rounded-full text-white px-3 py-1 mr-5">New</span> <span className="text-sm font-medium">Try 30 days free trial option </span> 
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Free template to start <br /> your Next.js site.</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">No complexity. No noise. Just clean, reliable automation to <br /> boost your team’s efficiency.</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-full bg-[#D30565] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-[30px] border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-[#D30565] dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Watch demo
                </a>  
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                    <a href="#" className="flex items-center mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <FaCheck className='text-[#D30565] mx-2'/>  No Credit card                    
                    </a>
                    <a href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                        <FaCheck className='text-[#D30565] mx-2'/>  30 days free trial      
                    </a>
                    <a href="#" className="flex items-center mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                     <FaCheck className='text-[#D30565] mx-2'/> Set up in 10 minutes                                               
                    </a>         
                </div>
            </div> 
        </div>
    </section>
  )
}
export  function Cards() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className='mb-10'>
            <h1 className="text-3xl font-semibold text-center mx-auto">What you get</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
              Components, patterns and pages — everything you need to ship.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300 border border-[#1D293D] p-6 rounded-xl">
                    <img className="rounded-xl" src="/pixels/card1.svg" alt="" />
                    <h3 className="text-base text-slate-900 text-white font-medium mt-3">Lightning-fast setup</h3>
                    <p className="text-xs text-gray-400 font-medium mt-3">Launch production-ready pages in minutes with prebuilt components</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300 border border-[#C6005C] p-6 rounded-xl">
                    <img className="rounded-xl" src="/pixels/card2.svg" alt="" />
                    <h3 className="text-base text-slate-900 text-white font-medium mt-3">Pixel perfect</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1">Modern Figma-driven UI that translates to exact code.</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300 border border-[#1D293D] p-6 rounded-xl">
                    <img className="rounded-xl" src="/pixels/card3.svg" alt="" />
                    <h3 className="text-base text-slate-900 text-white font-medium mt-3">Highly customizable</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1">Tailwind utility-first classes make customization trivial.</p>
                </div>
            </div>
                 
            </div>
        </>
    );
};
export default Hero
