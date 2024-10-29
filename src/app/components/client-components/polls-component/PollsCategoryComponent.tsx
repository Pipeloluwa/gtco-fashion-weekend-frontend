"use client";
import { interFont, rubikFont } from '@/app/fonts/fontsConfig';
import Image from "next/image";
import { Button } from '@material-tailwind/react';
import React, {  } from 'react'
import { IPollsCategory } from '@/app/interfaces/client-interfaces/PollsInterfaces';

const PollsCategoryComponent:React.FC<IPollsCategory> = ({title, pollsData, voteCategory, setVoteCategory}) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
            <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                {`${title} Category Poll`}
            </h1>
            

            <div className='w-full grid grid-cols-3 gap-x-3 gap-y-8 border bg-gray-100 p-5 shadow-xl shadow-300'>
                {
                    pollsData.map((item, index) => 
                        <div key={`userVotesCloth${index}`} className={`${voteCategory=== item.id ? "bg-green-200" : "bg-white"} p-4 h-[450px] w-[360px] flex flex-col justify-center gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                            
                            <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                                <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                            </div>

                            <h1 className='text-center'>
                                -{item.userName}
                            </h1>

                            <p className={`${interFont.className} text-sm text-center`}>
                                {item.userDescription}
                            </p>

                            <div>
                                <Button onClick={() => voteCategory!== item.id ? setVoteCategory(item.id) : setVoteCategory("")} className={`${rubikFont.className} ${voteCategory=== item.id ? "bg-green-500" : "bg-orange-700/80 sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500"} outline-none rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px]`}  >
                                    {voteCategory=== item.id ? "Cancel Vote" : "Vote"}
                                </Button>
                                
                            </div>

                        </div>
                    )
                }


            </div>

        </div>
    )
}

export default PollsCategoryComponent