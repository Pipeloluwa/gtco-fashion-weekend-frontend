"use client";
import React, { useState } from 'react'
import LogoComponent from '../../client-components/client-shared-components/LogoComponent';
import { MdOutlinePoll } from 'react-icons/md';
import { IoAnalytics } from 'react-icons/io5';
import { SiAffinityphoto, SiFormstack } from 'react-icons/si';
import { BiChevronDown, BiChevronUp, BiPhotoAlbum } from 'react-icons/bi';
import { IoMdTimer } from 'react-icons/io';
import { GiInspiration } from 'react-icons/gi';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { interFont } from '@/app/fonts/fontsConfig';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/state_management/stores/store';
import Link from 'next/link';
import { GoSignOut } from 'react-icons/go';
import { CgLock, CgMail } from 'react-icons/cg';



const MenuComponent = () => {
    const navAdminValue= useSelector((state:RootState) => state.navAdminValue.value);
    const collapseMenuState= useSelector((state:RootState) => state.collapseMenuState.value);

    const [enrollState, setEnrollState]= useState<boolean>(false);
    const [showcaseState, setShowcaseState]= useState<boolean>(false);



    return (
        <div className={`${interFont.className} ${!collapseMenuState && "w-[350px]"} h-screen lg:flex flex-col hidden bg-white shadow-md shadow-gray-500`}>

            <div className='w-full min-h-[70px] flex justify-center items-center bg-[#FF8C00]'>
                <LogoComponent />    
            </div>
           

    
            <div className="flex flex-col justify-start w-full h-full items-center gap-y-4 py-6 px-2 overflow-hidden overflow-y-scroll">

                <Link href={"/pages/admin-pages/analytics-page"} className= {`${navAdminValue === "Analytics" ? "text-[#FF8C00] font-bold" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <IoAnalytics className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                        <p className={` rounded-2xl text-[16px]`}>
                            {"Analytics"}
                        </p>
                    }
                    
                </Link>


                <Accordion
                    open= {enrollState}
                    icon= {!collapseMenuState && (enrollState ? <BiChevronUp/> : <BiChevronDown/>)}
                    className={`${enrollState && "bg-gray-50"}`}
                >
                    <AccordionHeader onClick={() => setEnrollState(enrollState => !enrollState)} className='py-2'>
                        <div className= {`${navAdminValue === "Designer" || navAdminValue === "Model" ? "text-[#FF8C00] font-bold" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                            <SiFormstack className='size-[22px]'/>

                            {
                                !collapseMenuState
                                &&
                                <p className={`rounded-2xl text-[16px]`}>
                                    {"Enrollments"}
                                </p>
                            }
                            
                        </div>
                    </AccordionHeader>


                    
                    <AccordionBody>
                        <ul className={`text-[16px] ${!collapseMenuState ? "pl-[40px]" : "items-center"} flex flex-col gap-y-3`}>
                        {
                            collapseMenuState
                            ?
                            <Link href={"/pages/admin-pages/enrollments-pages/designers-page"} className={`${navAdminValue === "Designer" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                                {"D"}
                            </Link>

                            :
                            <Link href={"/pages/admin-pages/enrollments-pages/designers-page"} className={`${navAdminValue === "Designer" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                                {"Designer"}
                            </Link>
                        }



                        {
                            collapseMenuState
                            ?
                            <Link href={"/pages/admin-pages/enrollments-pages/models-page"} className={`${navAdminValue === "Model" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                                {"M"}
                            </Link>

                            :
                            <Link href={"/pages/admin-pages/enrollments-pages/models-page"} className={`${navAdminValue === "Model" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                                {"Model"}
                            </Link>
                        }

                        </ul>
                    </AccordionBody>

                </Accordion>
                


                <div className= {`${navAdminValue === "Polls" ? "font-bold text-[#FF8C00]" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <MdOutlinePoll className='size-[25px]'/>
                    
                    {
                        !collapseMenuState
                        &&

                        <Link href={"/pages/admin-pages/polls-page"} className={`${navAdminValue === "Polls" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                            {"Polls"}
                        </Link>
                    }
                    
                </div>


                <div className= {`${navAdminValue === "Highlights" ? "font-bold text-[#FF8C00]" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <BiPhotoAlbum className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                        <Link href={"/pages/admin-pages/highlights-page"} className={`${navAdminValue === "Highlights" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                            {"Highlights"}
                        </Link>
                    }
                    
                </div>


                <div className= {`${navAdminValue === "Utilities" ? "font-bold text-[#FF8C00]" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <IoMdTimer className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                        <Link href={"/pages/admin-pages/utilities-page"} className={`${navAdminValue === "Utilities" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                            {"Utilities"}
                        </Link>
                    }
                    
                </div>


                <Accordion
                    open= {showcaseState}
                    icon= {!collapseMenuState && (enrollState ? <BiChevronUp/> : <BiChevronDown/>)}
                    className={`${showcaseState && "bg-gray-50"}`}
                >
                    <AccordionHeader onClick={() => setShowcaseState(enrollState => !enrollState)} className='py-2'>
                        <div className= {`${navAdminValue === "Clothes" || navAdminValue === "Shoes" || navAdminValue === "Accessories" ? "text-[#FF8C00] font-bold" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                            <SiAffinityphoto className='size-[20px]'/>

                            {
                                !collapseMenuState
                                &&
                                <p className={`rounded-2xl text-[16px]`}>
                                    {"Showcases"}
                                </p>
                            }
                            
                        </div>
                    </AccordionHeader>
                    
                    
                    <AccordionBody>
                        <ul className={`text-[16px] ${!collapseMenuState ? "pl-[40px]" : "items-center"} flex flex-col gap-y-3`}>

                            {
                                collapseMenuState
                                ?
                                <Link href={"/pages/admin-pages/show-cases-pages/clothes-page"} className={`${navAdminValue === "Clothes" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"C"}
                                </Link>

                                :
                                <Link href={"/pages/admin-pages/show-cases-pages/clothes-page"} className={`${navAdminValue === "Clothes" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"Clothes"}
                                </Link>
                            }


                            {
                                collapseMenuState
                                ?
                                <Link href={"/pages/admin-pages/show-cases-pages/shoes-page"} className={`${navAdminValue === "Shoes" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"S"}
                                </Link>

                                :
                                <Link href={"/pages/admin-pages/show-cases-pages/shoes-page"} className={`${navAdminValue === "Shoes" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"Shoes"}
                                </Link>
                            }


                            {
                                collapseMenuState
                                ?
                                <Link href={"/pages/admin-pages/show-cases-pages/accessories-page"} className={`${navAdminValue === "Accessories" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"A"}
                                </Link>

                                :
                                <Link href={"/pages/admin-pages/show-cases-pages/accessories-page"}className={`${navAdminValue === "Accessories" ? "font-bold text-[#FF8C00] " : "font-normal"} `}>
                                    {"Accessories"}
                                </Link>
                            }

                        </ul>
                    </AccordionBody>
                    
                    
                </Accordion>


                <div className= {`${navAdminValue === "Inspirations" ? "font-bold text-[#FF8C00]" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <GiInspiration className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&

                        <Link href={"/pages/admin-pages/inspirations-page"} className={`${navAdminValue === "Inspirations" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                            {"Inspirations"}
                        </Link>
                    }
                    
                </div>


                <div className= {`${navAdminValue === "Send Message" ? "font-bold text-[#FF8C00]" : "font-normal"} cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <CgMail className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                            <Link href={"/pages/admin-pages/send-message-page"} className={`${navAdminValue === "Send Message" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                                {"Send Message"}
                            </Link>
                    }
                    
                </div>




                <div className= {`${navAdminValue === "Change Password" ? "font-bold text-[#FF8C00]" : "font-normal"} mt-4 border-t cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3`}>
                    <CgLock className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                        <Link href={"/pages/admin-pages/change-password-page"} className={`${navAdminValue === "Change Password" ? "font-bold text-[#FF8C00] " : "font-normal"} `} >
                            {"Change Password"}
                        </Link>
                    }
                    
                </div>

                <div className= "text-[#FF8C00] font-bold cursor-pointer py-2 pl-2 w-full flex justify-start items-center gap-x-3">
                    <GoSignOut className='size-[25px]'/>

                    {
                        !collapseMenuState
                        &&
                        <p className={`rounded-2xl text-[16px]`}>
                            {"Sign Out"}
                        </p>
                    }
                    
                </div>

            </div>
                

        </div>
    )
}

export default MenuComponent;