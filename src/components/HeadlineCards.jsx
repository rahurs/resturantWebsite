import React from 'react'
// these are basically the deals , combo meal deal tickets
const HeadlineCards = () => {
  return (
    <div className=' max-w-[1640px] mx-auto py-12 grid md:grid-cols-3  p-4 gap-6  '>
        {/* cards */}
        <div className='relative rounded-xl '>
            <div className='absolute w-full h-full bg-black/50  rounded-xl text-white md:py-8 md:space-y-3 hover:bg-black/40'>
                <p className='font-bold text-2xl px-2 pt-4 md:text-3xl '>Sun's Out BOGO's Out </p>
                <p className='px-2'>Through 7/28</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] h-full sm:max-h-[250px] w-full object-cover ' src="https://images.unsplash.com/photo-1615996001375-c7ef13294436?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc3QlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="/" />
        </div>
        {/* cards */}
        <div className='relative rounded-xl'>
            <div className='absolute w-full h-full bg-black/50  rounded-xl text-white md:py-8 md:space-y-3 hover:bg-black/40'>
                <p className=' md:text-3xl font-bold text-2xl px-2 pt-4'>New Restuarant's </p>
                <p className='px-2'> Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] h-full sm:max-h-[250px] w-full object-cover ' src="https://media.istockphoto.com/id/931308812/photo/selection-of-american-food.jpg?s=612x612&w=0&k=20&c=7-2Glc2qVkrWdLaqXwLnNoJLUvc2vMz_QpDTKDcmYiY=" alt="/" />
        </div>
        {/* cards */}
        <div className=' relative rounded-xl '>
            <div className='absolute w-full h-full bg-black/50  rounded-xl text-white md:py-8 md:space-y-3 hover:bg-black/40 '>
                <p className=' md:text-3xl font-bold text-2xl px-2 pt-4'>We Deliver Desserts too </p>
                <p className='px-2'>Tasty Treat</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] h-full sm:max-h-[250px] w-full object-cover ' src="https://media.istockphoto.com/id/867909720/photo/food-for-indian-festival-diwali.jpg?s=612x612&w=0&k=20&c=NQdkQQo5dNSRgLJsaqPHJ1JiU_v2ob7D529i4A4mPjY=" alt="/" />
        </div>

    </div>
  )
}

export default HeadlineCards