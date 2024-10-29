import { IImageList } from '@/app/interfaces/shared-interfaces/ImageListInterface';
import React, { useState, useEffect } from 'react';

const ImageListComponent:React.FC<IImageList> = ({title, content, images}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); 

    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
    <div className='mb-32'>

        <div
        className="h-svh w-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
            <div className="flex items-center justify-center h-screen bg-black bg-opacity-60">
                <div className='flex flex-col gap-2  text-white'>
                    <h1 className='-mt-20 animated-background-text1 inline-block text-transparent hover:from-black/0 pb-2 lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-extrabold  glow:bg-black glow:text-orange-500'>
                        {title}
                    </h1>
                
                </div> 
            </div>
        </div>


        <div>
          <p className='w-[75%] mx-auto flex justify-center items-center -mt-[70px]
             text-center text-white font-semibold px-20 py-12 bg-orange-700 rounded-lg shadow-xl shadow-gray-500'>
            {content}
          </p>
      </div>

    </div>
  );
};

export default ImageListComponent;
