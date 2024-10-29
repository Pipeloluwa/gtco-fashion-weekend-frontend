"use client";
import { useEffect } from "react";
import HistogramChartComponent from "@/app/components/admin-components/analytics-components/HistogramChartComponent";
import { setNavAdminValue, setNavBackButton } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";
import RecentModelsComponent from "@/app/components/admin-components/analytics-components/RecentModelsComponent";
import RecentDesignersComponent from "@/app/components/admin-components/analytics-components/RecentDesignersComponent";
import PieChartComponent from "@/app/components/admin-components/analytics-components/PieChartComponent";
import { NextPage } from "next";



export const selected_models= [];

const PageIndex: NextPage = ()=> {

    const dispatch= useDispatch();

    // const [is_model_delete, set_is_model_delete]= useState<boolean>(false);
    // const [model_json_data, set_model_json_data]= useState([]);
    // const [collapseMenuState, setCollapseMenuState]= useState<boolean>(false);

    // const [cancel_delete, setDelete]= useState(false);
    // const cancel_delete_= () => {
    //     setDelete(!cancel_delete);
    // }

    // const [continue_delete, setContinueDelete]= useState(false);
    // const continue_delete_= () => {
 
    // }


    const cardData= {
        designers: {name: "Designers", total_no: 340}, 
        models: {name: "Models", total_no: 789}, 
        users: {name: "Total Users", total_no: 340}, 
        locked_users: {name: "Locked Users", total_no: 8}, 
    };


    const histogramData= [
        {name: "June", "total_users": 5},
        {name: "July", "total_users": 50},
        {name: "August", "total_users": 8},
        {name: "September", "total_users": 20}
    ]



    const modelUsers= [
        {username: "Sade Adu", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
        {username: "Sade Adu", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
        {username: "Sade Adu", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
    ]


    const designerUsers= [
        {username: "Aladewfuhweufhwefwefwejdba", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
        {username: "Sade Adu", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
        {username: "Sade Adu", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
    ]



    useEffect(() => {
        dispatch(setNavAdminValue({action: "Analytics"}));
        dispatch(setNavBackButton({action: false}));
      });
    


    return ( 
        <div className="lg:col-span-4 h-full w-[90%] mx-auto mt-[50px] flex flex-col">
            
            <div className="lg:grid lg:grid-cols-4 lg:h-32 lg:gap-x-10 flex flex-col text-sm font-medium text-center">
                <div className="lg:my-0 my-4 h-[150px]  bg-[#ffffff] text-orange-800 lg:py-2 py-5 flex flex-col justify-start  shadow-md shadow-gray-500 rounded-lg my-hover-transition">
                    {"Total Designers"}
                    <h1 className="mt-8 text-[60px]">
                        {cardData.designers.total_no}
                    </h1>
                </div>

                <div className="lg:my-0 my-4 h-[150px]  bg-[#ffffff] text-orange-800 lg:py-2 py-5 flex flex-col justify-start  shadow-md shadow-gray-500 rounded-lg my-hover-transition">
                    {"Total Models"}
                    <h1 className="mt-8 text-[60px]">
                        {cardData.models.total_no}
                    </h1>
                </div>

                <div className="lg:my-0 my-4 h-[150px]  bg-[#ffffff] text-orange-800 lg:py-2 py-5 flex flex-col justify-start  shadow-md shadow-gray-500 rounded-lg my-hover-transition">
                    {"Total Users"}
                    <h1 className="mt-8 text-[60px]">
                        {cardData.users.total_no}
                    </h1>
                </div>

                <div className="lg:my-0 my-4 h-[150px]  bg-[#ffffff] text-orange-800 lg:py-2 py-5 flex flex-col justify-start  shadow-md shadow-gray-500 rounded-lg my-hover-transition">
                    {"Locked Users"}
                    <h1 className="mt-8 text-[60px]">
                        {cardData.locked_users.total_no}
                    </h1>
                </div>

            </div>


            {/* ++++++++++++++ CHARTS +++++++++++++ */}
            <div className="lg:grid lg:grid-cols-2 flex flex-col w-full mt-16 lg:gap-x-8">
                <PieChartComponent designers={cardData.designers} models={cardData.models} />
                <HistogramChartComponent histogramData={histogramData}/>
            </div>


            <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 flex flex-col w-full">
                <RecentModelsComponent modelUsers={modelUsers}/>
                <RecentDesignersComponent designerUsers={designerUsers}/>
                
            </div> 


        </div>
    );
  }


export default PageIndex;