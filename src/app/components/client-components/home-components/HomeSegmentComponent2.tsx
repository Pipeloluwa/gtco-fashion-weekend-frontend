import { rubikFont } from '@/app/fonts/fontsConfig'
import { Button } from '@material-tailwind/react'
import React from 'react'

const HomeSegmentComponent2 = () => {
  return (
    <div className='w-[75%] mx-auto '>
        <div className='flex flex-col justify-center items-center gap-y-6'>
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Live Feed"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"Watch The Latest Official 2023 GT Fashion Weekend Film Now!"}
            </p>

            <div className='flex w-full h-full aspect-video shadow-lg shadow-gray-500'>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/CjAFxpRsx3M?si=PMnM99fokrf-6yLY" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                    className='flex w-full h-full '
                    >
                    </iframe>
            </div>


            <Button onClick={() => {}} className={`${rubikFont.className} tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                {"Watch Our Live Feeds"}
            </Button>
        
        </div>

    </div>
  )
}

export default HomeSegmentComponent2