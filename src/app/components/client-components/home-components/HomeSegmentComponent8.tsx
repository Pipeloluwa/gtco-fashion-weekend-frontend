import { rubikFont } from '@/app/fonts/fontsConfig';
import React from 'react';

export interface IEmbeddedSource {
    source: string;
  }


const HomeSegmentComponent8:React.FC<IEmbeddedSource> = ({source}) => {

  return (
    <div className='flex flex-col gap-y-8'>
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-y-6'>
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Event Venue"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"Get to know where the event venue is located"}
            </p>



            <div className={`${rubikFont.className} flex items-center min-h-[700px] w-full bg-gray-100`}>
              <iframe 
                src={source} width="600" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-[700px] flex'
                >
              </iframe>

            </div>
        
        </div>

        <div>

        </div>

    </div>
  )
}

export default HomeSegmentComponent8