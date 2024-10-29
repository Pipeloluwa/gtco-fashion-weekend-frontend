
"use client";
import { ChangeEvent, FormEventHandler, LegacyRef, useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogBody, Spinner, Input, Textarea } from '@material-tailwind/react';
import { MdCancel, MdOutlineDone } from 'react-icons/md';

import { rubikFont } from '@/app/fonts/fontsConfig';
import { useDispatch } from 'react-redux';

import { BsBoxArrowInUp } from 'react-icons/bs';
import { setNavAdminValue, setNavBackButton } from '@/app/state_management/reducers/admin-reducers/navAdminValue';







const PageIndex = () => {

    // const router = useRouter();
    const dispatch= useDispatch();
    const form:LegacyRef<HTMLFormElement> = useRef(null);
    const descriptionRef:LegacyRef<HTMLTextAreaElement> = useRef(null);
    const nameRef:LegacyRef<HTMLInputElement>= useRef(null);
    const emailRef:LegacyRef<HTMLInputElement>= useRef(null);
    const [feedBack, setFeedBack]= useState<string>("");

    // const [process1, setProcess1]= useState(false);
    const [dialog1, setDialog1]= useState("");

    // const titleCaption= "Excited to strut your stuff at our upcoming fashion event? We're thrilled to have you apply! Please be aware that you are required to upload an audition video of yourelf as a model (it should show where you are walking, sitting and standing. Also the video should not be more than 1 minute), all applications will be carefully reviewed, and only models who meet our selection criteria will be chosen. We’re looking for those who embody confidence, poise, and the ability to captivate an audience. If you’re what we’re looking for, we’ll reach out with the next steps. Ready to own the runway? Submit your details, and let your talent shine!";

    // const [validationText, setValidationText]= useState("");
    const [modelText, setModelText]= useState("Upload a video file (1 minute max)");
    const [pickModel, setPickModel]= useState<File | null>(null);
    const pickModelFunction = (e: ChangeEvent<HTMLInputElement> | null) => {
        if (!pickModel && e!== null && e.target.files !== null) {
            const filePicked= e.target.files[0];
            setPickModel(filePicked);
            
            try{setModelText(filePicked.name);}
            catch{setModelText('Upload a video file (1 minute max)'); setPickModel(null);}
        }

        else{
            setPickModel(null);
            setModelText('Upload a video file (1 minute max)');
        }

        // setValidationText("");
    }


    const sendEmail:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (nameRef.current){
        
            if (nameRef.current.value.trim() !== "") {
                setFeedBack("");
            } else {
                return setFeedBack("Please enter a name");
            }
        }


        if (descriptionRef.current){
        
            if (descriptionRef.current.value.trim() !== "") {
                setFeedBack(""); 
            } else {
            return setFeedBack("Please enter a message");
            }
        }





        // if (form.current && descriptionRef.current && nameRef.current && emailRef.current){
        //     setProcess1(true);
        //     setFeedBack("");

        //     const keepMessage= descriptionRef.current.value;
        //     descriptionRef.current.value= `NAME: ${nameRef.current.value} \n EMAIL: ${emailRef.current.value} \n \n MESSAGE: ${descriptionRef.current.value}`;
                    
        //     if (EMAIL_SERVICE_ID !== undefined || EMAIL_TEMPLATE_ID!== undefined && EMAIL_PUBLIC_KEY!== undefined) {
        //       emailjs
        //       .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, `New Designer Registered: ${nameRef.current.value}`, {
        //           publicKey: EMAIL_PUBLIC_KEY,
        //       })
        //       .then(
        //           () => {
        //           setProcess1(false);
        //           setDialog1("Message Sent Successfully");
        //           console.log('SUCCESS!');
        //           },
        //           (error) => {
        //           setProcess1(false);
        //           setDialog1("Sorry, could not send information, something went wrong");
        //           console.log('FAILED...', error);
        //           },
        //       ).catch((error) => {
        //           setProcess1(false);
        //           setDialog1("Sorry, could not send information, something went wrong");
        //           console.log(error);
        //       });
        //     }

        //     descriptionRef.current.value= keepMessage;
        // }

    };

    
    useEffect(() => {
        dispatch(setNavAdminValue({action: "Model"}));
        dispatch(setNavBackButton({action: true}));
      },[]);
    


    
    return (
        <div className= 'gap-y-3 mt-[20px] pb-12 w-[800px] mx-auto min-h-[820px] flex flex-col items-center'>
            
            <h1 className={`${rubikFont.className} w-[75%] mx-auto text-center text-3xl text-orange-800`}>
                {"Add New Model"}
            </h1>


            <form ref={form} onSubmit={sendEmail} className="w-[75%] min-h-[800px] mx-auto mt-[40px] flex flex-col justify-between bg-gray-100 p-[50px] gap-y-5 rounded-3xl shadow-xl shadow-gray-500">

                <input name='subject' defaultValue={"CONTACT US"} className='hidden'/>

                <Input 
                    label="Name" ref= {nameRef} required type="text" 
                    name="from_name" color='orange' size='lg' 
                    className='bg-white px-4 py-6 shadow-sm shadow-gray-3'
                />

                <Input 
                    label="Email" ref= {emailRef} required type="email" 
                    name="from_email" color='orange' size='lg' 
                    className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                />

                <Input 
                    label="Phone Number format(+xxx xxxxxxxxxx)" ref= {emailRef} required type="tel" 
                    name="from_phone" color='orange' size='lg' 
                    pattern="\+[0-9]{1,3}[0-9]{10}"
                    className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                />

                <Textarea 
                    label="Describe Yourself" required 
                    name="message" color='orange' size='lg' 
                    className='bg-white px-4 py-6 shadow-sm shadow-gray-300'
                />



                <div className={`cursor-pointer relative hover:bg-gray-500 hover:border-white hover:text-white ${pickModel !== null ? "bg-orange-800 hover:bg-orange-600 text-white" : "bg-gray-200"} sm:mt-2 flex flex-col w-full justify-center items-center gap-y-4 border-2 border-gray-400 border-dashed py-8 px-2 rounded-2xl`}>
                    <BsBoxArrowInUp className="size-10"/>
                    
                    <div className="flex flex-col gap-y-2 items-center">
                        <h1 className="font-bold text-center">{modelText}</h1>
                        <h1 className="italic text-sm"> {pickModel ? "( Click to remove )" : "( .mp4 )"}</h1>
                    </div>

                    {
                        !pickModel 
                        ?   <input  onChange={(e: ChangeEvent<HTMLInputElement>)  => {pickModelFunction(e);}} required  type="file" accept=".mp4" className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                        : <div  onClick= {() => pickModelFunction(null)}  className="opacity-0 absolute left-0 right-0 top-0 bottom-0"/>
                    }

                </div>


                <div className='h-5 flex items-center justify-center font-semibold text-red-500'>
                    {feedBack}
                </div>

                <Button type='submit' className='w-full h-[60px] flex items-center justify-center text-lg mb-4 bg-orange-800'>
                    {"Send"}
                    
                </Button>

            </form>




            <Dialog
                open= {dialog1 !== ""}
                handler={() => {setDialog1("")}} 
                className='bg-white/70'
            >

                <DialogBody className='flex items-center justify-center  text-2xl py-[130px]'>
                    <div className='flex flex-col items-center justify-center'>
                        {
                            dialog1 === "Sorry, could not send information, something went wrong"
                            ? <MdCancel className='size-[100px] text-red-500'/>

                            : <MdOutlineDone className='size-[100px] text-blue-800'/>
                        }
                        

                        <h1 className={`${dialog1 === "Sorry, could not send information, something went wrong" ? "text-red-500" : "text-blue-800"} text-center`}>
                            {dialog1}
                        </h1>

                    </div>
                </DialogBody>

            </Dialog>

        </div>
    );

}

export default PageIndex;