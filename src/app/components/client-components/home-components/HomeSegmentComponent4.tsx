"use client";
import { rubikFont } from '@/app/fonts/fontsConfig'
import Image from 'next/image'
import React from 'react'

interface IHomeSegmentComponent4{
    days:number,
    hours:number,
    minutes:number, 
    seconds:number, 
    completed:boolean
}

const HomeSegmentComponent4:React.FC<IHomeSegmentComponent4> = ({ days, hours, minutes, seconds }) => {
    const countDownData= {
        text: "Our Event Begins On November 10",
        dateTime: "2024-11-03T01:02:03",
        picture: "/images/pictures/7.webp"
      }

    return (
        <div className=' h-full mx-auto flex flex-col justify-center items-center gap-y-6'>
            
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Upcoming Event"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {countDownData.text}
            </p>


            <div className={`${rubikFont.className} relative h-[400px] w-full overflow-hidden flex flex-col justify-center items-center border shadow-lg shadow-gray-500`}>
                <Image priority={true} alt='background image' src={countDownData.picture} width={500} height={500} className='absolute left-0 right-0 top-0 bottom-0 flex h-full w-full object-cover opacity-90'>
                </Image>

                <div className='bg-gradient-to-b from-transparent to-black absolute left-0 right-0 top-0 bottom-0'/>

                <div className='absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center gap-x-4 gap-y-8'>

                    <div className="flex justify-center items-center w-[600px] gap-x-6">

                        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                            <div className='size-[150px] rounded-2xl bg-white border shadow-sm shadow-gray-800 p-4 flex justify-center items-center text-orange-800 text-7xl'>
                                {days}
                            </div>

                            <h1 className='text-white'>{"Days"}</h1>
                        </div>

                        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                            <div className='size-[150px] rounded-2xl bg-white border shadow-sm shadow-gray-800 p-4 flex justify-center items-center text-orange-800 text-7xl'>
                                {hours}
                            </div>

                            <h1 className='text-white'>{"Hours"}</h1>
                        </div>

                        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                            <div className='size-[150px] rounded-2xl bg-white border shadow-sm shadow-gray-800 p-4 flex justify-center items-center text-orange-800 text-7xl'>
                                {minutes}
                            </div>

                            <h1 className='text-white'>{"Minutes"}</h1>
                        </div>

                        <div className="flex flex-col w-full h-full justify-center items-center gap-y-2">
                            <div className='size-[150px] rounded-2xl bg-white border shadow-sm shadow-gray-800 p-4 flex justify-center items-center text-orange-800 text-7xl'>
                                {seconds}
                            </div>

                            <h1 className='text-white'>{"Seconds"}</h1>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeSegmentComponent4