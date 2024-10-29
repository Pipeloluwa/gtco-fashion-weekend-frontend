import Image from 'next/image';
import React, { useState } from 'react';
import PromptComponent from '@/app/components/shared-components/PromptComponent';
import SuccessComponent from '@/app/components/shared-components/SuccessComponent';
import { Textarea } from '@material-tailwind/react';



interface IUserDataBase{
    username: string;
    email: string;
    created: Date;
    picture: string;
}


interface IUserData{
    userData: IUserDataBase[];
}



const MessageComponent:React.FC<IUserData> = ({userData}) => {
    // const [dialogState, setDialogState]= useState<boolean>(false);
    const [selectEmail, setSelectEmail] = useState<string[]>([]);
    // const [dateFilter, setDateFilter] = useState<string>("2024");

    const [messageField, setMessageField]= useState<(string)>("");

    const singleSelectEmailFunction= (event: React.ChangeEvent<HTMLInputElement>)=> {
        const {value, checked}= event.currentTarget;
        if(checked)
            {setSelectEmail(values => [...values, value])}
        else{
            setSelectEmail(values => values.filter(storedValue => storedValue !== value ));
        }
        console.log(selectEmail);
    }


    const allSelectEmailFunction= (event: React.ChangeEvent<HTMLInputElement>)=> {
        const {checked}= event.currentTarget;
        if(checked)
            {setSelectEmail(userData.map(item => item.email)) }
        else{
            setSelectEmail([]);
        }
    }


    // const singleUserDataFunction= (email: string)=> {

    //     setDialogState(true);
    // }


    const [successComponentState, setSuccessComponentState] = useState<boolean>(false);

    const [promptComponentState, setPromptComponentState] = useState<boolean>(false);
    // const [deleteId, setDeleteId]= useState<string[]>([]);
    const deleteForm= ()=> {
        setPromptComponentState(false);
        setSuccessComponentState(true);
    }

    // const confirmDeleteForm= (id:string)=> {
    //     setDeleteId(values => [...values, id]);
    //     setPromptComponentState(true);
    // }


    // const confirmDeleteSelectedForm= ()=> {
    //     setPromptComponentState(true);
    // }



    return (
        <>

            <PromptComponent confirmFunction={deleteForm} message={"Are you sure you want to perform this operation?"} promptComponentState={promptComponentState} setPromptComponentState={setPromptComponentState}/>

            <SuccessComponent message={"Deleted Successfully"} successComponentState={successComponentState} setSuccessComponentState={setSuccessComponentState}/>

        
            <div className="flex flex-col gap-y-4 w-full text-sm "> 
                <div>
                    <Textarea 
                        value={messageField} 
                        onChange={e => setMessageField(e.target.value)}
                        label="Type your message here..."
                        name="message" color='orange' size='lg' 
                        className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                    />
                </div>




                <div className='flex justify-between items-center border h-[50px] px-2 bg-white'>
                    
                    <div className= "cursor-pointer flex items-center gap-x-3">
                        <input onChange={(event)=> allSelectEmailFunction(event)} type='checkbox' className='cursor-pointer size-5'/>
                        <h1>Select All</h1>
                    </div>

                    <div className='flex gap-x-10'>
                        <button disabled={selectEmail.length=== 0} className={`${selectEmail.length=== 0 ? "opacity-35 cursor-not-allowed" : "hover:bg-white/75 hover:text-orange-800"} bg-orange-800 text-white rounded-3xl my-shadow-style sm:px-8 px-5 py-2 font-bold `}>
                            Send Message
                        </button>
                    </div>
                </div>
                

                {      
                    userData.map((item, index) => (
                        <div key={`userDataList${index}`} className="flex md:flex-row flex-col md:items-center justify-between w-full md:h-[65px] p-3 sm:px-2 px-2 border rounded-xl">     
                            
                            <div className="md:flex md:pr-4 sm:hidden flex justify-between ">
                                <input value={item.email} checked={selectEmail.includes(item.email)} onChange={event => singleSelectEmailFunction(event)}  type='checkbox'  className='cursor-pointer z-10 size-5'/>
                            </div>

                            <div className="sm:-mt-0 -mt-4 flex items-center md:justify-start justify-center md:w-fit w-full">  
                                <div className="flex md:flex-row flex-col gap-x-3 items-center">
                                    <div className="my-picture-style w-[52px] h-[52px] rounded-full flex">
                                        <Image 
                                            alt=''
                                            src={item.picture} 
                                            width={100}
                                            height={0}
                                            className={`my-image-cover-style w-[100%] h-[100%] flex `}
                                        ></Image>
                                    </div>

                                    <div className="flex flex-col w-[190px] md:pr-3">
                                        <h1 className="md:text-start text-center truncate">
                                            {item.username}
                                        </h1> 

                                    </div>
                                </div>

                            </div>


                            <div className='text-center md:mt-0 mt-3 '>
                                {`Reg Date: ${item.created.toDateString()}`}
                            </div>

                        </div>
                    ))
                }  

            </div>
        </>    
    );
}

export default MessageComponent