"use client";
import { useEffect } from "react";
import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";

import PaginationComponent from "@/app/components/admin-components/admin-shared-components/PaginationComponent";
import PollsTabsComponents from "@/app/components/admin-components/polls-component/PollsTabsComponent";



// interface IDesignerUsersBase{
//   username: string;
//   email: string;
//   created: Date;
//   picture: string;
// }


const PageIndex= ()=> {

    const dispatch= useDispatch();
    const searchUrl= "https://";


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Polls"}));
        dispatch(setNavBackButton({action: false}));
      },[]);



    // const designerUsers:IDesignerUsersBase[]= [
    //   {username: "Aladewfuhweufhwefwefwejdba", email:"aalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
    //   {username: "Sade Adu", email:"liwrleaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
    //   {username: "Sade Adu", email:"poiqpenaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
    // ]
    


    

    return (        
        <div className="lg:col-span-4 h-full w-[90%] mx-auto mt-[20px] flex flex-col items-center gap-y-[50px]">

            <PollsTabsComponents />

            <PaginationComponent  totalPageNo={5} searchUrl={searchUrl}/>

        </div>
    );
  }


export default PageIndex;