"use client";
import AnimatedLoadingComponent from '@/app/components/shared-components/AnimatedLoadingComponent';
import { rubikFont } from '@/app/fonts/fontsConfig';
import { IPickPicture } from '@/app/interfaces/admin-interfaces/shared-interfaces/ISharedInterfces';
import { IProductsForm, IShowCaseType } from '@/app/interfaces/admin-interfaces/ShowCaseInterfaces';
import { IProductsData } from '@/app/interfaces/shared-interfaces/ProductsInterfaces';
import { setNavAdminValue } from '@/app/state_management/reducers/admin-reducers/navAdminValue';
import { Button, Input } from '@material-tailwind/react';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { BsBoxArrowInUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';


const ShowcasesFormComponent:React.FC<IShowCaseType> = ({showCase}) => {
    const dispatch= useDispatch();
    // const [validationText, setValidationText]= useState("");

    const [keepProductsData, setKeepProductsData]= useState<IProductsData>();
    const [productsData, setProductsData]= useState<IProductsData>();
    const [dataFetchState, setDataFecthState]= useState<boolean>(false);

    const [emailInput, setEmailInput]= useState<string | null>(null);
    const [nameInputs, setNameInputs]= useState<(string | null)[]>([]);
    const [priceInputs, setPriceInputs]= useState<(string | null)[]>([]);


    const [pickPicture, setPickPicture]= useState<IPickPicture>({});
    const pickPictureFunction = (e: ChangeEvent<HTMLInputElement> | null, pictureIndex: number) => {
        if (!pickPicture[pictureIndex] && e!== null && e.target.files !== null) {
            const filePicked= e.target.files[0];
            if (filePicked !== null){
                setPickPicture(values => {return {...values, [pictureIndex]:filePicked}});
                setProductsData(
                    values  => {
                        values!.products[pictureIndex].picture= URL.createObjectURL(filePicked); 
                        return {...values as IProductsData};
                    })
            }
        }

        else{
            const {[pictureIndex]:_, ...remainingItems}= pickPicture;
            setPickPicture({...remainingItems});
            setProductsData(
                values  => {
                    values!.products[pictureIndex].picture= keepProductsData!.products[pictureIndex].picture; 
                    return {...values as IProductsData};
                })
        }


        // setValidationText("")
    }



    



    useEffect(() => {
        dispatch(setNavAdminValue({action: "Clothes"}));

        const result:IProductsForm= {
            vendor_details:{ 
                emaiL: "jlwfhwelj@shlfjsd.sfsd",
            },
            products:[
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000},
                {picture: "/images/pictures/woman-6670772_1280.webp",name: "Royal Apparel", price: 10000000}
            ]
             
        };


        // const result:IProductsForm= {
        //     vendor_details:{ 
        //         emaiL: null,
        //     },
        //     products:[null,null,null,null,null,null]
             
        // };

        setEmailInput(result.vendor_details.emaiL);
        setNameInputs([...result.products.map(item => item!.name)]);
        setPriceInputs([...result.products.map(item => item!.price.toString())]);

        setProductsData(JSON.parse(JSON.stringify(result)));
        setKeepProductsData(JSON.parse(JSON.stringify(result)));
        setDataFecthState(true)

      },[]);



    return (
        <div className="w-[70%] mx-auto flex flex-col px-3 py-4 gap-y-16 mt-5 mb-20">

            <div>
                <h4 className='text-center text-2xl font-bold mb-6'>
                    {`Enter the email of the winner of the latest poll in ${showCase} category`}
                </h4>

                <Input
                    value={emailInput ? emailInput : ""}
                    onChange={e => setEmailInput(e.target.value)}
                    label="User Email" type="text"
                    placeholder='"Enter the email of the owner of the products here..."' 
                    color='orange' size='lg'
                    className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                />

            </div>



            <div className='w-full flex flex-col justify-center items-center gap-y-4 p-10 bg-white rounded-3xl shadow-xl shadow-gray-300'>
                <p className='text-2xl font-bold'>
                    {"Add the winner's products"}
                </p>

                <ul className='w-full h-full grid grid-cols-2'>
                    {
                        dataFetchState
                        ?
                            productsData?.products.map((item, index) => 
                                    <li key={`showCaseForm${index}`} className='bg-white px-4 py-6 shadow-sm shadow-gray-300'>
                                        <h4 className='text-center pb-4'>
                                            {`Item ${index + 1}`}
                                        </h4>



                                        <div className='h-[300px] w-full overflow-hidden'>
                                            {
                                                item
                                                ? <Image key={`highlighPicture${index}`} alt='' quality={100} src={item.picture} width={100} height={0} className='flex w-full h-full object-cover rounded-3xl'></Image>
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

                                        
                                
                                        <div className='flex flex-col gap-y-5 mt-5'>
                                            <Input 
                                                value={nameInputs[index] ? nameInputs[index] : ""}
                                                onChange={e => setNameInputs(item => [... item.map((value, vIndex) => (vIndex== index ? e.target.value: value) as string)])}
                                                label="Name" type="text" 
                                                color='orange' size='lg'
                                                className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                                            />

                                            <Input 
                                                value={priceInputs[index] ? priceInputs[index] : ""}
                                                onChange={e => setPriceInputs(item => [... item.map((value, vIndex) => (vIndex== index ? e.target.value : value) as string)])}
                                                label="Price" type="number" 
                                                color='orange' size='lg' 
                                                className='bg-white px-4 py-6 shadow-sm shadow-gray-3'
                                            />


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

export default ShowcasesFormComponent