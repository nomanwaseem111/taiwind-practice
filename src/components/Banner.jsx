import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <div className='bg-[#3498db] p-3 py-[100px]'>
        <div className='max-w-[1240px] my-0 md:my-[100px]  mx-auto text-center'>
          <h1 className='text-xl md:text-[50px] font-bold'>
            Hi
          </h1>
           <h2 className='text-3xl md:text-[100px] text-white font-bold mt-[20px] md:mt-[80px]'>I'm Noman</h2>
           <h2 className='text-2xl md:text-[80px] font-bold mt-[20px] md:mt-[90px]'>
            Learn
             <Typed
                 className='pl-2 md:pl-4'
                    strings={['Web Development','Web Designing','Digital Marketing']}
                    typeSpeed={100}
                    loop={true}
                />
           </h2>
        </div>
    </div>
  )
}

export default Banner
