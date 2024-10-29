"use client";
import AnimatedLoadingComponent from '@/app/components/shared-components/AnimatedLoadingComponent';
import { rubikFont } from '@/app/fonts/fontsConfig';
import { IHighlightsSingle } from '@/app/interfaces/admin-interfaces/HighlightsInterfaces';
import { IPickPicture } from '@/app/interfaces/admin-interfaces/shared-interfaces/ISharedInterfces';
import { setNavAdminValue, setNavBackButton } from '@/app/state_management/reducers/admin-reducers/navAdminValue';
import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { BsBoxArrowInUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';




const PageIndex = () => {
    const dispatch= useDispatch();
    // const [validationText, setValidationText]= useState("");

    const [keepDesignerHighlights, setKeepDesignerHighlights]= useState<IHighlightsSingle>();
    const [designerHighlights, setDesignerHighlights]= useState<IHighlightsSingle>();
    const [dataFetchState, setDataFecthState]= useState<boolean>(false);

    const [pickVideo, setPickVideo]= useState<File | null>(null);
    const pickVideoFunction = (e: ChangeEvent<HTMLInputElement> | null) => {
        if (!pickVideo && e!== null && e.target.files !== null) {
            const filePicked= e.target.files[0];
            if (filePicked !== null){
                setPickVideo(filePicked);
                setDesignerHighlights(
                    values  => {
                        values!.userHighlights.video= URL.createObjectURL(filePicked); 
                        return {...values as IHighlightsSingle};
                    })
            }
        }
        

        else{
            setPickVideo(null);
            setDesignerHighlights(
                values  => {
                    values!.userHighlights.video= keepDesignerHighlights!.userHighlights.video; 
                    return {...values as IHighlightsSingle};
            });
                
        }

        // setValidationText("")
    }


    const [pickPicture, setPickPicture]= useState<IPickPicture>({});
    const pickPictureFunction = (e: ChangeEvent<HTMLInputElement> | null, pictureIndex: number) => {
        if (!pickPicture[pictureIndex] && e!== null && e.target.files !== null) {
            const filePicked= e.target.files[0];
            if (filePicked !== null){
                setPickPicture(values => {return {...values, [pictureIndex]:filePicked}});
                setDesignerHighlights(
                    values  => {
                        values!.userHighlights.pictures[pictureIndex]= URL.createObjectURL(filePicked); 
                        return {...values as IHighlightsSingle};
                    })
            }
        }

        else{
            const remainingItems = (({ [pictureIndex]: _, ...rest }) => rest)(pickPicture);
            setPickPicture({...remainingItems});
            setDesignerHighlights(
                values  => {
                    values!.userHighlights.pictures[pictureIndex]= keepDesignerHighlights!.userHighlights.pictures[pictureIndex]; 
                    return {...values as IHighlightsSingle};
                })
        }


        // setValidationText("")
    }




    useEffect(() => {
        dispatch(setNavAdminValue({action: "Highlights"}));
        dispatch(setNavBackButton({action: true}));

        // const result:IHighlightsSingle= {
        //     id: "sfsdfsdfsdvvwe",
        //     userName: "Danjuma Buremo",
        //     designCategory: "Clothes",
        //     userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
        //     userImage: '/images/pictures/1.webp',
        //     userHighlights: {
        //         video: "/videos/landingPageVideoCut.mp4",
        //         pictures: [
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp',
        //             '/images/pictures/1.webp'
        //         ]
        //     }
        // };

        const result:IHighlightsSingle= {
            id: "sfsdfsdfsdvvwe",
            userName: "Danjuma Buremo",
            designCategory: "Clothes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp',
            userHighlights: {
                video: null,
                pictures: [null,null,null,null,null,null,null,null,null,null]
            }
        }

        setDesignerHighlights(JSON.parse(JSON.stringify(result)));
        setKeepDesignerHighlights(JSON.parse(JSON.stringify(result)));
        setDataFecthState(true)

      },[]);


    return (
        <div className="w-[70%] mx-auto flex flex-col px-3 py-4 gap-y-16 mt-5 mb-20">

            <div className='w-full h-[300px] flex p-10 gap-x-6 bg-white rounded-3xl shadow-xl shadow-gray-300'>
                <div className='w-[50%] h-full flex'>
                    {
                        dataFetchState
                        ? <Image alt='' quality={100} src={designerHighlights!.userImage} width={100} height={0} className='flex w-full h-full object-cover rounded-3xl'></Image>
                        : <AnimatedLoadingComponent width='w-full' height='h-full' rounded='rounded-3xl'/>
                    }

                </div>

                <div className='w-[50%] my-2 flex flex-col gap-y-2'>
                    {
                        dataFetchState
                        ?
                        <h1 className='text-2xl font-bold'>
                            {designerHighlights!.userName} 
                        </h1>

                        : <AnimatedLoadingComponent width='w-full' height='h-4'/>
                    }
                    
                    {
                        dataFetchState
                        ? 
                        <h1 className='font-semibold'>
                            {"Category: "} <span className='font-normal italic'>{designerHighlights!.designCategory}</span> 
                        </h1>
                        : <AnimatedLoadingComponent width='w-full' height='h-4'/>
                    }
                    
                    {
                        dataFetchState
                        ? 
                        <p className='font-bold text-sm'>
                            {"Description: "} <span className='font-normal italic'>{designerHighlights!.userDescription}</span>  
                        </p>
                        : <AnimatedLoadingComponent width='w-full' height='h-4'/>
                    }
                    
                </div>
            </div>




            <div className='flex flex-col justify-center items-center gap-y-4 p-10 bg-white rounded-3xl shadow-xl shadow-gray-300'>
                <p className='text-2xl font-bold'>
                    {"Video Highlight"}
                </p>

                {
                    dataFetchState
                    ?
                        designerHighlights && designerHighlights.userHighlights.video
                        ?
                        <video src={designerHighlights.userHighlights.video} controls className='w-full h-full'>
                        </video>
                        : 
                        <div className='aspect-video w-full h-full bg-white shadow-sm shadow-gray-500 text-center border flex justify-center items-center'>
                            {"Video Not Added"}
                        </div>
                    : <AnimatedLoadingComponent width='w-full' height='h-[400px]'/>
                }
                

                <div className={`cursor-pointer relative hover:bg-gray-500 hover:border-white hover:text-white ${pickVideo !== null ? "bg-orange-800 hover:bg-orange-600 text-white" : "bg-gray-200"} sm:mt-2 flex flex-col w-full justify-center items-center gap-y-4 border-2 border-gray-400 border-dashed py-8 px-2 rounded-2xl`}>
                    <BsBoxArrowInUp className="size-10"/>
                    
                    <div className="flex flex-col gap-y-2 items-center">
                        <h1 className="font-bold text-center">{`${pickVideo ? pickVideo.name : "Choose Video File"}`}</h1>
                        <h1 className="italic text-sm"> {pickVideo ? "( Click to remove )" : "( .mp4 )"}</h1>
                    </div>

                    {
                         
                        dataFetchState
                        &&
                            !pickVideo 
                            ?   <input  onChange={(e: ChangeEvent<HTMLInputElement>)  => {pickVideoFunction(e);}} required  type="file" accept=".mp4" className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                            : <div  onClick= {() => pickVideoFunction(null)}  className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                    }
                </div>
                
            </div>




            <div className='w-full flex flex-col justify-center items-center gap-y-4 p-10 bg-white rounded-3xl shadow-xl shadow-gray-300'>
                <p className='text-2xl font-bold'>
                    {"Picture Highlights"}
                </p>

                <ul className='w-full h-full grid grid-cols-2'>
                    {
                        dataFetchState
                        ?
                            designerHighlights?.userHighlights.pictures.map((item, index) =>
                                <li key={`singlePoll${index}`} className='bg-white px-4 py-6 shadow-sm shadow-gray-300'>
                                    <div className='h-[300px] w-full overflow-hidden'>
                                        {
                                            item
                                            ? <Image key={`highlighPicture${index}`} alt='' quality={100} src={item} width={100} height={0} className='flex w-full h-full object-cover rounded-3xl'></Image>
                                            : <div className='w-full h-full bg-white shadow-sm shadow-gray-500 text-center border flex justify-center items-center'>
                                                {"No Image Added"}
                                            </div>
                                        }    
                                    </div>

                                    <div 
                                        className={
                                            `cursor-pointer relative hover:bg-gray-500 hover:border-white 
                                            hover:text-white ${pickPicture[index] !== undefined 
                                                ? "bg-orange-800 hover:bg-orange-600 text-white" 
                                                : "bg-gray-200"} 
                                            mt-2 flex flex-col w-full justify-center items-center gap-y-2 border-2 
                                            border-gray-400 border-dashed py-1 px-2 rounded-2xl`}
                                            >

                                        <BsBoxArrowInUp className="size-5"/>
                                        
                                        <div className="flex flex-col gap-y-2 items-center text-sm">
                                            <h1 className="font-bold text-center">{`${pickPicture[index]!== undefined ? pickPicture[index].name : "Choose Picture File"}`}</h1>
                                            <h1 className={`${pickPicture[index]=== undefined ? "invisible" : "visible"} italic`}>{"( Click to remove )"}</h1>
                                        </div>

                                        {
                                            dataFetchState
                                            &&
                                                !pickPicture[index] 
                                                ?   <input  onChange={(e: ChangeEvent<HTMLInputElement>)  => {pickPictureFunction(e, index);}} required type="file" accept=".jpg, .png" className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                                                : <div  onClick= {() => pickPictureFunction(null, index)}  className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                                        }
                                    </div>

                                </li>
                                )
                        
                        :
                        <>
                            <AnimatedLoadingComponent width='w-full' height='h-[300px]'/>
                        </>

                    }
                </ul>

            </div>


            <Button onClick={() => {}} className={`${rubikFont.className} tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                {"Save All"}
            </Button>


        </div>

    );
}

export default PageIndex