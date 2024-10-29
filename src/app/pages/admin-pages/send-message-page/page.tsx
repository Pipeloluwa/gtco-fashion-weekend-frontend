"use client";
import { useEffect, useState } from "react";

import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";

import MessageComponent from "@/app/components/admin-components/send-message-component/MessageComponent";



interface IUserDataBase{
  username: string;
  email: string;
  created: Date;
  picture: string;
}


const PageIndex= ()=> {

    const dispatch= useDispatch();
    // const searchUrl= "https://";

    // const countDownData= {
    //     dateTime: "2024-11-03T01:02:03"
    //   }


    const [userData, setUserData]= useState<IUserDataBase[]>([]);


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Send Message"}));
        dispatch(setNavBackButton({action: false}));


        setUserData([
          {username: "Aladewfuhweufhwefwefwejdba", email:"aalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
          {username: "Sade Adu", email:"liwrleaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
          {username: "Sade Adu", email:"poiqpenaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
        ])
      });

    

    return (        
        <div className="lg:col-span-4 w-[90%] mx-auto mt-[50px] flex flex-col justify-center items-center gap-y-[10px]">

            <MessageComponent userData={userData}/>

        </div>
    );
  }


export default PageIndex;