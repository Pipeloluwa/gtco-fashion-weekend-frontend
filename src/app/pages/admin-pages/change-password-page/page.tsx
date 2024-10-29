"use client";
import { useEffect, useState } from "react";

import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";

import { Button, Input } from "@material-tailwind/react";
import { rubikFont } from "@/app/fonts/fontsConfig";



// interface IDesignerUsersBase{
//   username: string;
//   email: string;
//   created: Date;
//   picture: string;
// }


const PageIndex= ()=> {

    const dispatch= useDispatch();
    // const searchUrl= "https://";

    const [oldPasswordField, setOldPasswordField]= useState<(string)>("");
    const [newPasswordField, setNewPasswordField]= useState<(string)>("");
    const [confirmPasswordField, setConfirmPasswordField]= useState<(string)>("");

    useEffect(() => {
        dispatch(setNavAdminValue({action: "Change Password"}));
        dispatch(setNavBackButton({action: false}));
      });

    

    return (        
        <div className="lg:col-span-4 w-[90%] mx-auto mt-[50px] flex flex-col justify-center items-center gap-y-[10px]">

            <div className='w-[700px] my-8 flex flex-col gap-y-8'>
                <Input 
                    value={oldPasswordField}
                    onChange={e => setOldPasswordField(e.target.value)}
                    label="Enter Old Password" type="password" 
                    color='orange' size='lg'
                    className='bg-white px-4 py-7 shadow-sm shadow-gray-300'
                />


                <Input 
                    value={newPasswordField}
                    onChange={e => setNewPasswordField(e.target.value)}
                    label="Enter New Password" type="password" 
                    color='orange' size='lg'
                    className='bg-white px-4 py-7 shadow-sm shadow-gray-300'
                />


                <Input 
                    value={confirmPasswordField}
                    onChange={e => setConfirmPasswordField(e.target.value)}
                    label="Confirm New Password" type="password" 
                    color='orange' size='lg'
                    className='bg-white px-4 py-7 shadow-sm shadow-gray-300'
                />  
            </div>


            <Button onClick={() => {}} className={`${rubikFont.className} w-[700px] tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                {"Save"}
            </Button>

        </div>
    );
  }


export default PageIndex;