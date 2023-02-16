
import React from 'react'
//basically its our header->
const Hero = () => {
  return (
   <div className=' max-w-[1640px] mx-auto p-4 ' >
   {/* overlay */}
   <div className=' max-h-[700px] relative '>
   <div className=' absolute text-gray-300 bg-black/60 sm:bg-black/50 w-full h-full max-h-[700px] flex flex-col justify-center '>
   <h1 className='px-4 sm:px-7 sm:not-italic text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold italic font-serif text-gray-300/100'>The <span className='text-orange-300/100 sm:text-orange-500 italic '> Best</span></h1>
   <h1 className=' px-4 sm:px-7 text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold italic font-serif sm:not-italic text-gray-300/100'><span className='text-orange-300/100 sm:text-orange-500 italic'> Foods</span> Delivered</h1>
   </div>
   <img className='sm:hidden  max-h-[700px] object-fit w-full' src="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="/" />

    <div className='hidden sm:block  h-[600px] w-[100%] '>
   <img className=' object-cover w-full h-full' src="https://media.istockphoto.com/id/922387908/photo/fastfood-and-healthy-food-on-old-wooden-background-concept-choosing-correct-nutrition-or-of.jpg?s=612x612&w=0&k=20&c=OyKgNm3PaoiXmZAcZfc_AEwaJ9bivmKLQWwW7ySNWIA=" alt="/" />
   </div>
   </div>
   </div>
  )
}

export default Hero