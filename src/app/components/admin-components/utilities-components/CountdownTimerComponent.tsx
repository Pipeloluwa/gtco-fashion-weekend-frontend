"use client";
import { rubikFont } from '@/app/fonts/fontsConfig'
import React from 'react'

interface IHomeSegmentComponent4{
    days:number,
    hours:number,
    minutes:number, 
    seconds:number, 
    completed:boolean
}

const CountdownTimerComponent:React.FC<IHomeSegmentComponent4> = ({ days, hours, minutes, seconds }) => {
    const countDownData= {
        text: "GTCO Fasion Weekend Event Begins On November 10",
        dateTime: "2024-11-03T01:02:03"
      }

    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-y-6'>
            
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Upcoming Event"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {countDownData.text}
            </p>


            <div className="flex justify-center items-center w-[700px] gap-x-6">

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
    )
}

export default CountdownTimerComponent