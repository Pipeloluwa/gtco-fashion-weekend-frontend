"use client";
import React, { useState } from 'react';
import { Tabs, TabsHeader, Tab, TabsBody, TabPanel } from '@material-tailwind/react';
import { IPollsDataBase } from '@/app/interfaces/admin-interfaces/PollsInterfaces';
import PollsListComponent from './PollsListComponent';





const PollsTabsComponents= () => {

    const pollsClothesData:IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            title: "Clothes Designer",
            votes: 500,
            userName: "Danjuma Buremo",
            designCategory: "Clothes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Shoes Designer",
            votes: 234,
            userName: "Lakasegbe Onyeka",
            designCategory: "Clothes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Accessories Designer",
            votes: 411,
            userName: "Chinyere Damudu",
            designCategory: "Clothes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },
    ];


    const pollsShoesData:IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            title: "Clothes Designer",
            votes: 500,
            userName: "Danjuma Buremo",
            designCategory: "Shoes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Shoes Designer",
            votes: 234,
            userName: "Lakasegbe Onyeka",
            designCategory: "Shoes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Accessories Designer",
            votes: 411,
            userName: "Chinyere Damudu",
            designCategory: "Shoes",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },
    ];


    const pollsAccesoriesData:IPollsDataBase[]= [
        {
            id: "sfsdfsdfsdvvwe",
            title: "Clothes Designer",
            votes: 500,
            userName: "Danjuma Buremo",
            designCategory: "Accessories",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Shoes Designer",
            votes: 234,
            userName: "Lakasegbe Onyeka",
            designCategory: "Accessories",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Accessories Designer",
            votes: 411,
            userName: "Chinyere Damudu",
            designCategory: "Accessories",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp',
            userVotes: [
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"},
                {userName: "Danjuma Buremo"}
            ]
        },
    ];




    const [activeTab, setActiveTab]= useState<string>("Clothes");

    return (
        <Tabs value={"Clothes"} className= "mt-[20px] flex flex-col w-full items-center justify-center">

            <TabsHeader 
                indicatorProps={{
                    className: "bg-orange-800 rounded-[15px]"
                }}
                className='w-[354px] p-0 bg-gray-300 rounded-[15px]'
                >

                <Tab key={"tab1"} value={"Clothes"} onClick={() => {setActiveTab("Clothes")}} className={`text-sm p-2 h-[40px] ${activeTab==="Clothes" ? "font-semibold text-white" : ""}`}>
                    {"Clothes"}
                </Tab>

                <Tab key={"tab2"} value={"Shoes"} onClick={() => {setActiveTab("Shoes")}} className={`text-sm p-2 h-[40px] ${activeTab==="Shoes" ? "font-semibold text-white" : ""}`} >
                    {"Shoes"}
                </Tab>

                <Tab key={"tab3"} value={"Accessories"} onClick={() => {setActiveTab("Accessories")}} className={`text-sm p-2 h-[40px] ${activeTab==="Accessories" ? "font-semibold text-white" : ""}`} >
                    {"Accessories"}
                </Tab>
            </TabsHeader>  
            

            <TabsBody className='flex w-full' >
                <TabPanel key={"tabpanel1"} value={"Clothes"} className='flex w-full'>
                    <PollsListComponent 
                        pollsData={pollsClothesData} 
                        tabType='Clothes'
                        />
                </TabPanel>

                <TabPanel key={"tabpanel2"} value={"Shoes"} className='flex w-full'>
                    <PollsListComponent 
                        pollsData={pollsShoesData} 
                        tabType='Shoes'
                        />
                </TabPanel>

                <TabPanel key={"tabpanel3"} value={"Accessories"} >
                    <PollsListComponent 
                        pollsData={pollsAccesoriesData}
                        tabType='Accessories' 
                        />
                </TabPanel>

            </TabsBody>

        </Tabs>
    );
}

export default PollsTabsComponents