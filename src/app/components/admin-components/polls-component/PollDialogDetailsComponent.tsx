import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBody, Input, Textarea } from '@material-tailwind/react';
import { rubikFont } from '@/app/fonts/fontsConfig';
import Image from 'next/image';
import { IPollsDataBase } from '@/app/interfaces/admin-interfaces/PollsInterfaces';



interface IPollsData {
    singlePollsData: IPollsDataBase | null;
    dialogState: boolean;
    setDialogState: Dispatch<SetStateAction<boolean>>;
}


const PollDialogDetailsComponent:React.FC<IPollsData>= ({singlePollsData, dialogState, setDialogState}) => {

    return (
        <div className={`${rubikFont.className} tracking-widest z-10 flex justify-between mx-auto`}>
            <Dialog
                open= {dialogState}
                handler={() => {setDialogState(false)}} 
                className='h-[500px] bg-white/70 rounded-3xl'
                size='sm'
            >

                <DialogBody className={`${rubikFont.className} text-xs text-gray-800 flex flex-col gap-y-3 overflow-hidden h-full w-full items-center justify-center rounded-3xl bg-gray-100`}>

                    <div className="overflow-hidden overflow-y-scroll h-full w-full flex flex-col px-3 py-4 gap-y-10">

                        <Input 
                            readOnly
                            value={singlePollsData!.title}
                            label="Name" type="text" 
                            color='orange' size='lg'
                            className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                        />

                        <Input 
                            readOnly
                            value={singlePollsData!.userName}
                            label="Name" type="text" 
                            color='orange' size='lg' 
                            className='bg-white px-4 py-6 shadow-sm shadow-gray-3'
                        />

                        <Input 
                            readOnly
                            value={singlePollsData!.votes}
                            label="Email" type="email" 
                            color='orange' size='lg' 
                            className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                        />  

                        <Input 
                            readOnly
                            value={singlePollsData!.designCategory}
                            label="Design Category" type="text" 
                            color='orange' size='lg' 
                            className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                        />


                        <Textarea 
                            readOnly
                            value={singlePollsData!.userDescription} 
                            label="Description"
                            name="message" color='orange' size='lg' 
                            className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                        />


                        <div className='flex flex-col gap-y-2 font-light'>
                            <p className='pl-2'>
                                {"Brand Identity"}
                            </p>
                            <Image alt='' quality={100} src={singlePollsData!.userImage} width={100} height={0} className='flex w-full h-full object-cover rounded-3xl'></Image>
                        </div>



                        <div className='flex flex-col gap-y-2 font-light'>
                            <p className='pl-2'>
                                {"Users Votes: "}
                            </p>

                            <ul>
                                {
                                    singlePollsData!.userVotes.map((item, index) =>
                                        <li key={`singlePoll${index}`} className='bg-white px-4 py-6 shadow-sm shadow-gray-300'>
                                            <p>
                                                {item.userName}
                                            </p>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                    </div>


                </DialogBody>

            </Dialog>


        </div>
    )
}

export default PollDialogDetailsComponent;
