"use client";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { setCollapseMenuState } from "@/app/state_management/reducers/admin-reducers/collapseMenuState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/state_management/stores/store";
import { useRouter } from "next/navigation";




const NavBarComponent= ()=> {
    const router = useRouter();
    const dispatch= useDispatch();
    const navAdminValue= useSelector((state:RootState) => state.navAdminValue.value);
    const backButtonState= useSelector((state:RootState) => state.navAdminValue.backButtonState);
    // const [isImageLoaded, setIsImageLoaded] = useState(false);
    const mobileMenu= false;

    
    useEffect(() => {
        document.getElementById("mainComponent")?.scrollTo(0,0);
    }, [navAdminValue]);


    {/* ++++++++++++++++++++++ HEADER +++++++++++++++++ */}
    return (
        <div className="z-40 sticky top-0 h-[70px] sm:gap-x-8 bg-[#FF8C00] text-white flex justify-between items-center shadow-sm">
            <div onClick={() => dispatch(setCollapseMenuState())} className="w-[65px] h-full bg-orange-300 flex justify-center items-center cursor-pointer">
                <TiThMenu className="sm:size-[40px] size-[30px]" />
            </div>


            <div className='flex items-center gap-x-4 md:w-full py-2 lg:px-16 sm:px-10 px-3'>

                <button onClick={() => router.back()} className={`${backButtonState ? "visible" : "invisible"} flex mr-8 h-[40px] w-[45px] justify-center items-center cursor-pointer bg-white shadow-sm shadow-black rounded-full`}>
                    <IoArrowUndo className='text-orange-800 size-[25px]'/>
                </button>  

  
                <div className=" md:flex hidden flex-row justify-between items-center w-full border-0 ">  
                    <h1 className=" font-bold text-2xl scale-100">{navAdminValue}</h1>

                    <div className="flex items-center space-x-4 scale-100 ">
                        <div className="w-10 h-10 my-picture-style">
                            <Image 
                                alt="" quality={100} width={100} height={0} 
                                src={"/images/pictures/1.webp"}
                                // onLoad={e => {}}
                                className={`object-cover flex w-full h-full `}
                            ></Image>

                        </div>

                        <h1 className="font-bold">{"Ajanlekoko"}</h1>
                    </div>

                </div>

            </div>


             {/* <div className="animate-pulse flex sm:w-[400px] w-[100px] h-[50px] bg-gray-300 rounded-lg" /> */}



            {/* +++++++++++++++ SMALL DISPLAY ++++++++++++++++++ */}
            <div className="lg:hidden flex ">
                {
                    mobileMenu 
                        ?
                            <IoClose className="sm:scale-[320%] scale-[220%] cursor-pointer" />
                        : 
                            <TiThMenu className="sm:scale-[240%] scale-[180%] cursor-pointer" />
                }
            </div>

        </div>
    );
}


export default NavBarComponent;
