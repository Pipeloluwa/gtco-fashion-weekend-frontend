import { rubikFont } from '@/app/fonts/fontsConfig'
import { Button, Dialog, DialogBody, Spinner } from '@material-tailwind/react'
import React, { LegacyRef, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { MdCancel, MdOutlineDone } from 'react-icons/md';

const HomeSegmentComponent7 = () => {

    const EMAIL_SERVICE_ID: string|undefined= process.env.VITE_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID: string|undefined= process.env.VITE_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY: string|undefined= process.env.VITE_EMAIL_PUBLIC_KEY;

    const form:LegacyRef<HTMLFormElement> = useRef(null);
    const messageRef:LegacyRef<HTMLInputElement>= useRef(null);
    const [feedBack, setFeedBack]= useState<string>("");
    

    const [process1, setProcess1]= useState(false);
    const [dialog1, setDialog1]= useState("");



    const sendEmail:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    
        if (messageRef.current){
        
            if (messageRef.current.value.trim() !== "") {
                setFeedBack(""); 
            } else {
            return setFeedBack("Please enter an email address");
            }
        }
    
    
    
        if (form.current && messageRef.current){
            setFeedBack("");
            setProcess1(true);
    
            const keepMessage= messageRef.current.value;
            messageRef.current.value= `EMAIL: ${messageRef.current.value}`;
    
            if (EMAIL_SERVICE_ID && EMAIL_TEMPLATE_ID && EMAIL_PUBLIC_KEY){
                emailjs
            .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, form.current, {
                publicKey: EMAIL_PUBLIC_KEY!,
            })
            .then(
                () => {
                setProcess1(false);
                setDialog1("Message Sent Successfully");
                console.log('SUCCESS!');
                },
                (error) => {
                setProcess1(false);
                setDialog1("Sorry, could not send information, something went wrong");
                console.log('FAILED...', error);
                },
            ).catch((error) => {
                setProcess1(false);
                setDialog1("Sorry, could not send information, something went wrong");
                console.log(error);
            })
            }
    
            messageRef.current.value= keepMessage;
        }
    
      };




    return (
        <div className='w-[75%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-y-6'>
                <h1 className='text-5xl tracking-widest text-orange-800'>
                    {"Stay Up To Date"}
                </h1>

                <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                    {"Sign up to our newsletter and stay up to date."}
                </p>



                <div className={`${rubikFont.className} rounded-3xl overflow-hidden shadow-lg shadow-gray-500 relative flex flex-col items-center h-[500px] w-full bg-gray-100`}>
                    <Image priority={true} quality={100} alt='picture' src="/images/pictures/drake-s-takes-vKnRYW-mtek-unsplash.webp" width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                    </Image>


                    <div className='absolute left-0 right-0 top-0 bottom-0 p-8 bg-black/40 flex flex-col justify-center items-center'>
                        <p className='w-[50%] text-center mx-auto text-white'>
                         {" By subscribing, you'll receive the latest news on the fashion show schedule, highlights, and more. "}
                        </p>


                        <form ref={form} onSubmit={sendEmail}className='w-[50%] mx-auto z-10 my-10 gap-y-4 flex flex-col items-center justify-between'>
                                
                            <input name='subject' defaultValue={"WEBSITE NEWSLETTER EMAIL"} className='hidden'/>

                            <input ref={messageRef} type="email" name='message' className="h-[60px] p-3 flex w-full rounded-lg text-black outline-none focus:ring-2 focus:ring-inset focus:ring-orange-800"  placeholder="Your Email Address"/>

                            <div className='lg:hidden py-4 h-5 flex sm:text-start items-center sm:justify-start justify-center font-semibold text-white'>
                                {feedBack}
                            </div>
                                
                            

                            <Button type='submit' className={`${rubikFont.className} tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                                {
                                    process1 
                                    
                                    ? 
                                    <div className='flex w-full items-center justify-center'>
                                        <Spinner color='blue' className='size-[45px]' onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}/>     
                                    </div>


                                    : "Submit"
                                }
                            </Button>
                        </form>


                        <div className='lg:flex hidden py-4 h-5 font-semibold text-white'>
                            {feedBack}
                        </div>

                    </div>
                </div>

                
                <Dialog
                    open= {dialog1 !== ""}
                    handler={() => {setDialog1("")}} 
                    className='bg-white/70'
                    size='sm'
                  
                >

                    <DialogBody className='flex items-center justify-center text-blue-800 text-2xl py-[130px]'>
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

        </div>
    );
}

export default HomeSegmentComponent7