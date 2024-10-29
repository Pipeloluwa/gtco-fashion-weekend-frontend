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
                    <h1 className='-mt-20 animated-background-text1 inline-block text-transparent hover:from-black/0 pb-2  text-center md:text-6xl lg:text-8xl text-6xl    font-extrabold  glow:bg-black glow:text-orange-500'>
                        {title}
                    </h1>
                
                </div> 
            </div>
        </div>


        <div>
          <p className='md:w-[75%] w-[80%] mx-auto flex justify-center items-center -mt-[160px] lg:-mt-[70px] md:-mt-[100px]
             text-center text-white font-semibold md:px-16 px-8 lg:py-12 py-6 bg-orange-700 rounded-lg shadow-md shadow-gray-500'>
            {content}
          </p>
      </div>

    </div>
  );
};

export default ImageListComponent;
