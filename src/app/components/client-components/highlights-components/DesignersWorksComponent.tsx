import { IDesignerCollections } from '@/app/interfaces/client-interfaces/HighlightInterfaces'
import React from 'react'

const DesignersWorksComponent:React.FC<IDesignerCollections> = ({images}) => {
    return (
        <div className='pl-4 w-full flex flex-col items-center bg-gray-600'>
            <h1 className="text-white text-2xl font-bold my-3 ml-4">
                {`John Doe Collection`}
            </h1>


            <div className='h-svh overflow-hidden overflow-y-scroll'>
                <div className='grid grid-cols-3 gap-4'> 
                    {
                        images.map((item, index) =>
                            <img key={`designerWork ${index}`} src={item} alt="collection image 1" className='w-full h-auto' />
                        )
                    }              
                </div> 
            </div>

        </div>
    )
}

export default DesignersWorksComponent