import { rubikFont } from '@/app/fonts/fontsConfig'
import Image from 'next/image'
import Link from 'next/link'


const HomeSegmentComponent6 = () => {
  return (
    <div className='flex flex-col md:gap-y-8 gap-y-2'>
      <div className='w-full mx-auto flex flex-col justify-center items-center md:gap-y-6 gap-y-4'>
          <h1 className='md:text-5xl text-4xl tracking-widest text-orange-800'>
              {"Participate"}
          </h1>

          <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
              {"Are you a Designer, Brand or Model?"}
          </p>


          <div className={`${rubikFont.className} relative flex flex-col items-center h-[500px] w-full bg-gray-100`}>
              <Image priority={true} quality={100} alt='picture' src="/images/pictures/sunglasses-1284255_1280.jpg" width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
              </Image>


            <div className='absolute left-0 right-0 top-0 bottom-0 p-8 bg-black/40 '>
                  <p className='md:w-[50%] w-[68%] text-center mx-auto text-white'>
                      {"Enroll Now and become part of a spectacular event that will bring your creativity to life.Step into the spotlight and make a lasting impression!"}
                  </p>


                  <div className='flex  lg:w-[800px] w-full gap-x-4 mx-auto'>

                      <div className='overflow-hidden h-[380px] w-full flex justify-center items-center'>
                              
                              <div className='cursor-pointer relative overflow-hidden md:h-[300px] h-[180px] w-[90%] mx-auto flex items-center rounded-3xl'>
                                <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 md:p-4 px-3 animated-background border'>
        
                                  <Link href={"/pages/client-pages/model-enroll-page"}  onClick={() => {}} className={`${rubikFont.className}`}>
                                    <p className='md:text-2xl text-xl text-center'>
                                        {"DESIGNER"}
                                    </p>
                                   </Link>

                                  <p className='text-sm text-center italic'>
                                      {"Click to enroll as a designer"}
                                  </p>
                                </div>

                              </div>
                            
                      </div>



                      <div className='overflow-hidden h-[380px] w-full flex justify-center items-center'>
                              
                              <div className='relative overflow-hidden md:h-[300px] h-[180px] w-[90%]  mx-auto flex items-center rounded-3xl '>

                                <div className='cursor-pointer absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 md:p-4 p-2 animated-background'>
                                  <p className='md:text-2xl text-xl text-center'>
                                      
                                  </p> 

                                  <Link href={"/pages/client-pages/model-enroll-page"}  onClick={() => {}} className={`${rubikFont.className} `}>
                                    <p className='md:text-2xl text-xl text-center'>
                                        {"MODEL"}
                                    </p>
                                   </Link>

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