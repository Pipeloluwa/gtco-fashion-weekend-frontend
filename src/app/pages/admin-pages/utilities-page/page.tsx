"use client";
import { useEffect } from "react";

import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";

import Countdown from "react-countdown";
import CountdownTimerComponent from "@/app/components/admin-components/utilities-components/CountdownTimerComponent";
import SetTImerComponent from "@/app/components/admin-components/utilities-components/SetTImerComponent";
import { Button } from "@material-tailwind/react";
import { rubikFont } from "@/app/fonts/fontsConfig";
import YoutubeHighlightFormComponent from "@/app/components/admin-components/utilities-components/YoutubeHighlightFormComponent";
import MapFormComponent from "@/app/components/admin-components/utilities-components/MapFormComponent";



// interface IDesignerUsersBase{
//   username: string;
//   email: string;
//   created: Date;
//   picture: string;
// }


const PageIndex= ()=> {

    const dispatch= useDispatch();
    // const searchUrl= "https://";

    const countDownData= {
        dateTime: "2024-11-03T01:02:03"
      }


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Utilities"}));
        dispatch(setNavBackButton({action: false}));
      });

    

    return (        
        <div className="lg:col-span-4 w-[90%] mx-auto mt-[50px] flex flex-col justify-center items-center gap-y-[10px]">

            <Countdown date={countDownData.dateTime} renderer={CountdownTimerComponent}>
            </Countdown>

            <SetTImerComponent dateTime={countDownData.dateTime}/>


            <YoutubeHighlightFormComponent />

            <MapFormComponent />


            <Button onClick={() => {}} className={`${rubikFont.className} w-[700px] tracking-widest text-[15px] bg-orange-900 big-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}>
                {"Save"}
            </Button>

        </div>
    );
  }


export default PageIndex;