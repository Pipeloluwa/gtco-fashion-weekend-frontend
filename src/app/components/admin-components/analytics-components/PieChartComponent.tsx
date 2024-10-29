
import { Pie } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale } from "chart.js";
import { BarElement, ArcElement } from "chart.js";

import React, { useState } from "react";



Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement, ArcElement);



interface IPieChartComponent{
    designers: {
        name: string;
        total_no: number;
    };

    models: {
        name: string;
        total_no: number;
    };
}


const PieChartComponent:React.FC<IPieChartComponent> = ({designers, models})=> {
    // const [active, setActive]= useState("dashboard");


    return (
        <div className="flex flex-col mt-2 mb-16 w-full border rounded-lg bg-white shadow-md shadow-gray-500 px-8 py-2 hover:scale-105 duration-300 hover:border-2 hover:border-yellow-500">
            <h1 className="text-header py-6">
                Designers and Models
            </h1>

            <div className="flex justify-center items-center my-4">

                <Pie 
                    data={{
                        labels: [designers.name, models.name],

                        datasets: [
                            {
                                // Label for bars
                                label: "total count/value",
                                // Data or value of your each variable
                                data: [designers.total_no, models.total_no],
                                // Color of each bar
                                backgroundColor: ["#ff8f33", "#ffb67b"],
                                borderColor: ["white", "white"],
                                borderWidth: 1.0,
                            },
                        ],
                    }}


                    className="sm:w-[90px] sm:scale-100 scale-[80%] h-[30px] mx-auto"
                />


                <div className="flex flex-col ">
                    <div className="flex items-center">
                        <li className="text-2xl text-[#ffb67b]" />
                        <h1 className="text-[12px] font-medium -ml-4">{designers.name}</h1>
                    </div>

                    <div className="flex items-center">
                        <li className="text-2xl text-[#ff8f33]" />
                        <h1 className="text-[12px] font-medium -ml-4">{models.name}</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}


export default PieChartComponent;