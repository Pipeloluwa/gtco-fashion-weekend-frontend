import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale } from "chart.js";
import { BarElement } from "chart.js";

import React, { useState } from "react";


Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);




interface IHistogramChartComponentBase{
    name: string;
    total_users: number;
}

interface IHistogramChartComponent{
    histogramData: IHistogramChartComponentBase[]
}

const HistogramChartComponent:React.FC<IHistogramChartComponent>= ({histogramData})=> {
    // const [active, setActive]= useState("dashboard");


    return (
        <div className="flex flex-col mt-2 mb-16 w-full border rounded-lg bg-white shadow-md shadow-gray-500 px-8 py-2  hover:scale-105 duration-300 hover:border-2 hover:border-yellow-500">
            <h1 className="text-header py-6">
                Users Registration
            </h1>

            <div className="flex h-full justify-center items-center my-4">

                <Bar 
                    data={{
                        labels: [histogramData[0].name, histogramData[1].name, histogramData[2].name, histogramData[3].name],

                        datasets: [
                            {
                                // Label for bars
                                label: "total count/value",
                                // Data or value of your each variable
                                data: [histogramData[0].total_users, histogramData[1].total_users, histogramData[2].total_users, histogramData[3].total_users],
                                // Color of each bar
                                backgroundColor: 
                                    ["#FF8F00", "#FF7900", "#E86100", "#EC5800"],
                                // Border color of each bar
                                borderColor: ["#FF8F00", "#FF7900", "#E86100", "#EC5800"],
                                borderWidth: 0.5,
                            },
                        ],
                    }}
                />
                

            </div>
        </div>
    )
}

export default HistogramChartComponent;
