import React, {useState} from 'react'
import { AiOutlineMenu ,AiOutlineClose} from "react-icons/ai";

const Header = () => {
  
    const [toggle, settoggle] = useState(false)

    return (
    <div className='bg-[#3498db] p-4'> 
 
    <div className='max-w-[1240px] mt-[10px]  mx-auto'>

         <nav className='flex justify-between items-center'>
           <h1 className='pl-2 md:pl-0 text-2xl md:text-3xl font-bold text-white'>Developer</h1>

           {
             toggle ?  <AiOutlineClose onClick={() => settoggle(!toggle)} className='text-3xl text-white md:hidden block'/> : 
                           <AiOutlineMenu onClick={() => settoggle(!toggle)}  className='text-3xl text-white md:hidden block' />


           }
   
       

           <ul className='hidden md:flex gap-20 text-white cursor-pointer'>
            <li className='text-base uppercase' >Home</li>
            <li className='text-base uppercase'>About</li>
            <li className='text-base uppercase'>Services</li>
            <li className='text-base uppercase'>Contact</li>
           </ul>
           {/* <h1>responsive navbar</h1> */}

          <ul className={`duration-300 md:hidden h-screen flex  justify-center items-center flex-col  text-white cursor-pointer  fixed 
           top-[78px] w-full bg-black  ${toggle ? 'left-0': 'left-[-100%]'}`}>
            <li className='text-base uppercase py-5 text-center' >Home</li>
            <li className='text-base uppercase py-5 text-center'>About</li>
            <li className='text-base uppercase py-5 text-center'>Services</li>
            <li className='text-base uppercase py-5 text-center'>Contact</li>
           </ul> 
  
           
    
         </nav>
    </div>
 </div>
  )
}

export default Header
