import Image from 'next/image';
import React, { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri';
import PromptComponent from '@/app/components/shared-components/PromptComponent';
import SuccessComponent from '@/app/components/shared-components/SuccessComponent';
import { Select, Option } from '@material-tailwind/react';
import { IHighlightList } from '@/app/interfaces/admin-interfaces/HighlightsInterfaces';
import Link from 'next/link';





const HighlightsListComponent:React.FC<IHighlightList> = ({higlightsData}) => {

    // const [singleHighlightsData, setSingleHighlightsData]= useState<IHighlightsBase | null>(null);
    // const [dialogState, setDialogState]= useState<boolean>(false);
    const [selectUsername, setSelectUsername] = useState<string[]>([]);
    const [dateFilter, setDateFilter] = useState<string>("2024");

    const singleSelectEmailFunction= (event: React.ChangeEvent<HTMLInputElement>)=> {
        const {value, checked}= event.currentTarget;
        if(checked){
            setSelectUsername(values => [...values, value]);
        }
         else{
            setSelectUsername(values => values.filter(storedValue => storedValue !== value ));
         }
        console.log(selectUsername);
    }


    const allSelectEmailFunction= (event: React.ChangeEvent<HTMLInputElement>)=> {
        const {checked}= event.currentTarget;

        if(checked){
            setSelectUsername(higlightsData.map(item => item.userName)) ;
        }
         else{
            setSelectUsername([]);
         }
    }


    const singleUserDataFunction= ()=> {
        // setSingleHighlightsData(
        //     {
        //         id: "sfsdfsdfsdvvwe",
        //         userName: "Danjuma Buremo",
        //         designCategory: "Accessories",
        //         userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
        //         userImage: '/images/pictures/1.webp'
        //     }
        // );

        // setDialogState(true);
    }


    const [successComponentState, setSuccessComponentState] = useState<boolean>(false);

    const [promptComponentState, setPromptComponentState] = useState<boolean>(false);
    // const [deleteId, setDeleteId]= useState<string[]>([]);
    const deleteForm= ()=> {
        setPromptComponentState(false);
        setSuccessComponentState(true);
    }

    const confirmDeleteForm= ()=> {
        // setDeleteId(values => [...values, id]);
        setPromptComponentState(true);
    }


    const confirmDeleteSelectedForm= ()=> {
        setPromptComponentState(true);
    }



    return (
        <>

            <PromptComponent confirmFunction={deleteForm} message={"Are you sure you want to perform this operation?"} promptComponentState={promptComponentState} setPromptComponentState={setPromptComponentState}/>

            <SuccessComponent message={"Deleted Successfully"} successComponentState={successComponentState} setSuccessComponentState={setSuccessComponentState}/>

        
            <div className="flex flex-col gap-y-8 w-full text-sm mt-8"> 
                <div className='flex justify-between items-center border py-1 px-2 bg-white'>
                    
                    <div className= "cursor-pointer flex items-center gap-x-3">
                        <input onChange={(event)=> allSelectEmailFunction(event)} type='checkbox' className='cursor-pointer size-5'/>
                        <h1>Select All</h1>
                    </div>

                    <div className='flex gap-x-10'>
                        <div>
                            <Select 
                                variant='static'
                                value= {dateFilter}
                                onChange={value => setDateFilter(preValue => value ? value : preValue)}
                                color='orange' size='md'
                                className='bg-white shadow-sm shadow-gray-300 my-0 py-0 pr-4' 
                            >
                                <Option value='2024'>{"2024"}</Option>
                                <Option value='2023'>{"2023"}</Option>
                                <Option value='2022'>{"2022"}</Option>
                            </Select>
                        </div>


                        <button disabled={selectUsername.length=== 0} className={`${selectUsername.length=== 0 ? "opacity-35 cursor-not-allowed" : "hover:bg-white/75 hover:text-orange-800"} bg-orange-800 text-white rounded-3xl my-shadow-style sm:px-8 px-5 sm:py-2 py-1 font-bold `}>
                            Add to selection
                        </button>

                        <button onClick={() => confirmDeleteSelectedForm()} disabled={selectUsername.length=== 0} className={`${selectUsername.length=== 0 ? "opacity-35 cursor-not-allowed" : "hover:bg-white/75 hover:text-red-500"} bg-red-500 text-white rounded-3xl my-shadow-style sm:px-8 px-5 sm:py-2 py-1 font-bold `}>
                            Delete
                        </button>
                    </div>
                </div>
                

                {      
                    higlightsData.map((item, index) => (
                        <div key={`userDataList${index}`} className="flex md:flex-row flex-col md:items-center justify-between w-full md:h-[65px] p-3 sm:px-2 px-2 border rounded-xl">     
                            
                            <div className="md:flex md:pr-4 sm:hidden flex justify-between ">
                                <input value={item.userName} checked={selectUsername.includes(item.userName)} onChange={event => singleSelectEmailFunction(event)}  type='checkbox'  className='cursor-pointer z-10 size-5'/>
                            </div>

                            <div className="sm:-mt-0 -mt-4 flex items-center md:justify-start justify-center md:w-fit w-full">  
                                <div className="flex md:flex-row flex-col gap-x-3 items-center">
                                    <div className="my-picture-style w-[52px] h-[52px] rounded-full flex">
                                        <Image 
                                            alt=''
                                            src={item.userImage} 
                                            width={100}
                                            height={0}
                                            className={`my-image-cover-style w-[100%] h-[100%] flex `}
                                        ></Image>
                                    </div>

                                    <div className="flex flex-col w-[190px] md:pr-3">
                                        <h1 className="md:text-start text-center truncate">
                                            {item.userName}
                                        </h1> 

                                    </div>
                                </div>

                            </div>


                            <div className='text-center md:mt-0 mt-3 '>
                                {`Total Votes: ${item.designCategory}`}
                            </div>


                            <div className="flex items-center gap-x-6 md:w-fit w-full">
                                <Link href={`/pages/admin-pages/highlights-page/${item.id}`} onClick={() => singleUserDataFunction()} className="my-shadow-style md:w-fit w-full py-2 cursor-pointer flex md:justify-start justify-center md:items-start items-center px-6 bg-white md:mt-0 mt-2 rounded-3xl border border-gray-300 hover:bg-orange-800 hover:border hover:border-white hover:text-white h-[60px] md:h-fit">
                                    {"Designer Highlights"}
                                </Link>

                                <RiDeleteBinLine onClick={() => confirmDeleteForm()} className="hover:bg-gray-300 rounded-full text-red-700 md:flex scale-[150%] cursor-pointer"/>
                            </div>
                        </div>
                    ))
                }  

            </div>
        </>    
    );
}

export default HighlightsListComponent