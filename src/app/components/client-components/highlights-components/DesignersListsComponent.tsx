import { IDesignerData } from '@/app/interfaces/client-interfaces/HighlightInterfaces'
import React from 'react'

const DesignersListsComponent:React.FC<IDesignerData> = ({designerData}) => {
    return (
        <div className='w-[280px] flex flex-col items-center bg-gray-600'>
            <h1 className="text-white text-2xl font-bold my-3 ml-4">
                {`Designers`}
            </h1>

            <div className='w-[280px] py-2'>
                <div className=' flex flex-col items-center whitespace-nowrap scroll-smooth h-svh w-[270px] overflow-hidden overflow-y-scroll'>

                    {designerData.map((design, index) => (
                        <div key={`designData${index}`} className='inline-block px-2 cursor-pointer pt-2 pb-4 w-56 font-bold shadow-xl bg-white'>
                        <div className='h-44 overflow-hidden'>
                                <img
                                    src={design.image}
                                    alt="designer"
                                    className={`w-full h-full ${index ? 'grayscale' : 'grayscale-0'} object-cover hover:grayscale-0 transition duration-300 ease-in-out`}
                                />
                        </div>

                            <div className='flex items-center justify-center pt-2'>
                                <h1 className='text-center text-lg'>{design.title}</h1>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default DesignersListsComponent