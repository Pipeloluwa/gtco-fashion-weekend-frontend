"use client";
import { useEffect } from "react";
import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";
import PaginationComponent from "@/app/components/admin-components/admin-shared-components/PaginationComponent";
import HighlightsListComponent from "@/app/components/admin-components/highlights-component/HighlightsListComponent";
import { IHighlightsBase } from "@/app/interfaces/admin-interfaces/HighlightsInterfaces";




const PageIndex= ()=> {

    const dispatch= useDispatch();
    const searchUrl= "https://";


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Highlights"}));
        dispatch(setNavBackButton({action: false}));
      },[]);


    


    const designerHighlights:IHighlightsBase[]= [
      {
        id: "sfsdfsdfsdvvwe",
        userName: "Danjuma Buremo",
        designCategory: "Clothes",
        userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
        userImage: '/images/pictures/1.webp'
      },


      {
        id: "sfsdfsdfsdvvwe",
        userName: "Danjuma Buremo",
        designCategory: "Clothes",
        userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
        userImage: '/images/pictures/1.webp'
      },


      {
        id: "sfsdfsdfsdvvwe",
        userName: "Danjuma Buremo",
        designCategory: "Clothes",
        userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
        userImage: '/images/pictures/1.webp'
      }

    ]
    

    

    return (        
        <div className="lg:col-span-4 h-full w-[90%] mx-auto mt-[20px] flex flex-col items-center gap-y-[50px]">

            <HighlightsListComponent higlightsData={designerHighlights}/>

            <PaginationComponent  totalPageNo={5} searchUrl={searchUrl}/>

        </div>
    );
  }


export default PageIndex;