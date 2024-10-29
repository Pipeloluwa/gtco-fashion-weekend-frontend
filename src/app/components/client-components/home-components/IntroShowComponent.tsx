'use client';
import { rubikFont } from '@/app/fonts/fontsConfig';
import React, { useState } from 'react'
import StaggerText from 'react-stagger-text'
import { AnimatePresence, motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';


interface ILogoScaleProps{
    setBlackOutDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntroShowComponent: React.FC<ILogoScaleProps> = ({setBlackOutDone}) => {
    const [gtbWord, setGtbWord]= useState<boolean>(true);
    const [fashionWord, setFashionWord]= useState<boolean>(false);
    const [weekendWord, setWeekendWord]= useState<boolean>(false);
    const [slideWord, setSlideWord]= useState<boolean>(false);
    const [logoScale, setLogoScale]= useState<boolean>(false);
    const [blackOut, setBlackOut]= useState<boolean>(false);
    


    return (
        <div className={`${rubikFont.className} overflow-hidden z-50 fixed left-0 right-0 top-0 bottom-0 bg-black flex w-full h-full justify-center items-center text-white`}>
            <div className={` ${!blackOut && "animate-pulse" } flex flex-col h-full w-full justify-center items-center from-orange-900/20 to-black bg-gradient-to-b text-[150px] uppercase`}>
                {
                    gtbWord
                    &&
                    <div className='animate-bounce'>
                        <StaggerText onStaggerComplete={() => {setGtbWord(value => !value); setFashionWord(value => !value)}} staggerType='letter'  staggerDuration={0.3} staggerDelay={0.2}>
                            {"g t c o"}
                        </StaggerText>
                    </div> 
                }   

                {
                    fashionWord 
                    &&

                    <div className='animate-bounce'>
                        <StaggerText onStaggerComplete={() => {setFashionWord(value => !value); setWeekendWord(value => !value)}} staggerType='letter'  staggerDuration={0.3} staggerDelay={0.2}>
                            {"fashion"}
                        </StaggerText>  
                    </div>  
                }      

                {
                    weekendWord 
                    &&
                    <div className='animate-bounce'>
                        <StaggerText onStaggerComplete={() => {setWeekendWord(value => !value); setSlideWord(value => !value)}} staggerType='letter'  staggerDuration={0.3} staggerDelay={0.2}>
                            {"weekend"}
                        </StaggerText>    
                    </div>
                } 



                {
                    slideWord
                    &&
                    <Marquee onCycleComplete={() => {setSlideWord(value => !value); setLogoScale(value => !value);}} speed={1000} className={`${rubikFont.className} animate-pulse tracking-widest uppercase text-[700px] flex w-full h-full justify-center items-center`}>
                        {"Textile"}
                    </Marquee>
                }


                
                {
                    logoScale
                    &&
                    <AnimatePresence>
                        <motion.div
                            initial= {{scale:1}}
                            animate= {{scale:2}}
                            transition={{duration:1}}
                            onAnimationComplete={() => {setLogoScale(value => !value); setBlackOut(value => !value);}}
                        >
                            <Image priority={true} alt='logo' src={"/images/logos/gtco_logo.png"} width={100} height={100}>

                            </Image>
                        </motion.div>
                    </AnimatePresence>
                }


                {
                    blackOut
                    &&
                    <motion.div 
                        initial= {{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:3}}
                        onAnimationComplete={() => {
                            sessionStorage.setItem("blackOutDone", "true");
                            setBlackOut(value => !value); 
                            setBlackOutDone(value => !value);
                        }}

                        className='bg-white fixed left-0 right-0 top-0 bottom-0'/>
                    }
                
            </div>

        </div>
    )
}

export default IntroShowComponent