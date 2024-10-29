"use client";
import { useEffect } from "react";
import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";
import SearchComponent from "@/app/components/admin-components/admin-shared-components/SearchComponent";

import UsersTabsComponents from "@/app/components/admin-components/admin-shared-components/UsersTabsComponent";
import PaginationComponent from "@/app/components/admin-components/admin-shared-components/PaginationComponent";
import ModelDialogFormComponent from "@/app/components/admin-components/enrollments-component/models-components/ModelDialogFormComponent";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";




interface IDesignerUsersBase{
  username: string;
  email: string;
  created: Date;
  picture: string;
}


const PageIndex= ()=> {

    const dispatch= useDispatch();

    const searchUrl= "https://";


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Model"}));
        dispatch(setNavBackButton({action: false}));
      },[]);


    const designerUsers:IDesignerUsersBase[]= [
      {username: "Aladewfuhweufhwefwefwejdba", email:"aalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
      {username: "Sade Adu", email:"liwrleaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
      {username: "Sade Adu", email:"poiqpenaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
    ]
    


    return (        
        <div className="lg:col-span-4 h-full w-[90%] mx-auto mt-[20px] flex flex-col items-center gap-y-[50px]">
            <SearchComponent searchUrl={searchUrl}/> 

            <UsersTabsComponents designerUsers={designerUsers} DialogFormViewComponent={ModelDialogFormComponent}/>

            <PaginationComponent totalPageNo={5} searchUrl={searchUrl}/>

            <Tooltip content="Add New Model">
              <Link href={"/pages/admin-pages/enrollments-pages/models-page/add-new-model-page"} className="text-4xl text-white text-center flex justify-center items-center fixed bottom-12 right-12 bg-orange-800 size-[60px] rounded-full border-2 border-orange-100 shadow-sm shadow-gray-800">
                  +
              </Link>
            </Tooltip>
        </div>
    );
  }


export default PageIndex;