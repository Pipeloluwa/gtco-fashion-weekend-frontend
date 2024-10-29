import { rubikFont } from '@/app/fonts/fontsConfig'
import Image from 'next/image'


const HomeSegmentComponent6 = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-y-6'>
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Participate"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"Are you a Designer, Brand or Model?"}
            </p>


            <div className={`${rubikFont.className} relative flex flex-col items-center h-[500px] w-full bg-gray-100`}>
                <Image priority={true} quality={100} alt='picture' src="/images/pictures/sunglasses-1284255_1280.jpg" width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                </Image>


               <div className='absolute left-0 right-0 top-0 bottom-0 p-8 bg-black/40 '>
                    <p className='w-[50%] text-center mx-auto text-white'>
                        {"Enroll Now and become part of a spectacular event that will bring your creativity to life.Step into the spotlight and make a lasting impression!"}
                    </p>


                    <div className='flex w-[800px] gap-x-8 mx-auto'>

                        <div className='overflow-hidden h-[380px] w-full flex justify-center items-center'>
                                
                                <div className='cursor-pointer relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center rounded-3xl'>
                                  <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 animated-background border'>
                                    <p className='text-2xl text-center'>
                                        {"DESIGNER"}
                                    </p> 

                                    <p className='text-sm text-center italic'>
                                        {"Click to enroll as a designer"}
                                    </p>
                                  </div>

                                </div>
                              
                        </div>



                        <div className='overflow-hidden h-[380px] w-full flex justify-center items-center'>
                                
                                <div className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center rounded-3xl '>

                                  <div className='cursor-pointer absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 animated-background'>
                                    <p className='text-2xl text-center'>
                                        {"MODEL"}
                                    </p> 

                                    <p className='text-sm text-center italic'>
                                        {"Click to enroll as a model"}
                                    </p>
                                  </div>

                                </div>
                              
                        </div>

                    </div>

               </div>
            </div>
        
        </div>

        <div>

        </div>

    </div>
  )
}

export default HomeSegmentComponent6