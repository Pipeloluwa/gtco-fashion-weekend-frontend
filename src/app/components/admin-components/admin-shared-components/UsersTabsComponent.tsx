"use client";
import React, { useState } from 'react';
import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from '@material-tailwind/react';
import UserFormsComponents from './UserFormsComponents';
import { IDialogFormData } from '@/app/interfaces/admin-interfaces/shared-interfaces/IDialogDataInterface';


interface IDesignerUsersBase{
    username: string;
    email: string;
    created: Date;
    picture: string;
}


interface IDesignerUsers{
    designerUsers: IDesignerUsersBase[];
    DialogFormViewComponent: React.FC<IDialogFormData>;
  }


const UsersTabsComponents:React.FC<IDesignerUsers>= ({designerUsers, DialogFormViewComponent}) => {

    const [activeTab, setActiveTab]= useState<string>("All");

    return (
        <Tabs value={"All"} className= "mt-[20px] flex flex-col w-full items-center justify-center">

            <TabsHeader 
                indicatorProps={{
                    className: "bg-orange-800 rounded-[15px]"
                }}
                className='w-[354px] p-0 bg-gray-300 rounded-[15px]'
                >

                <Tab key={"tab1"} value={"All"} onClick={() => {setActiveTab("All")}} className={`text-sm p-2 h-[40px] ${activeTab==="All" ? "font-semibold text-white" : ""}`}>
                    {"All"}
                </Tab>

                <Tab key={"tab2"} value={"Selected"} onClick={() => {setActiveTab("Selected")}} className={`text-sm p-2 h-[40px] ${activeTab==="Selected" ? "font-semibold text-white" : ""}`} >
                    {"Selected"}
                </Tab>

                <Tab key={"tab3"} value={"Rejected"} onClick={() => {setActiveTab("Rejected")}} className={`text-sm p-2 h-[40px] ${activeTab==="Rejected" ? "font-semibold text-white" : ""}`} >
                    {"Rejected"}
                </Tab>
            </TabsHeader>  
            

            <TabsBody className='flex w-full' >
                <TabPanel key={"tabpanel1"} value={"All"} className='flex w-full'>
                    <UserFormsComponents 
                        userData={designerUsers} 
                        tabType='All' 
                        DialogFormViewComponent={DialogFormViewComponent} 
                        />
                </TabPanel>

                <TabPanel key={"tabpanel2"} value={"Selected"} className='flex w-full'>
                    <UserFormsComponents 
                        userData={designerUsers} 
                        tabType='Selected' 
                        DialogFormViewComponent={DialogFormViewComponent} 
                        />
                </TabPanel>

                <TabPanel key={"tabpanel3"} value={"Rejected"} >
                    <UserFormsComponents 
                        userData={designerUsers} 
                        tabType='Rejected' 
                        DialogFormViewComponent={DialogFormViewComponent} 
                        />
                </TabPanel>

            </TabsBody>

        </Tabs>
    );
}

export default UsersTabsComponents