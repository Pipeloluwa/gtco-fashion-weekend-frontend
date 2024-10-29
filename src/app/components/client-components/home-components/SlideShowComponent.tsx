"use client";
import { AnimatePresence, motion } from 'framer-motion';


const SlideShowComponent = () => {
  return (
    <div className='absolute flex h-full w-full opacity-[30%]'>
        <AnimatePresence key={"slideShowMotionKeynimatePresence"}>
            <div className='tracking-widest relative flex w-full h-full'>
                <div key={0} className='absolute w-full min-w-[1600px] h-full flex justify-between items-center text-md italic text-white '>
                    <motion.div key={"slideShowMotionKey1"} className='animate-pulse flex items-center w-full absolute top-[10%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-48, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[100px] flex justify-center'>
                            Fashion
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey2"} className='animate-pulse flex items-center w-full absolute top-[90%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-42, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Style
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey3"} className='animate-pulse flex items-center w-full absolute top-[20%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-36, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Glamour
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey4"} className='animate-pulse flex items-center w-full absolute top-[80%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-30, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Trend
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey5"} className='animate-pulse flex items-center w-full absolute top-[30%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-24, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Catwalk
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey6"} className='animate-pulse flex items-center w-full absolute top-[70%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-12, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[230px] flex justify-center'>
                            Runway
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey7"} className='animate-pulse flex items-center w-full absolute top-[40%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:-6, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Couture
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey8"} className='animate-pulse flex items-center w-full absolute top-[60%] left-0 right-0' initial={{x:"0%"}} animate={{x:"100%"}} transition={{duration:15, delay:0, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Elegance
                        </h1>
                    </motion.div>

                </div>


                <div key={1} className='absolute w-full min-w-[1600px] h-full flex items-center text-md italic text-white font-bold'>
                    <motion.div key={"slideShowMotionKey9"} className='animate-pulse flex items-center w-full absolute top-[15%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-48, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Tailored
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey10"} className='animate-pulse flex items-center w-full absolute top-[85%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-42, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Vogue
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey11"} className='animate-pulse flex items-center w-full absolute top-[25%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-36, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[230px] flex justify-center'>
                            Designer
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey12"} className='animate-pulse flex items-center w-full absolute top-[75%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-24, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Urban
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey13"} className='animate-pulse flex items-center w-full absolute top-[35%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-18, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Iconic
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey14"} className='animate-pulse flex items-center w-full absolute top-[65%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-12, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Timeless
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey15"} className='animate-pulse flex items-center w-full absolute top-[45%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:-6, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[50px] flex justify-center'>
                            Elegance
                        </h1>
                    </motion.div>

                    <motion.div key={"slideShowMotionKey16"} className='animate-pulse flex items-center w-full absolute top-[55%] left-0 right-0' initial={{x:"100%"}} animate={{x:"0%"}} transition={{duration:15, delay:0, repeat:Infinity, repeatDelay:0, ease:"linear"}}>
                        <h1 className='w-[100px] flex justify-center'>
                            Textile
                        </h1>
                    </motion.div>
                </div>

            </div>
        </AnimatePresence>
    </div>
  )
}

export default SlideShowComponent