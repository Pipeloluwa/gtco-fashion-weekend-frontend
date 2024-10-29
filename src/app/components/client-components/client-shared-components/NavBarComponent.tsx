"use client"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/state_management/stores/store';
import { rubikFont } from '../../../fonts/fontsConfig';
import Link from 'next/link';
import LogoComponent from './LogoComponent';
import { TiThMenu } from 'react-icons/ti';
import { Drawer } from '@material-tailwind/react';
import { IoCloseSharp } from 'react-icons/io5';


const NavBarComponent = () => {
    const navBgState= useSelector((state:RootState) => state.navBgState.value);
    const navValue= useSelector((state:RootState) => state.navValue.value);
    const [navValueLocal, setNavBgTypeLocal]= useState(navValue)


    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const openDrawer_= () => {
  
      setOpenDrawer(true);
      document.body.style.overflow= "hidden";
    }
  
    const closeDrawer_= () => {
      setOpenDrawer(false);
      document.body.style.overflow= "unset";
    }

    useEffect(() => {
        setNavBgTypeLocal(navValue)
      }, [navValue])

    return (
        <div 
            className={`
                ${rubikFont.className} 
                ${ navBgState
                    ? " transition-all duration-700 bg-transparent shadow-md"
                    : "text-white from-black to-transparent bg-gradient-to-b"} 
                        text-white font-bold z-40 overflow-hidden sticky top-0 h-[80px] w-full  
                        flex justify-between items-center tracking-widest hover:shadow-none`}
            >




            {
                openDrawer
                ?
                <Drawer 

                    open= {openDrawer} 
                    onClose={() => {closeDrawer_()}} 
                    placement='right'
                    size={400}
                    overlay= {false}
                                
                    className='lg:hidden visible fixed top-0 bottom-0 flex justify-start flex-col w-[50%] h-screen from-gray-700 to-gray-900 bg-gradient-to-b'
                    placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
                    >


                    <div className='fixed right-0 flex justify-end items-end'>
                        <IoCloseSharp onClick={ () => {closeDrawer_()}} className="h-20 cursor-pointer size-[50px] mr-8"/>
                    </div>

                        
                    
                    <ul className='flex flex-col gap-y-8 w-full h-full items-start px-6'>
                    

                        <div className='mt-16 mb-14 flex flex-col items-start w-full h-full justify-between gap-y-12'>
                            
                            <ul className='flex flex-col gap-y-8 py-4 font-bold'>

                                <Link href={"/pages/client-pages/home-page"} className={`cursor-pointer ${navValueLocal=== 'Home' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}> 
                                    Home
                                </Link>

                                <Link href={"/pages/client-pages/about-page"} className={`cursor-pointer ${navValueLocal=== 'About' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                                    About
                                </Link>

                                <Link href={"/pages/client-pages/highlights-page"} className={`cursor-pointer ${navValueLocal=== 'Highlights' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                                    Highlights
                                </Link>

                                <Link href={"/pages/client-pages/feed-page"} className={`cursor-pointer ${navValueLocal=== 'Feeds' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                                    Feeds
                                </Link>

                                <Link href={"/pages/client-pages/polls-page"}  className={`cursor-pointer ${navValueLocal=== 'Polls' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 p-2 px-4 rounded-full transition-colors duration-300 ease-linear`}>
                                    Polls
                                </Link>
                            
                            </ul>

                        </div>
                    </ul>
                </Drawer>

                
                : ""
            }






            <div className={`${ navBgState ? "translate-y-0 duration-700 ease-linear bg-gradient-to-b from-gray-700 to-gray-900" : "-translate-y-20"} backdrop-blur-md absolute left-0 right-0 h-full flex`}/>


            <div className=" absolute left-0 right-0 flex w-[90%] gap-x-4 mx-auto justify-between items-center text-[14px]">

                <ul className='flex justify-center items-center'>
                    <li className='flex rounded-xl overflow-hidden w-[45px] h-[40px]'>
                        <LogoComponent />
                    </li>
                </ul>



                <ul className='lg:flex hidden w-full gap-x-3 justify-center items-center'>
                    <Link href={"/pages/client-pages/home-page"} className={`cursor-pointer ${navValueLocal=== 'Home' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}> 
                        Home
                    </Link>

                    <Link href={"/pages/client-pages/about-page"} className={`cursor-pointer ${navValueLocal=== 'About' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        About
                    </Link>

                    <Link href={"/pages/client-pages/highlights-page"} className={`cursor-pointer ${navValueLocal=== 'Highlights' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Highlights
                    </Link>

                    <Link href={"/pages/client-pages/feed-page"} className={`cursor-pointer ${navValueLocal=== 'Feeds' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Feeds
                    </Link>

                    <Link href={"/pages/client-pages/polls-page"}  className={`cursor-pointer ${navValueLocal=== 'Polls' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Polls
                    </Link>

                    {/* <li className={`cursor-pointer ${navValueLocal=== 'Contact' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Contact
                    </li> */}
                </ul>




                <ul className='lg:flex hidden justify-end items-center gap-x-[20px] text-[13px]'>
                    <Link href={"/pages/client-pages/designer-enroll-page"} className={`${rubikFont.className} cursor-pointer border-2 text-white border-white bg-transparent h-10 min-w-[150px] flex justify-center items-center rounded-lg text-center shadow-sm shadow-gray-700`}>
                        Designer Enroll
                    </Link>

                    <Link href={"/pages/client-pages/model-enroll-page"}  onClick={() => {}} className={`${rubikFont.className} cursor-pointer text-white bg-orange-800 h-10 min-w-[150px] flex justify-center items-center rounded-lg text-center shadow-sm shadow-gray-700`}>
                        Model Enroll
                    </Link>

                </ul>




                <ul className='lg:hidden flex w-full justify-end'>
                  {
                      !openDrawer 
                      && <TiThMenu onClick={() => {openDrawer_()}} className="cursor-pointer text-white size-[45px]"/>
                  }
                </ul>


            </div>



            {
                openDrawer 
                && <div className="z-50 lg:hidden fixed left-0 right-0 top-0 bottom-0 bg-black/50 backdrop-blur-sm w-screen h-screen" />
            }

        </div>
    );
}

export default NavBarComponent