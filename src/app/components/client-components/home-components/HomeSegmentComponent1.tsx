"use client";
import { rubikFont } from '@/app/fonts/fontsConfig';
import { motion, easeInOut, AnimatePresence } from 'framer-motion';
import TypeIt from 'typeit-react';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import StaggerText from 'react-stagger-text';


import React from 'react'
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

interface HomeSegmentComponent1Props{
    blackOutDone: boolean;
}


const HomeSegmentComponent1:React.FC<HomeSegmentComponent1Props> = ({blackOutDone}) => {


    return (
        <div className='space-y-36 -mt-[80px]'>

            {/* ++++++++++++++++++ FIRST SEGMENT ++++++++++++++++ */}
            <div className='min-h-svh w-full relative'>
            <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full overflow-hidden'>
                <video autoPlay muted loop className='object-cover absolute left-0 right-0 top-0 bottom-0 w-full h-full'>
                    <source src="/videos/landingPageVideoCut.mp4" type="video/mp4"/>
                </video>
            </div>
            
    
            <div className='absolute left-0 right-0 top-0 bottom-0 w-full h-full from-[#000000]/0 to-[#000000]/70  bg-gradient-to-b '/>

            <div className='absolute left-0 right-0 top-0 bottom-0 flex flex-col w-full h-full gap-y-8 items-center justify-center '>
                {/* <SlideShow /> */}

                {
                    blackOutDone
                    &&
                    <>
                        <div className={`${rubikFont.className} animate-pulse flex flex-col items-center justify-center uppercase`}>
                            <GlowCapture>
                                <Glow color='orange' >
                                    <div className='z-10 animated-background-text1 inline-block text-transparent hover:from-black/0 pb-2 lg:text-9xl md:text-7xl sm:text-5xl text-4xl font-extrabold  glow:bg-black glow:text-orange-500'>
                                        <StaggerText  staggerType='letter'  staggerDuration={1.4}>
                                            {"GTCO"}
                                        </StaggerText>
                                    </div>
                                </Glow>
                            </GlowCapture>

                            <GlowCapture >
                                <Glow color='orange' >
                                    <div className={`animated-background-text2 inline-block text-transparent hover:bg-black/0 md:text-5xl sm:text-3xl text-2xl font-bold glow:bg-black glow:text-orange-500`}>    
                                        <StaggerText  staggerType='letter' staggerDuration={1.4} >
                                            {"Fashion Weekend"}
                                        </StaggerText>
                                    </div>
                                </Glow>
                            </GlowCapture>
                            
                        </div>


                        <AnimatePresence key={"landingPageAnimatePresence1"}>
                            <motion.div key={"landingPageAnimatePresence2"} initial={{x:"150%"}} animate={{x:0}} transition={{duration:3, delay:1.5, ease:easeInOut, type:"spring", bounce: 0.1}} className={`${rubikFont.className} flex md:justify-start justify-center lg:w-auto  px-2 sm:w-[50%] w-[100%] text-white lg:text-md text-lg italic`}>
                                <TypeIt options={{loop: true, speed:100}}>
                                    {"Stay ahead of the curve with our stylish new collection that defines modern fashion."}
                                </TypeIt>
                            </motion.div>

                        </AnimatePresence>

                        <motion.div 
                            key={"landingPageAnimatePresence4"}
                            initial={{opacity:0, y:100}} animate={{opacity:1, y:0,}} transition={{duration:6, delay:1.5, ease:easeInOut, type:"spring", bounce: 0.5}}
                            className='z-10'
                            >
                            
                            <Link href={"/pages/client-pages/highlights-page"}>
                                <Button onClick={() => {}} className={`${rubikFont.className} tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                                    {"Explore"}
                                </Button>
                            </Link>
                            
                        </motion.div>

                    </>
                }

            </div>

            </div>
        </div>



    )
}

export default HomeSegmentComponent1;