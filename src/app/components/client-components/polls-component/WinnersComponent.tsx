"use client";
import { interFont, rubikFont } from '@/app/fonts/fontsConfig';
import Image from "next/image";
import React, {  } from 'react'
import { IWinnersData } from '@/app/interfaces/client-interfaces/PollsInterfaces';



const WinnersComponent:React.FC<IWinnersData> = ({winnersData}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
            <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                {"Winners of 2023 Poll"}
            </h1>


            <div className='w-full grid grid-cols-3 space-x-3'>

                {
                winnersData.map((item, index) => 

                    <div key={`winners${index}`} className={`${index%2 !==0 ? "animated-background-2 " : "animated-background-2-reverse"} p-8 h-[450px] w-[360px] flex flex-col gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                        <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                            <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                        </div>

                        <h1 className='w-full flex flex-col justify-center items-center text-xl text-orange-800'>
                            {item.title} <span className="text-sm">{`(${item.votes} Votes)`}</span>
                        </h1>

                        <div className='flex flex-col justify-center items-center w-full gap-y-2'>

                            <h1 className={`${interFont.className} text-sm font-bold`}>
                                -{item.userName}
                            </h1>

                            <p className={`${interFont.className} text-sm text-center`}>
                                {item.userDescription}
                            </p>
                        </div>

                    </div>

                    )
                }

            </div>
            
            
        </div>
    )
}

export default WinnersComponent