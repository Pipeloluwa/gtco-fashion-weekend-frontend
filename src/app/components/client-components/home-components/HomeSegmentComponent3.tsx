import { rubikFont } from '@/app/fonts/fontsConfig'
import Image from 'next/image';
import Marquee from 'react-fast-marquee'

const HomeSegmentComponent3 = () => {
    const inspirationData= [
        {picture: "/images/pictures/1.webp", text: "Fashion is art, and the runway is our canvas."},
        {picture: "/images/pictures/2.webp", text: "Dare to wear, dare to shine."},
        {picture: "/images/pictures/3.webp", text: "The runway is where dreams become fabric."},
        {picture: "/images/pictures/4.webp", text: "Walk the runway, own the moment."},
        {picture: "/images/pictures/5.webp", text: "Style speaks louder than words."},
        {picture: "/images/pictures/6.webp", text: "Elegance in every step."}
    ];


  return (
    <div className='flex flex-col gap-y-8'>
        <div className='w-[75%] mx-auto flex flex-col justify-center items-center gap-y-6'>
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Get Inspired"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"From boardrooms to courtrooms to runways and everywhere in between, we all have our unique sense of style, and Together, we are Africa's Finest."}
            </p>
        
        </div>

        <Marquee className='h-[440px] w-full '>

            {
                inspirationData.map((item, index) => {
                    return (
                        <div key={`inspirationalKey${index}`} className='relative overflow-hidden h-[400px] w-[350px] flex flex-col items-center bg-gray-500 rounded-3xl mx-5 shadow-md drop-shadow-lg shadow-gray-600'>
                            <Image priority={true} quality={100} alt='picture' src={item.picture} width={350} height={400} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                            </Image>

                            <div className='absolute bottom-0 left-0 right-0  p-4 from-black/5 to-black bg-gradient-to-b'>
                                <p className={`${rubikFont.className} text-center text-sm text-white tracking-widest`}>
                                    {item.text}
                                </p>
                            </div>
                            
                        </div>
                    )
                })
            }
        </Marquee>

    </div>
  )
}

export default HomeSegmentComponent3